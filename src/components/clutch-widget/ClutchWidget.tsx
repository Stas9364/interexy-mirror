'use client';

import { useEffect, useRef } from 'react';

interface ClutchWidgetProps {
  companyId: string;
  widgetType?: number;
  height?: number;
  nofollow?: boolean;
  expandIfr?: boolean;
  scale?: number;
  className?: string;
}

export const ClutchWidget: React.FC<ClutchWidgetProps> = ({
  companyId,
  widgetType = 14,
  height = 50,
  nofollow = false,
  expandIfr = true,
  scale = 100,
  className = '',
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadClutchScript = () => {
      if (
        scriptLoadedRef.current ||
        document.querySelector('script[src*="widget.clutch.co"]')
      ) {
        initializeWidget();
        return;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://widget.clutch.co/static/js/widget.js';
      script.async = true;

      script.onload = () => {
        scriptLoadedRef.current = true;
        initializeWidget();
      };

      script.onerror = () => {
        const error = new Error('Failed to load Clutch widget script');
        console.error('Clutch Widget Error:', error);
      };

      document.head.appendChild(script);
    };

    const initializeWidget = () => {
      setTimeout(() => {
        if (window.CLUTCHCO && typeof window.CLUTCHCO.Init === 'function') {
          try {
            window.CLUTCHCO.Init();
          } catch (error) {
            console.error('Clutch Widget Initialization Error:', error);
          }
        }
      }, 100);
    };

    loadClutchScript();

    return () => {
      // Note: We don't remove the script on unmount as it might be used by other widgets
      // The script is lightweight and can be shared across multiple widget instances
    };
  }, [companyId, widgetType]);

  return (
    <div className={`clutch-compact-widget-wrapper ${className}`}>
      <div
        ref={widgetRef}
        className='clutch-widget'
        data-url='https://widget.clutch.co'
        data-widget-type={widgetType.toString()}
        data-height={height.toString()}
        data-nofollow={nofollow.toString()}
        data-expandifr={expandIfr.toString()}
        data-scale={scale.toString()}
        data-clutchcompany-id={companyId}
        style={{
          minHeight: height,
          width: '100%',
        }}
      />
    </div>
  );
};
