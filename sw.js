importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1512e014730eafd009a0.js",
    "revision": "d36edbcccc77e2106e51b5955740ddb2"
  },
  {
    "url": "/_nuxt/3ab3bbee31e3b5734dda.js",
    "revision": "e37555326d8a30f679f15e3fba9a9e30"
  },
  {
    "url": "/_nuxt/65dcc7a45ad9a8fa3cd2.js",
    "revision": "ab6fb75b9e49e2678d72953666c96698"
  },
  {
    "url": "/_nuxt/ef182102c5a7e256495d.js",
    "revision": "44608b82c725e8c031e68d6b8b2eddeb"
  }
], {
  "cacheId": "emoji-rate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
