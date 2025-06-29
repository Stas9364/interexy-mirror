import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { footerMenuList } from '../../data/footer-menu-list';
import { SubMenus } from './SubMenus';

export const MobileFooterNavMenu = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='block w-full md:hidden [&>*:last-child_button]:border-b-0'
    >
      {footerMenuList.map(({ submenu, title }) => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger
            key={title}
            className='border-b border-b-[#433f4e] text-white'
          >
            {title}
          </AccordionTrigger>
          <AccordionContent className='ml-4'>
            <SubMenus submenu={submenu} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
