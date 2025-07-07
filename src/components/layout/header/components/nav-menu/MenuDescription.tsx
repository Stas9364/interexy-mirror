export const MenuDescription = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='hidden w-full max-w-[400px] flex-col justify-center gap-5 border-r border-[#D6D6D6] pr-[60px] xl:flex'>
      <h2 className='text-primary text-[32px] leading-[140%] font-medium'>{title}</h2>
      <p className='text-secondary text-lx leading-[140%]'>{subtitle}</p>
    </div>
  );
};
