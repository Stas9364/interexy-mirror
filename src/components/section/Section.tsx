export const Section = ({
  classes,
  children,
}: {
  classes?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className={`pb-[40px] md:pb-[60px] xl:pb-[80px] ${classes}`}>
      {children}
    </section>
  );
};
