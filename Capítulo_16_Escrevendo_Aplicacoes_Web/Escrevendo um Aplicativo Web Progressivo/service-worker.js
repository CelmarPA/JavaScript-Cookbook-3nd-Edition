const cacheVersion = "v1";

const filesToCache = ["index.html", "/styles/main.css", "/js/main.js"];

self.addEventListener("install", (event) => {
    console.log("Evento de instalação do Service worker disparado");
    event.waitUntil(
        caches.open(cacheVersion).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log("Fetch interceptado por:", event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== cacheVersion) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
