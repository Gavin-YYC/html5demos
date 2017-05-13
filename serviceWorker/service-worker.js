// 缓存名称
const cacheName = 'MyPWA-version-1';
// 需要缓存的文件
const fileToCache = [
  '/css/style.css',
  '/',
  'about.html'
];


/* 当前的作用域是
 * ServiceWorkerGlobalScope
 * 即self代表ServiceWorkerGlobalScope
 * 首先监听serviceWorker的install事件
 */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open( cacheName )
    .then( cache => {
      return cache.addAll( fileToCache )
    })
  )
});


/*
 * 当页面发出请求时，判断是否拦截请求
 * 如果缓存中存在该请求
 * 则直接把响应返回
 * 如果没有该请求
 * 则通过fetchApi请求
 */
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then( response => {
      if ( response ) {
        return response;
      }
      return fetch(e.request);
    })
    .catch( err => {
      console.log( err );
    })
  )
});
