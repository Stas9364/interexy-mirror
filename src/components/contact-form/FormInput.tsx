import { cn } from '@/lib/utils';
import type { ChangeEvent } from 'react';

export const FormInput = ({
  value,
  className,
  type,
  placeholder,
  pattern,
  required,
  name,
  handleChange,
}: {
  value: string;
  className?: string;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      onChange={handleChange}
      className={cn(
        'text-secondary h-[50px] border-b-1 border-[#9C9C9C] text-lg leading-[1.4] font-normal focus:outline-none',
        className,
      )}
    />
  );
};
