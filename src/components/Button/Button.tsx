import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = DefaultButtonPropsType & {
  title: string;
  style?: string;
};

const Button: FC<ButtonProps> = ({ title, style, ...restProps }) => {
  return (
    <button type="button" className={`${s.btn} ${style}`} {...restProps}>
      {title}
    </button>
  );
};

export default Button;
