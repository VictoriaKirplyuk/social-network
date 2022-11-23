import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';

interface IProfileAvatar {
  avatar: string;
}

const ProfileAvatar: FC<IProfileAvatar> = ({ avatar }) => {
  return <Avatar size={140} icon={avatar || <UserOutlined />} />;
};

export default ProfileAvatar;
