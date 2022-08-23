const staticApp = "masjid-raya-v1";
const assets = [
  "/",
  "/index.html",
  "assets/css/style.css",
  "assets/js/script.js",
  "assets/js/sw.js",
  "assets/images/png/favicon.png",
  "assets/images/png/thumbnail.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
