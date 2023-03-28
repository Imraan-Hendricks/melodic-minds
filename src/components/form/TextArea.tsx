import { ChangeEvent, FocusEvent, forwardRef, useState } from 'react';
import { clsx } from 'clsx';

type OnBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => void;

type OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => void;

type OnFocus = (e: FocusEvent<HTMLTextAreaElement, Element>) => void;

interface TextAreaProps {
  className?: string;
  disabled?: boolean;
  helperText?: string;
  helperTextProps?: { className?: string };
  hidden?: boolean;
  id?: string;
  isError?: boolean;
  label?: string;
  labelProps?: { className?: string };
  light?: boolean;
  name: string;
  onBlur?: OnBlur;
  onChange?: OnChange;
  onFocus?: OnFocus;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  textareaProps?: { className?: string };
  value?: string | number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      disabled,
      helperText,
      helperTextProps,
      hidden,
      id,
      isError,
      label,
      labelProps,
      light,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      rows,
      textareaProps,
      value,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnBlur: OnBlur = (e) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleOnChange: OnChange = (e) => {
      if (onChange) onChange(e);
    };

    const handleOnFocus: OnFocus = (e) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    return (
      <div
        className={clsx(
          'grid grid-cols-1 gap-4 h-max',
          hidden && 'hidden',
          disabled && 'opacity-70',
          className
        )}>
        <label
          className={clsx(
            'text-body cursor-pointer',
            !label && 'hidden',
            disabled && 'cursor-default',
            isError && [
              isFocused && 'text-primary-500',
              !isFocused && 'text-red-500',
            ],
            !isError && [
              isFocused && 'text-primary-500',
              !isFocused && light ? 'text-gray-400' : 'text-gray-900',
            ],
            labelProps?.className
          )}
          htmlFor={id}>
          <strong>
            {label} {required && <span className='text-red-500'>*</span>}
          </strong>
        </label>
        <textarea
          className={clsx(
            'text-body w-full py-2.5 px-4 appearance-none border-2 rounded-md',
            'bg-gray-50 focus:bg-white text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-primary-500 accent-primary-500',
            [isError && 'border-red-500', !isError && 'border-gray-300'],
            textareaProps?.className
          )}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          ref={ref}
          rows={rows}
          value={value}
        />
        <p
          className={clsx(
            'text-body',
            !helperText && 'hidden',
            isError && [
              isFocused && 'text-primary-500',
              !isFocused && 'text-red-500 italic',
            ],
            !isError && [
              isFocused && 'text-primary-500',
              !isFocused && 'text-gray-500',
            ],
            helperTextProps?.className
          )}>
          {helperText}
        </p>
      </div>
    );
  }
);
