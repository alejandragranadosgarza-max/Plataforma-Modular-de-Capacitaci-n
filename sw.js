self.addEventListener('install', (e) => {
  self.skipWaiting(); // <-- Agrega esta línea para forzar la instalación inmediata
  e.waitUntil(
    caches.open('capacitacion-store').then((cache) => {
      return cache.addAll([
        './index.html',
        './style.css',
        './app.js',
        './narrative_eval_lab.js'
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); // <-- Agrega esta línea para tomar el control de la app al instante
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});