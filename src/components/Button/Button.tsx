import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = DefaultButtonPropsType & {
  title: string;
};

const Button: FC<ButtonProps> = ({ title, ...restProps }) => {
  return (
    <button type="button" className={s.btn} {...restProps}>
      {title}
    </button>
  );
};

export default Button;
