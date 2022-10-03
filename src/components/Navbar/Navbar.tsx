import { FC } from 'react';

import { MessageOutlined, UserOutlined, PhoneOutlined, TeamOutlined, PictureOutlined, SmileOutlined, PlaySquareOutlined } from '@ant-design/icons';

import { RouteNames } from '../../enums';

import s from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar: FC = () => {
  return (
    <div className={s.navbar}>
      <NavItem title="My page" path={RouteNames.PROFILE} icon={<UserOutlined />} />
      <NavItem title="Messenger" path={RouteNames.CHATS} icon={<MessageOutlined />} />
      <NavItem title="Calls" path="#" icon={<PhoneOutlined />} />
      <NavItem title="Friends" path="#" icon={<TeamOutlined />} />
      <NavItem title="Photos" path="#" icon={<PictureOutlined />} />
      <NavItem title="Videos" path="#" icon={<PlaySquareOutlined />} />
      <NavItem title="Stickers" path="#" icon={<SmileOutlined />} />
    </div>
  );
};

export default Navbar;
