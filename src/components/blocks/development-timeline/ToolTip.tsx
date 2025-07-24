import { cn } from '@/lib/utils';

export const ToolTip = ({
  text,
  direction,
  wrapperClass,
}: {
  text: string;
  direction: 'top' | 'bottom';
  wrapperClass?: string;
}) => {
  return (
    <div
      className={cn(
        `absolute flex w-full justify-center rounded-[16px] bg-[#fcfeff] py-[10px] text-center text-xs font-bold md:py-5 md:text-base ${direction === 'top' ? 'bottom-[-150px]' : 'top-[-100px]'}`,
        wrapperClass,
      )}
    >
      {text}
      <div
        className={`absolute left-1/2 h-[11px] w-[14.5px] -translate-x-1/2 ${direction === 'top' ? 'top-[-10px] rotate-[-180deg]' : 'bottom-[-10px]'}`}
      >
        <svg
          width='15'
          height='11'
          viewBox='0 0 15 11'
          fill='#FCFEFF'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7.5 11L0 0H14.5L7.5 11Z' fill='#FCFEFF'></path>
        </svg>
      </div>
    </div>
  );
};
