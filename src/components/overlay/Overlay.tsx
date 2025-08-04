export const Overlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute top-0 left-0 z-1 h-full w-full bg-[#0000004d] ${className}`}
    ></div>
  );
};
