import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { RouteNames } from '../../../enums';
import { IInfo } from '../types';

import s from './CardInfo.module.css';

interface ICardInfoProps {
  info: IInfo;
  isExtended?: boolean;
}

const CardInfo: FC<ICardInfoProps> = ({ info, isExtended }) => {
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
        {isExtended && <div className={gS.infoField}>City, Age</div>}
      </div>
    </div>
  );
};

export default CardInfo;
