import React, { FC } from 'react';

import s from './NavItem.module.css';

interface INavItem {
  title: string;
  icon: React.ReactNode;
}

const NavItem: FC<INavItem> = ({ title, icon }) => {
  return (
    <div className={s.navItem}>
      <div className={s.navIcon}>{icon}</div>
      <div className={s.navTitle}>{title}</div>
    </div>
  );
};

export default NavItem;
