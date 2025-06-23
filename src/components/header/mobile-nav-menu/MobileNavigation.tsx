"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuData } from "../nav-menu-list";
import Link from "next/link";
import { InterexyLink } from "@/components/link/InterexyLink";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`flex burger ${isOpen ? "burger-open" : ""} flex lg:hidden`}
        onClick={toggleButton}
      >
        <span></span>
      </div>
      
      <div
        className={`absolute top-[100px] left-0 bg-[#f9f9f9] h-[550px] overflow-y-auto w-full transition-all duration-500 ease-in-out  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-8 px-4">
          {menuData.map(({ title, submenu, link }, idx) => (
            <Accordion key={title} type="single" collapsible className="w-full">
              <AccordionItem value={`main-${idx}`}>
                {submenu.length > 0 ? (
                  <>
                    <AccordionTrigger className="text-lg font-bold border-b border-b-[#d3d3d3]">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col text-balance">
                      {submenu.map((elem, catIdx) => {
                        const { title, items, link } = elem;

                        return !!title ? (
                          <Accordion
                            key={title}
                            type="single"
                            collapsible
                            className="ml-2"
                          >
                            <AccordionItem value={`sub-${idx}-${catIdx}`}>
                              <AccordionTrigger className="text-md font-semibold border-b border-b-[#d3d3d3]">
                                {link ? (
                                  <Link href={link} className="underline">
                                    {title}
                                  </Link>
                                ) : (
                                  title
                                )}
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col gap-2">
                                {items.map(({ link, title }) => (
                                  <div key={title} className="py-2">
                                    <Link
                                      href={link}
                                      className="inline-block w-full"
                                    >
                                      {title}
                                    </Link>
                                  </div>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <div className="ml-2" key={title}>
                            {items.map(({ link, title }) => (
                              <div key={title} className="py-2">
                                <Link
                                  href={link}
                                  className="inline-block w-full"
                                >
                                  {title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </>
                ) : (
                  <Link
                    href={link}
                    className="text-lg block w-full font-bold py-4"
                  >
                    {title}
                  </Link>
                )}
              </AccordionItem>
            </Accordion>
          ))}

          <InterexyLink
            href="/"
            text="Contact us"
            variant={"primary"}
            size={"sm"}
            className="mt-5"
          />
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
