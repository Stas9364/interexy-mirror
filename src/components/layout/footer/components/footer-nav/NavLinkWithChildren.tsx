import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import type { Submenu } from "../../data/footer-menu-list";

export const NavLinkWithChildren = ({ title, link, items }: Submenu) => {
  return (
    <AccordionItem value={title} key={title}>
      {items.length > 0 ? (
        <>
          <AccordionTrigger className="text-base text-white cursor-pointer py-2">
            {title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-2 ml-4 pb-2">
            {items.map(({ link, title: itemTitle }) => (
              <Link
                className="hover:text-accent transition duration-200 text-white"
                href={link}
                key={itemTitle}
              >
                {itemTitle}
              </Link>
            ))}
          </AccordionContent>
        </>
      ) : (
        <Link
          className="flex my-2 hover:text-accent transition duration-200"
          href={link}
        >
          {title}
        </Link>
      )}
    </AccordionItem>
  );
};
