import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { INavItem } from '../types/types';

import s from './NavItem.module.css';

type NavItemProps = INavItem & IStyle;

interface IStyle {
  style: string;
  activeStyle?: string;
}

const NavItem: FC<NavItemProps> = ({ title, path, icon, style, activeStyle }) => {
  const navLinkStyle: string = activeStyle || style;

  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? navLinkStyle : style)}>
      {icon && <div className={s.navItemIcon}>{icon}</div>}
      <div className={s.navItemTitle}>{title}</div>
    </NavLink>
  );
};

export default NavItem;
