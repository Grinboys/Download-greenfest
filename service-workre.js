const CACHE_NAME = 'greenboys-app-v1';
const ASSETS_TO_CACHE = [
  '/index.html',
  '/manifest.json',
  '/icon-512.png',
  '/style.css'
];

// تحميل الملفات في الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// استخدام الكاش عند عدم الاتصال
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
