/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "57f4b6fe81159227ae9f34d5eff5bfdd"
  },
  {
    "url": "assets/css/0.styles.4116873f.css",
    "revision": "dfed95ad8ac02cfc92190fe410c0bc4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.49f883f1.js",
    "revision": "d079dd50290d52544f88edd535f2f9db"
  },
  {
    "url": "assets/js/12.506ffcb0.js",
    "revision": "bbedae768c88131131e95ce07393874a"
  },
  {
    "url": "assets/js/13.4ad79116.js",
    "revision": "89cd187cb81b06225b83acb81fd5d26c"
  },
  {
    "url": "assets/js/14.7f1783f8.js",
    "revision": "b9721dd854517d08dd3e8800819cb5a8"
  },
  {
    "url": "assets/js/15.87f328b5.js",
    "revision": "f0613b2f7ee6ffec4dc0583f3854ec63"
  },
  {
    "url": "assets/js/16.635a1c7c.js",
    "revision": "424cb211ebc1e78c1bb14e31aa4b4e49"
  },
  {
    "url": "assets/js/17.c0d2ec6f.js",
    "revision": "b6f8c8083538ef09b4d6da744577b82c"
  },
  {
    "url": "assets/js/18.56ae5e44.js",
    "revision": "2044a4ad8a4a79984c1bcc7db8fe4915"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.169bf8bc.js",
    "revision": "3d812e0d0d9874b1627bbba7ecaf93c8"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.8c1a0e86.js",
    "revision": "7e24d868644552fcf44a3bb0bf1f29fa"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.f2c957f6.js",
    "revision": "d6987fcf22864d0a2cdcb0fe4c2e69f0"
  },
  {
    "url": "config/index.html",
    "revision": "79f8110321a770387ad66e1b6b6edb42"
  },
  {
    "url": "guide/index.html",
    "revision": "1a61f04316332531cbb3791d5439029f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "53316a99f1ccbe03c0349250ccfeda5b"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "243436eaaaf3f8ec7edf015fabec7af5"
  },
  {
    "url": "intro.html",
    "revision": "070dbcde505aaf840b8ac43fd886f2cc"
  },
  {
    "url": "Javascripts/js.html",
    "revision": "7f6cd5c394853bcfaab88f6a0e7b8f14"
  },
  {
    "url": "React/jsx.html",
    "revision": "183395c9fcaf3170e735a328e5becb81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
