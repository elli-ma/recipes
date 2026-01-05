'use client';

import Script from 'next/script';

const YandexMetrika = () => {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106141326', 'ym');

            ym(106141326, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              ecommerce: "dataLayer"
            });
          `,
        }}
      />

      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/106141326"
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;
