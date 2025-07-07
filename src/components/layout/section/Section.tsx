import { cn } from '@/lib/utils';

export const Section = ({
  className = '',
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className={cn('pb-[40px] md:pb-[60px] xl:pb-[80px]', className)}>
      {children}
    </section>
  );
};
