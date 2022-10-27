import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { RouteNames } from '../../../enums';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IFriendCardProps {
  info: IInfo;
}

const FriendCard: FC<IFriendCardProps> = ({ info }) => {
  const userProfilePath: string = RouteNames.CURRENT_PROFILE.replace(':username', info.username);

  return (
    <div className={cS.wrapper}>
      <div className={cS.user}>
        <NavLink to={userProfilePath}>
          <Avatar size={65} icon={<UserOutlined />} />
        </NavLink>
        <div className={cS.info}>
          <div>
            <span className={gS.userInfoField}>{info.firstName}</span>
            <span className={gS.userInfoField}>{info.middleName}</span>
            <span className={gS.userInfoField}>{info.secondName}</span>
          </div>
          <div className={gS.infoField}>{info.username}</div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
