import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import s from './NavItem.module.css';

interface INavItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

const NavItem: FC<INavItem> = ({ title, icon, path }) => {
  return (
    <NavLink to={path} className={s.navItem}>
      {icon && <div className={s.navItemIcon}>{icon}</div>}
      <div className={s.navItemTitle}>{title}</div>
    </NavLink>
  );
};

export default NavItem;
