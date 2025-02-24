'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "489f3f31221a7248d8f97d56186da5b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "037d0621f06c4556e7edc2f664f01ba9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e51d76dc89603f1aa771153ca282175c",
".git/logs/refs/heads/main": "43f2d0e6a8a9f3e6698479f96eb7b840",
".git/logs/refs/remotes/origin/main": "83194dd6191c58525d340662a62378ef",
".git/objects/00/4a1bbb6c777eaa5bb9f3f4499b5798989c5f24": "201e22b095ea93d41e82582249a921c8",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/f37bde033a09f1ca86b7bd708bf3d9dfbb3f19": "d5254e9d107b30a630ced4b8d17da294",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/06/5335b35aa96b470de2bc963544c2e4bef34b0f": "5e43d90a7bf5241b04758df18065ce69",
".git/objects/07/4a001d94e4510d31fae12b67704b52fea53a07": "bf85a460ca6c8228229d617a4bcdfe3c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/7ed39942aa40fedd4f9ac3cbb4bf775bab8757": "1cb316c8ff2ad1b28b4a93d35249b37f",
".git/objects/09/cb4ab03b7b620f1fd8b71c9e4a56ba8b5354fe": "c519a791ca6a3a5dde1e80b16574e6e5",
".git/objects/0d/c03c9477efb2ae22863ee79face626d84ee772": "d8298c60e8d92174755e791b7cb055e7",
".git/objects/0f/53f149c3d1d8624527a4c2050bfb4fa43ba717": "d7e47bc577e02c6cd42417999fef8a60",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/a234ac27b1cab2094873b011792ece6a458837": "6b70c2bb28c91884fe77d5b30ef47aa4",
".git/objects/2a/4e1b291510c8ff53a545ee8b7ebaf0a4a3424c": "6d02511b51efa8932c266d2f1743c4ae",
".git/objects/2f/329da9eece9821340fabc6849bc08242e6e5b8": "8ad7d0786a77d9e65acf44dd4552d043",
".git/objects/32/ad7afc0b7fe43bc5489d0283c487a48be773ea": "552959277007b13ee4366389eb02d66e",
".git/objects/36/26436ed9ea9584713bdcae51db2fbb8c7c31c5": "f0236cedbde91a58c9336031fd578ddb",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/3b/4a3016e3bcf751da0092891bfa6af5feced6e7": "ab6ed5eab21123ab0af6bc08316828fc",
".git/objects/46/065809ebf95ce0f6a53889b47c3ab0d9e757a7": "a652698dae8a633389e0469bcc160306",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/d8fde0db913f0380e1a3feaafe4662fad305c8": "b93c3afb0f65b0c092ac8d75f853fc98",
".git/objects/62/af360d85bd28177233b8a8c2952ffd45854d07": "92f29de15cfe0b622ff7120db6fff4b7",
".git/objects/6a/45136f4d2c8674fec3b723f5c34daf7668c30e": "3e96d4166e00eae6c26d04a27a0768c6",
".git/objects/6d/c0877b85d0d35b42317e9ac486cd733e01c106": "437295f0bb922147212199e206a9ff2e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8ab85b12498f36bbe13d6559742c102b41e67b": "322a81b795076de22d29d0c15c8de476",
".git/objects/74/9ae26b0fb58e7116f4e6e0fc8358cb0091fe40": "8d9fa284a4a28ff30771bdf93199bd7a",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/82/37eca29ba7144f19c5d6137a3df134ddb43031": "be2978480ef537fd26d20eb7c31e6e18",
".git/objects/86/a053a9d72faf9966d7ccb659574ba3dd863cf6": "c48dbb6b4100fbc1ca357a893212b602",
".git/objects/89/8947e99b4085b349ca0a95fffe84195f6a8ffe": "aa93be604adbde2a4a2529048f3f8315",
".git/objects/8b/707abd1a13515f2e5d94bd2de03c61369db46a": "d4429dc747a6e9745917408d4bd2d324",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/91/9d7575e5bab60546e1de80b6a26130999c736a": "698a8ec827eeba6ce24d1d885c75867a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/d5539c7380877d66791c077ce921dafec08dba": "b79e8bfee879cb8112d55519cef57d80",
".git/objects/96/1f98a4aa7bb48742f4e52da631f73786d2d2b8": "b19ba9d8a4b24e61c9f4531540ef68a2",
".git/objects/a6/cfe43ec4b0b42e28f4d488140889f0bc6c7f89": "846d9b64fe01cd97879278755f23eaf5",
".git/objects/a8/240ca527ae9b9f3ae83692f5c0a7dee9e0c093": "4ca885a3434305bba2883c6a557f6d85",
".git/objects/ad/429e3a3581cc6b84ef8ecd08b60b0c28b28349": "22236771dd178bc88a96749bfcc69c93",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/ba07c8165bb9e2ef9926dceb77eb586aed77ae": "f19abcb1b7ceb0d69e70ebe41ee66089",
".git/objects/b2/f7de4d87948c6f299bf4c7290846f019d33ada": "f62c9673b8b4da76916e7144ef81ee30",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d3/43a31242f5f0ca8b294eef392ec078069f74ab": "347f28c9063a30d622b19ab124a50106",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/43e2b51d14642f4c70bfa2747724f2e33e2055": "9b53eb10d6bbba13740d0806fe3ea317",
".git/objects/e2/f95826aa48b5ca454b10c4bf0894e0a3706c37": "0ac58b6c3cf3c5fe15943e2a46b04d7f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ef/30278a30a79fb5f4d4f36f04d840192c6ba21e": "a34f0ab9b4d8c35a573aa7eab16c9fb1",
".git/objects/f0/c302707feed8766ca514fceb0ff9604add2460": "2e9edfbd0a20d12de055d769346357ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/e05adce53c6e9c6f9b4276b57444f9105ad54d": "d00dea1212410c1925f0f71cda477e9e",
".git/objects/f9/1a9186c5628a252e3bdf4f52001c1490bcc0da": "71eee73c996518597c3b9b70dcbface1",
".git/objects/fb/e7eb8c6cbacef94d9aafdac7ed248a252ff0b9": "8a24991b53a40f1a6aa7fe7ec1ccbc94",
".git/objects/fc/27186924644fb3213a73d296a1bc1a9ad43c05": "11f84962b39152d2c1995aabc26510c4",
".git/refs/heads/main": "0be89a09ac99f2a6ba9560267b96b400",
".git/refs/remotes/origin/main": "0be89a09ac99f2a6ba9560267b96b400",
"assets/AssetManifest.bin": "243242ec61c3a7733b55a366f84ff139",
"assets/AssetManifest.bin.json": "1871390c697920ffd3309a9be7126d2d",
"assets/AssetManifest.json": "e3481bcb286536e9f652d846eb1c48d2",
"assets/assets/fonts/SassyFrass-Regular.ttf": "57eec450184e35fd8c76441054c0e2b7",
"assets/assets/fonts/shabnam/Shabnam-Bold.ttf": "b7f6b7386ee3eb72d8d709f895e7c912",
"assets/assets/fonts/shabnam/Shabnam-Light.ttf": "ecf1c57199b540fb02260ccbe1acc3f1",
"assets/assets/fonts/shabnam/Shabnam.ttf": "69fc335794c0fcfd006f49066c650505",
"assets/assets/fonts/shabnam_fd/Shabnam-Bold-FD.ttf": "f5337a2043ef5fdc49e0b5d2c10fc27b",
"assets/assets/fonts/shabnam_fd/Shabnam-FD.ttf": "3f7a15d71d0893f4560782b45cf7a97d",
"assets/assets/fonts/shabnam_fd/Shabnam-Light-FD.ttf": "b603c4f303f98ba3ed23aa373cad20d0",
"assets/assets/icons/english_flag_rounded.svg": "db68882cbf4beac3f3ee3923f1a91b82",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/india.svg": "1fd886b8c7899439678e4312385c5463",
"assets/assets/icons/instagram.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/icons/linkedin.svg": "17d8ef4edcd1e181ec2508d9bd589bca",
"assets/assets/icons/persian_flag_rounded.svg": "bb442fdf117d8a01a7f4ae4b9995dbf6",
"assets/assets/icons/telegram.svg": "b4fb41c46f8d7f8add6ca3b2488ae9b6",
"assets/assets/icons/whatsapp.svg": "3da8d4198ca870af120529981ef62c8a",
"assets/assets/icons/whatsappb.svg": "88a2cb5bc5e2ea0df9cc91a8152dbaff",
"assets/assets/images/background1.jpg": "951245d732542f7ae8fe4ba8c727c21a",
"assets/assets/images/profile.jpg": "6732d07641ce951204c7e5c5b2ca97e7",
"assets/FontManifest.json": "70267adb5b4edde655ecb8c9676c1a7b",
"assets/fonts/MaterialIcons-Regular.otf": "482e4682fc83ddf8c6cf72bb717d4513",
"assets/NOTICES": "02767fe7d1531640d638ec80d380a5f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "18876146340a43580f4ad1a69d1fbb1e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "20925f317332a8b4686ef8535504a128",
"icons/Icon-512.png": "a5638fb3a14e0c5bdc23cceeda710ab2",
"icons/Icon-maskable-192.png": "20925f317332a8b4686ef8535504a128",
"icons/Icon-maskable-512.png": "a5638fb3a14e0c5bdc23cceeda710ab2",
"index.html": "723e219c307ed0914dba101f9e2354d0",
"/": "723e219c307ed0914dba101f9e2354d0",
"main.dart.js": "e1ad8cd0d730e5f6aaf3ddce389ca0a8",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"styles.css": "5a3b3d6bcf0bb90a902f2af2d01d3921",
"version.json": "03acefc4795e8573b194262cd3a4419f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
