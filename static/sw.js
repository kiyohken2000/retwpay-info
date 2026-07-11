/**
 * Self-destroying service worker.
 *
 * gatsby-plugin-offline was removed (2026-04), but browsers that visited the
 * old site still have its service worker registered and keep serving the
 * stale Gatsby 2 app shell from cache, which crashes against the Gatsby 5
 * assets. When those browsers check this URL for updates they install this
 * worker instead, which wipes every cache, unregisters itself and reloads
 * open tabs. Keep this file deployed permanently.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
