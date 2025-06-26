import Link from "next/link";

type Link = {
  title: string;
  link: string;
};

const links: Link[] = [
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    title: "Complaints Procedure",
    link: "/complaints-procedure",
  },
];

export const PolicyLinks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map(({ title, link }) => {
        return (
          <Link
            key={link}
            href={link}
            className="hover:text-accent transition duration-200"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
