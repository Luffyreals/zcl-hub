// ZCL Hub Service Worker - Offline Ready & Automatic Background Update
const CACHE_NAME = 'zcl-hub-v38';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './src/styles.css',
  './src/app.js',
  './manifest.json',
  './assets/logo.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Listen for messages from client UI to trigger immediate update or cache refresh
self.addEventListener('message', (event) => {
  if (!event.data || !event.data.type) return;

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'FORCE_REFRESH_CACHE') {
    event.waitUntil(
      caches.open(CACHE_NAME).then(async (cache) => {
        await Promise.allSettled(
          ASSETS_TO_CACHE.map(async (assetUrl) => {
            const response = await fetch(assetUrl, { cache: 'no-cache' });
            if (response && response.ok) {
              await cache.put(assetUrl, response.clone());
            }
          })
        );
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => {
          client.postMessage({ type: 'ZCL_CACHE_REFRESHED', timestamp: Date.now() });
        });
      })
    );
  }
});

self.addEventListener('fetch', (event) => {
  // Pass non-GET requests (e.g. POST AJAX forms, GitHub API) directly to the network
  if (event.request.method !== 'GET') {
    return;
  }

  const reqUrl = new URL(event.request.url);
  // Do not cache external API calls (such as api.github.com)
  if (reqUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        // Stale-While-Revalidate: fetch fresh version in background when online
        const networkFetch = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
              const prevEtag = cachedResponse ? cachedResponse.headers.get('etag') : null;
              const nextEtag = networkResponse.headers.get('etag');
              const prevMod = cachedResponse ? cachedResponse.headers.get('last-modified') : null;
              const nextMod = networkResponse.headers.get('last-modified');

              cache.put(event.request, networkResponse.clone());

              // Notify open tabs if a newer version of the file was detected on server
              const hasChanged =
                (prevEtag && nextEtag && prevEtag !== nextEtag) ||
                (prevMod && nextMod && prevMod !== nextMod);

              if (hasChanged) {
                self.clients.matchAll({ type: 'window' }).then((clients) => {
                  clients.forEach((client) => {
                    client.postMessage({
                      type: 'ZCL_SW_UPDATED',
                      url: event.request.url
                    });
                  });
                });
              }
            }
            return networkResponse;
          })
          .catch(() => {
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return cachedResponse;
          });

        return cachedResponse || networkFetch;
      })
    )
  );
});
