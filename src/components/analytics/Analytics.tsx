'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id='google-tag-manager'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHVDF9T');
          `,
        }}
      />

      {/* GTM noscript */}
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-WHVDF9T'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Crisp Chat */}
      <Script
        id='crisp-chat'
        strategy='lazyOnload'
        onLoad={() => {
          if (typeof window !== 'undefined') {
            const getUrlVars = () => {
              const vars: Record<string, string> = {};
              window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
                vars[key] = value;
                return m;
              });
              return vars;
            };

            const crispKeys: Array<[string, string]> = [];
            const utmParams = [
              'utm_source',
              'utm_medium',
              'utm_campaign',
              'utm_term',
              'utm_content',
            ];

            utmParams.forEach(source => {
              if (getUrlVars()[source]) {
                crispKeys.push([source, getUrlVars()[source]]);
              }
            });

            if (crispKeys.length > 0 && window.$crisp) {
              window.$crisp.push(['set', 'session:data', crispKeys]);
            }
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "6c1bab3d-90e2-439f-baa5-ad673c915e9e";
            (function() {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      />
    </>
  );
}
