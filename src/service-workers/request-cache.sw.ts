import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute, Route } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

const cacheFirst = new CacheFirst({
  cacheName: "cache-first",
  matchOptions: {
    ignoreVary: true,
    ignoreSearch: true,
  },
  plugins: [
    // This plugin will read the cache entries and return the first
    // response that has a status code of 200.
    // new CacheableResponsePlugin({
    //   statuses: [200],
    // }),
    new ExpirationPlugin({
      maxAgeSeconds: 600,
    }),
  ],
});

const foreverCache = new CacheFirst({
  cacheName: "forever-cache",
  matchOptions: {
    ignoreVary: true,
    ignoreSearch: true,
  },
  plugins: [
    // This plugin will read the cache entries and return the first
    // response that has a status code of 200.
    // new CacheableResponsePlugin({
    //   statuses: [200],
    // }),
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
    }),
  ],
});

const pagesRoute = new Route(({ url }) => {
  const isPageRoute = url.pathname.endsWith(".html");
  return isPageRoute;
}, cacheFirst);

const jsRoute = new Route(({ url }) => {
  return url.pathname.includes("assets/js");
}, foreverCache);

const cssRoute = new Route(({ url }) => {
  return url.pathname.includes("assets/css");
}, foreverCache);

const imagesRoute = new Route(({ url }) => {
  return url.pathname.endsWith(".svg");
}, foreverCache);

registerRoute(pagesRoute);
registerRoute(jsRoute);
registerRoute(cssRoute);
registerRoute(imagesRoute);

self.addEventListener("activate", function(event) {
  // @ts-expect-error
  return self.clients.claim();
});
