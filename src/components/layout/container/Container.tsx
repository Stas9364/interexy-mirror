export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mx-auto w-full max-w-[1690px] px-[15px] xl:px-[80px] ${className}`}>
      {children}
    </div>
  );
};
