import { nextSteps } from './form-steps';

export const Steps = () => {
  return (
    <div className='w-full max-w-none pb-[30px] lg:max-w-[570px] lg:pb-0'>
      <h4 className='mb-10 text-[32px] leading-[1.4] font-medium'>What's next?</h4>

      <ul className='flex max-w-none flex-col gap-y-10 lg:max-w-[490px]'>
        {nextSteps.map(({ title }, idx) => (
          <li
            key={idx}
            className="relative flex items-center gap-x-6 after:absolute after:top-[85px] after:left-[44px] after:h-[48px] after:w-px after:bg-[#D6D6D6] after:content-[''] last:after:hidden"
          >
            <span className='text-accent next-point-shadow block rounded-[50px] bg-[#F0F1F7] px-5 py-4 text-[40px] leading-[1.4] font-extrabold'>
              0{idx + 1}
            </span>
            <p className='text-secondary text-lg leading-[1.4] font-normal'>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
