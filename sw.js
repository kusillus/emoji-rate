importScripts('/emoji-rate/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/emoji-rate/_nuxt/1512e014730eafd009a0.js",
    "revision": "d36edbcccc77e2106e51b5955740ddb2"
  },
  {
    "url": "/emoji-rate/_nuxt/d38a05cc4c012589862a.js",
    "revision": "94ab9ed19c81d9ba799cadf81cdcb5a5"
  },
  {
    "url": "/emoji-rate/_nuxt/ef182102c5a7e256495d.js",
    "revision": "44608b82c725e8c031e68d6b8b2eddeb"
  },
  {
    "url": "/emoji-rate/_nuxt/fcd968a3cfaea2ccc1ad.js",
    "revision": "791240d5af463aa813d32f350ea7bb23"
  }
], {
  "cacheId": "emoji-rate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/emoji-rate/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/emoji-rate/.*'), workbox.strategies.networkFirst({}), 'GET')
