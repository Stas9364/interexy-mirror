import { InterexyLink } from "@/components/link/InterexyLink";
import { Logo } from "@/components/logo/Logo";

export const LogoSection = () => {
  return (
    <div className="flex-col flex md:flex-row justify-center   gap-y-6  md:items-start items-center gap-x-[48px] xl:gap-x-0 py-6 xl:py-0 xl:flex-col xl:w-[240px] 2xl:w-[300px] w-full border-b border-[#433F4E] xl:border-b-0">
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
        className="xl:mt-[40px] md:w-[220px] "
      />

      <a
        className="flex gap-2.5 underline text-white xl:mt-[26px] before:content-[''] before:block before:w-[24px] before:h-[24px]  before:bg-[url(/mail.svg)] before:bg-no-repeat before:bg-center before:bg-contain"
        href="mailto:sales@interexy.com"
      >
        sales@interexy.com
      </a>
    </div>
  );
};
