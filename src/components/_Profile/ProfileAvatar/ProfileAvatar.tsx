import React, { ReactElement } from 'react';

import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';

interface IProfileAvatarProps {
  avatar: string;
}

const ProfileAvatar = ({ avatar }: IProfileAvatarProps): ReactElement => {
  return <Avatar size={140} icon={avatar || <UserOutlined />} />;
};

export default ProfileAvatar;
