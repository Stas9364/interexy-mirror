'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface ClutchWidgetProps {
  companyId: string;
  reviews?: string[];
  height?: number;
  widgetType?: number;
  nofollow?: boolean;
  expandIfr?: boolean;
  scale?: number;
  className?: string;
}

export const ClutchReviewWidget: React.FC<ClutchWidgetProps> = ({
  companyId,
  reviews = ['373538', '362096', '350785', '331052', '324248', '320004'],
  height = 300,
  widgetType = 8,
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
        return;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://widget.clutch.co/static/js/widget.js';
      script.async = true;

      script.onload = () => {
        scriptLoadedRef.current = true;
        if (window.CLUTCHCO) {
          window.CLUTCHCO.Init();
        }
      };

      document.head.appendChild(script);
    };

    loadClutchScript();

    return () => {
      const existingScript = document.querySelector('script[src*="widget.clutch.co"]');
      if (existingScript) {
        existingScript.remove();
        scriptLoadedRef.current = false;
      }
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className={cn('clutch-widget', className)}
      data-url='https://widget.clutch.co'
      data-widget-type={widgetType.toString()}
      data-height={height.toString()}
      data-nofollow={nofollow.toString()}
      data-expandifr={expandIfr.toString()}
      data-scale={scale.toString()}
      data-reviews={reviews.join(',')}
      data-clutchcompany-id={companyId}
    />
  );
};
