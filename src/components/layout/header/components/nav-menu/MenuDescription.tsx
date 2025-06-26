export const MenuDescription = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full hidden xl:flex flex-col justify-center pr-[60px] max-w-[400px] gap-5 border-r border-[#D6D6D6]">
      <h2 className="text-[32px] font-medium text-primary leading-[140%]">
        {title}
      </h2>
      <p className="text-secondary text-lx leading-[140%]">{subtitle}</p>
    </div>
  );
};
