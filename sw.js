const CACHE_NAME = 'ta-esc-guide-v2';
const STATIC_ASSETS = [
  '.',
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/ui.js',
  'js/app.js',
  'manifest.json',
  'img/icons/icon-192.svg',
  'img/icons/icon-512.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      if (r) return r;
      return fetch(e.request).then(response => {
        if (response.ok && e.request.url.includes('unitpics/')) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, cloned));
        }
        return response;
      }).catch(() => {
        if (e.request.url.includes('unitpics/')) {
          return new Response('', { status: 404 });
        }
      });
    })
  );
});
