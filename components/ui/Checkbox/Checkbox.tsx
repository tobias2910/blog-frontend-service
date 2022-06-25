import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import s from './Checkbox.module.css';

interface CheckboxProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  children: ReactNode;
  id: string;
  handleOnChange: (e: any) => void;
  highlight: boolean;
  checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  children, id, handleOnChange, highlight, checked,
}) => (
  <span className={`flex flex-row items-center rounded border ${highlight ? 'border-secondary-2' : 'border-primary'}`}>
    <input tabIndex={0} type="checkbox" id={id} className={s.root} onChange={handleOnChange} checked={checked} />
    <label htmlFor={id} className="w-fit">
      { children }
    </label>
  </span>
);

export default Checkbox;
