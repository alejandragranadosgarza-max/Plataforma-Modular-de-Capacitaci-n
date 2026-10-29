self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('capacitacion-store').then((cache) => {
      return cache.addAll([
        './entrenador_tester.html',
        './style.css',
        './app.js',
        './narrative_eval_lab.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});