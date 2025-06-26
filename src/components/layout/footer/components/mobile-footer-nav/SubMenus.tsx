import { Accordion } from "@/components/ui/accordion";
import type { Submenu } from "../../data/footer-menu-list";
import { SubItemsWithChildren } from "./SubItemsWithChildren";
import { SubItemsWithoutChildren } from "./SubItemWithoutChildren";

export const SubMenus = ({ submenu }: { submenu: Submenu[] }) => {
  return (
    <Accordion type="single" collapsible>
      {submenu.map(({ items, title, link }) => (
        <div key={title}>
          {title ? (
            <SubItemsWithChildren items={items} title={title} link={link} />
          ) : (
            <SubItemsWithoutChildren items={items} />
          )}
        </div>
      ))}
    </Accordion>
  );
};
