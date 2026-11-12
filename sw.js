// 12 Nov 2026: lets Android offer "Install / Add to Home screen". Pass-through only - nothing is cached, pages always come fresh.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
