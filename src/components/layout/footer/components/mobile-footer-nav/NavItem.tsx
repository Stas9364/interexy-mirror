import Link from "next/link";

export const NavItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link} key={title} className="py-2">
      {title}
    </Link>
  );
};
