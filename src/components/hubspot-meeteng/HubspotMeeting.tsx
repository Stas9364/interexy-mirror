'use client';

import { useEffect, useRef } from 'react';

const HUBSPOT_SCRIPT_SRC =
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
const MEETINGS_URL =
  'https://meetings-eu1.hubspot.com/lizaveta/consultation-call-from-website?embed=true';

export const HubspotMeeting = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.innerHTML = '';
      container.setAttribute('data-src', MEETINGS_URL);
    }

    const script = document.createElement('script');
    script.src = HUBSPOT_SCRIPT_SRC;
    script.async = true;

    document.body.appendChild(script);

    const iframeContainer = document.querySelector('.meetings-iframe-container');
    if (!iframeContainer) return;

    const observer = new MutationObserver(() => {
      const iframe = iframeContainer.querySelector('iframe');
      if (iframe && !iframe.title) {
        iframe.title = 'Online appointment for a consultation Interexy';
      }
    });

    observer.observe(iframeContainer, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      if (container) {
        container.innerHTML = '';
      }

      observer.disconnect();
    };
  }, []);

  return (
    <div id='hubspot' className='min-h-[800px] max-w-[780px] self-center pt-10'>
      <div
        ref={containerRef}
        className='meetings-iframe-container w-[380px]'
        data-src={MEETINGS_URL}
      ></div>
    </div>
  );
};
