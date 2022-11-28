import { ReactElement } from 'react';

import {
  MessageOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  PlusOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { RouteNames } from '../../../enums/router-enums';
import NavItem from '../NavItem/NavItem';
import { INavItem } from '../types';

import s from './MainNavbar.module.css';

const MainNavbar = (): ReactElement => {
  const friendsPath: string = RouteNames.FRIENDS.replace('*', RouteNames.CURRENT_FRIENDS);
  const navItems: INavItem[] = [
    { title: 'My page', path: RouteNames.PROFILE, icon: <UserOutlined /> },
    { title: 'Messenger', path: RouteNames.CHATS, icon: <MessageOutlined /> },
    { title: 'Calls', path: RouteNames.NOT_FOUND, icon: <PhoneOutlined /> },
    { title: 'Friends', path: friendsPath, icon: <TeamOutlined /> },
    { title: 'Photos', path: RouteNames.NOT_FOUND, icon: <PictureOutlined /> },
    { title: 'Videos', path: RouteNames.NOT_FOUND, icon: <PlaySquareOutlined /> },
    { title: 'Add friends', path: RouteNames.USERS, icon: <PlusOutlined /> },
    { title: 'Stickers', path: RouteNames.NOT_FOUND, icon: <SmileOutlined /> },
  ];
  const navItemStyle: string = `${s.navItem}`;

  return (
    <div className={s.navbar}>
      {navItems.map(({ title, path, icon }) => (
        <NavItem key={title} title={title} path={path} icon={icon} style={navItemStyle} />
      ))}
    </div>
  );
};

export default MainNavbar;
