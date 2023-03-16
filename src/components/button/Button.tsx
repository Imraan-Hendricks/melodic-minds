import { clsx } from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
  color?: 'secondary-500' | 'primary-500' | 'error-500';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant?: 'text' | 'contained' | 'outlined';
}

export function Button({
  children,
  className,
  color = 'primary-500',
  disabled = false,
  loading = false,
  onClick,
  variant = 'contained',
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center px-4 py-2 ',
        'text-button border rounded transition-colors',
        'disabled:opacity-70',
        variant === 'text' && [
          color === 'primary-500' &&
            'bg-transparent hover:bg-gray-100 disabled:hover:bg-transparent active:bg-transparent disabled:active:bg-transparent border-transparent text-primary-500',
          color === 'secondary-500' &&
            'bg-transparent hover:bg-gray-100 disabled:hover:bg-transparent active:bg-transparent disabled:active:bg-transparent border-transparent text-secondary-500',
          color === 'error-500' &&
            'bg-transparent hover:bg-gray-100 disabled:hover:bg-transparent active:bg-transparent disabled:active:bg-transparent border-transparent text-error-500',
        ],
        variant === 'contained' && [
          color === 'primary-500' &&
            'bg-primary-500 border-primary-500 hover:bg-primary-800 disabled:hover:bg-primary-500 active:bg-primary-500 disabled:active:bg-primary-500 text-white',
          color === 'secondary-500' &&
            'bg-secondary-500 border-secondary-500 hover:bg-secondary-700 disabled:hover:bg-secondary-500 active:bg-secondary-500 disabled:active:bg-secondary-500 text-white',
          color === 'error-500' &&
            'bg-error-500 border-error-500 hover:bg-error-700 disabled:hover:bg-error-500 active:bg-error-500 disabled:active:bg-error-500 text-white',
        ],
        variant === 'outlined' && [
          color === 'primary-500' && [
            'bg-white hover:bg-gray-100 disabled:hover:bg-white active:bg-white disabled:active:bg-white text-primary-500',
            'border-primary-500 hover:border-primary-800 disabled:hover:border-primary-500 active:border-primary-500 disabled:active:border-primary-500',
          ],
          color === 'secondary-500' && [
            'bg-white hover:bg-gray-100 disabled:hover:bg-white active:bg-white disabled:active:bg-white text-secondary-500',
            'border-secondary-500 hover:border-secondary-600 disabled:hover:border-secondary-500 active:border-secondary-500 disabled:active:border-secondary-500',
          ],
          color === 'error-500' && [
            'bg-white hover:bg-gray-100 disabled:hover:bg-white active:bg-white disabled:active:bg-white text-error-500',
            'border-error-500 hover:border-error-600 disabled:hover:border-error-500 active:border-error-500 disabled:active:border-error-500',
          ],
        ],
        className
      )}>
      {!loading ? <>{children}</> : 'loading...'}
    </button>
  );
}
