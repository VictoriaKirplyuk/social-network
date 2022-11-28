import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { INavItem } from '../types';

import s from './NavItem.module.css';

type NavItemProps = INavItem & IStyle;

interface IStyle {
  style: string;
  activeStyle?: string;
}

const NavItem = ({ title, path, icon, style, activeStyle }: NavItemProps): ReactElement => {
  const navLinkStyle: string = activeStyle || style;

  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? navLinkStyle : style)}>
      {icon && <div className={s.navItemIcon}>{icon}</div>}
      <div className={s.navItemTitle}>{title}</div>
    </NavLink>
  );
};

export default NavItem;
