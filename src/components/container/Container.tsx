export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto w-full max-w-[1690px] px-[15px] xl:px-[80px]'>{children}</div>
  );
};
