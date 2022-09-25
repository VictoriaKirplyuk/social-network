import { FC } from 'react';

import { MessageOutlined, UserOutlined, PhoneOutlined, TeamOutlined, PictureOutlined, SmileOutlined, PlaySquareOutlined } from '@ant-design/icons';

import s from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar: FC = () => {
  return (
    <div className={s.navbar}>
      <NavItem title="My page" icon={<UserOutlined />} />
      <NavItem title="Messenger" icon={<MessageOutlined />} />
      <NavItem title="Calls" icon={<PhoneOutlined />} />
      <NavItem title="Friends" icon={<TeamOutlined />} />
      <NavItem title="Photos" icon={<PictureOutlined />} />
      <NavItem title="Videos" icon={<PlaySquareOutlined />} />
      <NavItem title="Stickers" icon={<SmileOutlined />} />
    </div>
  );
};

export default Navbar;
