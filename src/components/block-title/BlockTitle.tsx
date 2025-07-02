import { cn } from '@/lib/utils';

export const BlockTitle = ({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}: {
  title: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) => {
  return (
    <div className={cn('mb-6 flex flex-col gap-y-1 md:mb-10 xl:mb-[60px]', className)}>
      <p
        className={cn(
          'text-accent text-base leading-[140%] font-semibold',
          subtitleClassName,
        )}
      >
        {subtitle}
      </p>
      <div
        className={cn(
          'text-2xl leading-[140%] font-semibold md:text-4xl xl:text-5xl',
          titleClassName,
        )}
      >
        {title}
      </div>
    </div>
  );
};
