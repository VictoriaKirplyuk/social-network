import React, { FC } from 'react';

import s from './Button.module.css';

interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <div className={s.btn}>
      <div className={s.btnTitle}>{title}</div>
    </div>
  );
};

export default Button;
