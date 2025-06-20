import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            alt="interexy logo"
            src={"/logo-purple.svg"}
            width={155}
            height={45}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
