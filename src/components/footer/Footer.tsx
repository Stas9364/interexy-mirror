import { Container } from "../container/Container";
import { InterexyLink } from "../link/InterexyLink";
import { Logo } from "../logo/Logo";
import Image from "next/image";
import { locationData } from "./location-data";
import { platformsData } from "./platforms-data";
import Link from "next/link";
import { socialNetworks } from "./social-netwoks";

export const Footer = () => {
  return (
    <footer className="mt-auto py-[70px] bg-primary text-white">
      <Container>
        <section>
          <div className="flex gap-[30px] pb-[46px] ">
            <div className="flex flex-col">
              <Logo
                href={"/"}
                src={"/logo/footer-logo.webp"}
                alt={"Footer Interexy Logo"}
                width={220}
                height={60}
              />

              <InterexyLink
                href="/"
                text="Book a call"
                variant={"primary"}
                className="mt-[40px]"
              />

              <a
                className="flex gap-2.5 underline text-white mt-[26px] before:content-[''] before:block before:w-[24px] before:h-[24px]  before:bg-[url(/mail.svg)] before:bg-no-repeat before:bg-center before:bg-contain"
                href="mailto:sales@interexy.com"
              >
                sales@interexy.com
              </a>
            </div>
            <div>MENU</div>
          </div>

          <div className="py-[46px] grid grid-cols-3 gap-x-8 border-y border-[#433F4E]">
            {locationData.map(({ flag_src, location, address, phone }) => {
              return (
                <div
                  key={location}
                  className="flex flex-col gap-5 [&:not(:last-child)]:border-r border-[#433F4E]"
                >
                  <div className="flex items-center gap-2">
                    <Image alt="" src={flag_src} width={24} height={16} />
                    <span>{location}</span>
                  </div>

                  <address className="text-lg leading-[140%] font-normal not-italic">
                    <p>{address.street}</p>
                    <p>{address.city}</p>
                  </address>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              );
            })}
          </div>

          <div className="pt-[46px] flex flex-col gap-y-[46px]">
            <div className="flex justify-around">
              {platformsData.map(
                ({ logo_src, link, star_src, reviews_number }) => {
                  return (
                    <div key={logo_src} className="flex gap-x-4">
                      {link ? (
                        <Link href={link}>
                          <Image
                            alt=""
                            src={logo_src}
                            width={100}
                            height={31}
                          />
                        </Link>
                      ) : (
                        <Image alt="" src={logo_src} width={100} height={31} />
                      )}
                      <div className="py-2 px-5 bg-[#FFFFFF1A] rounded-[5px] flex items-center gap-x-3">
                        <div className="flex gap-x-[3.5px]">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Image
                              key={i}
                              alt="star"
                              src={star_src}
                              width={17}
                              height={17}
                            />
                          ))}
                        </div>

                        <hr className="h-4 w-[1px] border border-l-[#fff] opacity-20" />

                        <div className="text-base font-normal leading-[140%]">
                          {reviews_number}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="flex justify-between">
              <p>
                © {new Date().getFullYear()} Interexy LLC. All Rights Reserved.
              </p>
              <div>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                <Link href={"/cookie-policy"}>Cookie Policy</Link>
                <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
                <Link href={"/complaints-procedure"}>Complaints Procedure</Link>
              </div>
              <div className="flex gap-4">
                {socialNetworks.map(({ icon, link, bg }) => {
                  return (
                    <Link
                      key={icon}
                      href={link}
                      className="rounded-[5px] hover:bg-[var(--hover-social-color)] transition-colors duration-200"
                      style={
                        { "--hover-social-color": bg } as React.CSSProperties
                      }
                    >
                      <Image alt="" src={icon} width={32} height={32} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};
