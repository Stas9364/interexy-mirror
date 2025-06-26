import Link from "next/link";
import Image from "next/image";
import { platformsData } from "../data/platforms-data";

export const Platforms = () => {
  return (
    <div className="flex justify-around">
      {platformsData.map(
        ({ logo_src, link, star_src, reviews_number, alt }) => {
          return (
            <div
              key={logo_src}
              className="flex gap-x-1 md:gap-x-4 items-center sm:flex-row flex-col"
            >
              {link ? (
                <Link href={link}>
                  <Image
                    alt={alt}
                    src={logo_src}
                    width={100}
                    height={31}
                    className="w-[73px] h-[31px] md:w-[100px] md:h-[31px]"
                  />
                </Link>
              ) : (
                <Image
                  alt={alt}
                  src={logo_src}
                  width={100}
                  height={31}
                  className="w-[73px] h-[31px] md:w-[100px] md:h-[31px]"
                />
              )}
              <div className="py-2 px-5 bg-[#FFFFFF1A] rounded-[5px] flex items-center md:flex-row flex-col gap-x-3">
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

                <hr className="h-4 w-[1px] border border-l-[#fff] opacity-20 md:block hidden" />

                <div className="text-base font-normal leading-[140%]">
                  {reviews_number}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
