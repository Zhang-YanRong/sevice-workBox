importScripts('/workbox-sw.js')

// 确保 Workbox 加载成功
if (workbox) {
    console.log(`Workbox is loaded`);

    // skipWaiting: 当新 Service Worker 安装完成后立即接管当前页面
    workbox.core.skipWaiting();

    // clientsClaim: 让新 Service Worker 激活后立即控制未受控的客户端
    workbox.core.clientsClaim();

    // // 使用 Workbox 预缓存静态资源  如果url不在当前项目下 必须是全地址
    workbox.precaching.precacheAndRoute([
        {url: '/index.html', revision: '1'},
        {url: '/workbox-sw.js', revision: '1'},
        {url: 'https://code.jquery.com/jquery-1.12.4.min.js', revision: '1.5'}

        // 其他需要缓存的资源
    ]);

    console.log(workbox.precaching)

    // 设置运行时缓存策略
    // workbox.routing.registerRoute(
    //     /\/jquery-1.12.4.min.js\.js/,
    //     new workbox.strategies.CacheFirst({
    //         cacheName: 'SDK',
    //         plugins: [
    //             new workbox.expiration.ExpirationPlugin({
    //                 maxEntries: 10,
    //                 maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
    //             }),
    //         ],
    //     })
    // );

   

    // 添加更多缓存策略...
} else {
    console.log(`Workbox didn't load`);
}


