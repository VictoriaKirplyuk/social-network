import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { ProfileAttitude, RouteNames } from '../../../enums';
import { createUserCardBtnTitle } from '../../../helpers/create-user-card-btn-title/create-btn-title';
import Button from '../../Button/Button';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserCardProps {
  info: IInfo;
  changeFriendStatus?: (username: string, attitude: ProfileAttitude) => void;
}

const UserCard: FC<IUserCardProps> = ({ info, changeFriendStatus }) => {
  const isActiveUser: boolean = info.attitude === ProfileAttitude.YOU;

  const btnTitle: string = createUserCardBtnTitle(info.attitude);

  const userProfilePath: string = RouteNames.CURRENT_PROFILE.replace(':username', info.username);

  const changeFriendStatusHandler = (): void => {
    if (changeFriendStatus) changeFriendStatus(info.username, info.attitude);
  };

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
          <div className={gS.infoField}>City, Age</div>
        </div>
      </div>
      {!isActiveUser && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title={btnTitle} onClick={changeFriendStatusHandler} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
