import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';
import NavItem from '../NavItem/NavItem';
import { INavItem } from '../types/types';

import s from './NavbarLine.module.css';

interface ILineNavbarProps {
  items: INavItem[];
}

const NavbarLine: FC<ILineNavbarProps> = ({ items }) => {
  const navItemStyle: string = `${s.navItem}`;
  const navItemActiveStyle: string = `${s.navItemActive}`;

  return (
    <div className={gS.block}>
      <div className={s.navItemGroup}>
        {items.map(({ path, title, icon }) => (
          <NavItem
            key={path}
            title={title}
            path={path}
            icon={icon}
            style={navItemStyle}
            activeStyle={navItemActiveStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default NavbarLine;
