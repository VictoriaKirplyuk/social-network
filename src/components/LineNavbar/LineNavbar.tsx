import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import gS from '../../common/styles/styles.module.css';
import { RouteNames } from '../../enums';
import Button from '../Button/Button';

import s from './LineNavbar.module.css';

interface ILineNavbarProps {
  items: INavItems[];
}

interface INavItems {
  title: string;
  path: RouteNames;
}

const LineNavbar: FC<ILineNavbarProps> = ({ items }) => {
  return (
    <div className={gS.block}>
      <div className={s.groupBtn}>
        {items.map(i => (
          <NavLink key={i.path} to={i.path}>
            <Button title={i.title} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LineNavbar;
