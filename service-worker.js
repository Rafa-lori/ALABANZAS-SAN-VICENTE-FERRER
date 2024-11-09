const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch: responder a las solicitudes con la caché si está disponible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Devuelve la respuesta de la caché si está disponible
        if (cachedResponse) {
          return cachedResponse;
        }
        // Si no está en la caché, realiza la solicitud de red
        return fetch(event.request);
      })
  );
});
