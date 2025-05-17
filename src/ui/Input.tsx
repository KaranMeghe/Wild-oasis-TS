/** @format */
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type = 'text', className = '', id, ...rest }, ref) => {
  return <input ref={ref} id={id} type={type} className={className} {...rest} />;
});

Input.displayName = 'Input';
export default Input;
