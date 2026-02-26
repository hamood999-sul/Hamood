self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calorie-app").then(cache => {
      return cache.addAll(["index.html"]);
    })
  );
});
