importScripts('/holocard/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/holocard/_nuxt/1512e014730eafd009a0.js",
    "revision": "d36edbcccc77e2106e51b5955740ddb2"
  },
  {
    "url": "/holocard/_nuxt/50a3d230e415e443a15e.js",
    "revision": "d7db3e108488e656e4c9baff539480dd"
  },
  {
    "url": "/holocard/_nuxt/bb57492dba80c1ee0ec7.js",
    "revision": "ea20caab9b93b5460a8b7cd753aa5b49"
  },
  {
    "url": "/holocard/_nuxt/ef182102c5a7e256495d.js",
    "revision": "44608b82c725e8c031e68d6b8b2eddeb"
  }
], {
  "cacheId": "emoji-rate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/holocard/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/holocard/.*'), workbox.strategies.networkFirst({}), 'GET')
