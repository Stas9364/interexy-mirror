import { cn } from '@/lib/utils';

export const Section = ({
  className = '',
  children,
  id,
}: {
  className?: string;
  children?: React.ReactNode;
  id: string;
}) => {
  return (
    <section id={id} className={cn('pb-[40px] md:pb-[60px] xl:pb-[80px]', className)}>
      {children}
    </section>
  );
};
