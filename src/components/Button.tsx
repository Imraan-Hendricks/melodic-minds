import { clsx } from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';

type Color =
  | 'primary-500'
  | 'secondary-500'
  | 'success-500'
  | 'warning-500'
  | 'error-500'
  | 'gray-500'
  | 'black'
  | 'white';

interface ButtonProps {
  className?: string;
  color?: Color;
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
  variant = 'text',
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center px-4 py-2',
        'text-button border-2 rounded transition-colors',
        'disabled:opacity-70',
        variant === 'text' && [
          color === 'primary-500' &&
            'text-primary-500 hover:text-white disabled:hover:text-primary-500 active:text-primary-500 bg-transparent hover:bg-primary-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'secondary-500' &&
            'text-secondary-500 hover:text-white disabled:hover:text-secondary-500 active:text-secondary-500 bg-transparent hover:bg-secondary-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'success-500' &&
            'text-success-500 hover:text-white disabled:hover:text-success-500 active:text-success-500 bg-transparent hover:bg-success-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'warning-500' &&
            'text-warning-500 hover:text-white disabled:hover:text-warning-500 active:text-warning-500 bg-transparent hover:bg-warning-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'error-500' &&
            'text-error-500 hover:text-white disabled:hover:text-error-500 active:text-error-500 bg-transparent hover:bg-error-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'gray-500' &&
            'text-gray-500 hover:text-white disabled:hover:text-gray-500 active:text-gray-500 bg-transparent hover:bg-gray-500 disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'black' &&
            'text-black hover:text-white disabled:hover:text-black active:text-black bg-transparent hover:bg-black disabled:hover:bg-transparent active:bg-transparent border-transparent',
          color === 'white' &&
            'text-white hover:text-black disabled:hover:text-white active:text-white bg-transparent hover:bg-white disabled:hover:bg-transparent active:bg-transparent border-transparent',
        ],
        variant === 'contained' && [
          color === 'primary-500' &&
            'text-white bg-primary-500 hover:bg-primary-700 disabled:hover:bg-primary-500 active:bg-primary-500 disabled:active:bg-primary-500 border-primary-500 hover:border-primary-700 disabled:hover:border-primary-500 active:border-primary-500',
          color === 'secondary-500' &&
            'text-white bg-secondary-500 hover:bg-secondary-700 disabled:hover:bg-secondary-500 active:bg-secondary-500 disabled:active:bg-secondary-500 border-secondary-500 hover:border-secondary-700 disabled:hover:border-secondary-500 active:border-secondary-500',
          color === 'success-500' &&
            'text-white bg-success-500 hover:bg-success-700 disabled:hover:bg-success-500 active:bg-success-500 disabled:active:bg-success-500 border-success-500 hover:border-success-700 disabled:hover:border-success-500 active:border-success-500',
          color === 'warning-500' &&
            'text-white bg-warning-500 hover:bg-warning-700 disabled:hover:bg-warning-500 active:bg-warning-500 disabled:active:bg-warning-500 border-warning-500 hover:border-warning-700 disabled:hover:border-warning-500 active:border-warning-500',
          color === 'error-500' &&
            'text-white bg-error-500 hover:bg-error-700 disabled:hover:bg-error-500 active:bg-error-500 disabled:active:bg-error-500 border-error-500 hover:border-error-700 disabled:hover:border-error-500 active:border-error-500',
          color === 'gray-500' &&
            'text-white bg-gray-500 hover:bg-gray-700 disabled:hover:bg-gray-500 active:bg-gray-500 disabled:active:bg-gray-500 border-gray-500 hover:border-gray-700 disabled:hover:border-gray-500 active:border-gray-500',
          color === 'black' &&
            'text-white bg-black hover:bg-gray-800 disabled:hover:bg-black active:bg-black disabled:active:bg-black border-black hover:border-gray-800 disabled:hover:border-black active:border-black',
          color === 'white' &&
            'text-black bg-white hover:bg-gray-200 disabled:hover:bg-white active:bg-white disabled:active:bg-white border-white hover:border-gray-200 disabled:hover:border-white active:border-white',
        ],
        variant === 'outlined' && [
          color === 'primary-500' &&
            'text-primary-500 hover:text-white disabled:hover:text-primary-500 active:text-primary-500 bg-transparent hover:bg-primary-500 disabled:hover:bg-transparent active:bg-transparent border-primary-500',
          color === 'secondary-500' &&
            'text-secondary-500 hover:text-white disabled:hover:text-secondary-500 active:text-secondary-500 bg-transparent hover:bg-secondary-500 disabled:hover:bg-transparent active:bg-transparent border-secondary-500',
          color === 'success-500' &&
            'text-success-500 hover:text-white disabled:hover:text-success-500 active:text-success-500 bg-transparent hover:bg-success-500 disabled:hover:bg-transparent active:bg-transparent border-success-500',
          color === 'warning-500' &&
            'text-warning-500 hover:text-white disabled:hover:text-warning-500 active:text-warning-500 bg-transparent hover:bg-warning-500 disabled:hover:bg-transparent active:bg-transparent border-warning-500',
          color === 'error-500' &&
            'text-error-500 hover:text-white disabled:hover:text-error-500 active:text-error-500 bg-transparent hover:bg-error-500 disabled:hover:bg-transparent active:bg-transparent border-error-500',
          color === 'gray-500' &&
            'text-gray-500 hover:text-white disabled:hover:text-gray-500 active:text-gray-500 bg-transparent hover:bg-gray-500 disabled:hover:bg-transparent active:bg-transparent border-gray-500',
          color === 'black' &&
            'text-black hover:text-white disabled:hover:text-black active:text-black bg-transparent hover:bg-black disabled:hover:bg-transparent active:bg-transparent border-black',
          color === 'white' &&
            'text-white hover:text-black disabled:hover:text-white active:text-white bg-transparent hover:bg-white disabled:hover:bg-transparent active:bg-transparent border-white',
        ],
        className
      )}>
      {!loading ? <>{children}</> : 'loading...'}
    </button>
  );
}
