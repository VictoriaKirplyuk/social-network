import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = DefaultButtonPropsType & {
  title: string;
  style?: string;
};

const Button = ({ title, style, ...restProps }: ButtonProps): ReactElement => {
  return (
    <button type="button" className={`${s.btn} ${style}`} {...restProps}>
      {title}
    </button>
  );
};

export default Button;
