// 利用service Workers 进行离线缓存资源
// 注意:service-worker.js必须是从 HTTPS 协议加载的。
globalThis.addEventListener('install', (event) => {
  event.waitUntil(() => console.info('安装完成'));
});

globalThis.addEventListener('activate', (event) => {
  console.log('activate', event);
});

globalThis.addEventListener('fetch', (event) => {
  console.log('fetch', event);
});
