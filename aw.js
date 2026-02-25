// sw.js - sehr einfacher Service Worker
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  // default: nichts cachen, nur durchreichen (sicher & simpel)
  // Optional: hier könntest du später caching einbauen
});
