import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    // キャッシュの設定
    const options = {
      cacheControl: {
        browserTTL: 60 * 60 * 24 * 365, // 1年
        edgeTTL: 60 * 60 * 24 * 365, // 1年
      },
    };

    return await getAssetFromKV(event, options);
  } catch (e) {
    // エラーハンドリング
    const notFoundResponse = new Response('404 Not Found', {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    return notFoundResponse;
  }
}