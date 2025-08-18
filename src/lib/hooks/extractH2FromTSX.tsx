// extracts all h2 tags from the content and creates a navigation menu of the page

import { useMemo } from 'react';
import { ReactNode, ReactElement } from 'react';

export type Heading = { id: string; text: string };

export function useExtractH2FromJSX(node: ReactNode): Heading[] {
  return useMemo(() => {
    const result: Heading[] = [];

    function traverse(child: ReactNode) {
      if (!child) return;

      if (Array.isArray(child)) {
        child.forEach(traverse);
      } else if (typeof child === 'object' && child && 'type' in child) {
        const el = child as ReactElement<{ id?: string; children: string }>;
        if (el.type === 'h2') {
          const id = el.props.children
            .replace(/^\d+\.\s*/, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');

          const getText = (n: ReactNode): string =>
            typeof n === 'string'
              ? n
              : Array.isArray(n)
                ? n.map(getText).join(' ')
                : typeof n === 'object' && n && 'props' in n
                  ? getText((n as ReactElement<{ children?: ReactNode }>).props.children)
                  : '';

          result.push({ id, text: getText(el.props.children).trim() });
        }
        if (el.props && el.props.children) {
          traverse(el.props.children);
        }
      }
    }

    traverse(node);

    return result;
  }, [node]);
}
