import { twmesh } from '@/utils/twmesh';
import { ClassValue } from 'clsx';
import { useRef } from 'react';
import useRipple from '../hooks/useRipple';

interface ButtonProps {
  className: ClassValue;
  startIcon?: JSX.Element | React.ReactNode;
  endIcon?: JSX.Element | React.ReactNode;
  children: JSX.Element | React.ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: React.FC<
  Omit<ButtonProps, 'startIcon' | 'endIcon'>
> = ({
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  //pass the ref to the useRipple hook
  const ripples = useRipple(ref);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twmesh(
        'relative text-sm font-medium text-gray-900 outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:border-blue-600-200 hover:text-blue-600',
        className
      )}
      {...props}
    >
      {ripples}
      {children}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  startIcon,
  endIcon,
  loading,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  //pass the ref to the useRipple hook
  const ripples = useRipple(ref);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={twmesh(
        'py-2.5 px-5 relative text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200',
        className
      )}
    >
      {ripples}
      {children}
    </button>
  );
};

export default Button;
