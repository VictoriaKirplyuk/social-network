import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../../common/styles/styles.module.css';
import { RouteNames } from '../../../../enums';

import s from './User.module.css';

interface IInfo {
  username: string;
  firstName: string;
  middleName: string | null;
  secondName: string;
}

interface IUserProps {
  info: IInfo;
}

const User: FC<IUserProps> = ({ info }) => {
  const userProfilePath: string = RouteNames.CURRENT_PROFILE.replace(':username', info.username);

  return (
    <div className={s.user}>
      <NavLink to={userProfilePath}>
        <Avatar size={65} icon={<UserOutlined />} />
      </NavLink>
      <div className={s.info}>
        <div>
          <span className={gS.userInfoField}>{info.firstName}</span>
          <span className={gS.userInfoField}>{info.middleName}</span>
          <span className={gS.userInfoField}>{info.secondName}</span>
        </div>
        <div className={gS.infoField}>{info.username}</div>
        <div className={gS.infoField}>City, Age</div>
      </div>
    </div>
  );
};

export default User;
