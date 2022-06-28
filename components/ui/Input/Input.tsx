import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import cn from 'clsx';

import s from './Input.module.css';

interface InputProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  label: string;
  value: string;
  errorMsg: string;
  showErrorMsg: boolean;
  handleOnChange: (e?: any) => void;
  handleOnFocus: (e?: any) => void;
  id: string;
  type?: HTMLInputTypeAttribute;
}

/**
 *
 * @param props
 * @returns
 */
const Input: FC<InputProps> = (props) => {
  const {
    value,
    label,
    type,
    showErrorMsg,
    errorMsg,
    handleOnChange,
    handleOnFocus,
    id,
    ...rest
  } = props;
  const className = cn(s.root, s.before);
  return (
    <div className="mb-3">
      <label className="block mb-1" htmlFor={id}>
        { label }
      </label>
      <input
        type={type}
        value={value}
        placeholder={label}
        onChange={handleOnChange}
        onBlur={handleOnFocus}
        className={className}
        id={id}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        aria-label={label}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <p className={`text-xs text-secondary-2 font-semibold ${showErrorMsg ? 'visible' : 'invisible'}`}>{errorMsg}</p>
    </div>
  );
};

Input.defaultProps = {
  type: '',
};

const propsAreEqual = ((prevProps: InputProps, nextProps: InputProps) => (
  prevProps.value === nextProps.value
    && prevProps.showErrorMsg === nextProps.showErrorMsg
));

export default React.memo(Input, propsAreEqual);
