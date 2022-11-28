import React, { ReactElement, ReactNode } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { RouteNames } from '../../../enums/router-enums';
import { concatUsername } from '../../../utils/concatenation/concatenation';
import { determineUserAge } from '../../../utils/date-and-time-formatters/date-and-time-formatters';
import { IInfo } from '../types';

import s from './CardInfo.module.css';

interface ICardInfoProps {
  info: IInfo;
  isExtended?: boolean;
  children?: ReactNode;
}

const CardInfo = ({ info, isExtended, children }: ICardInfoProps): ReactElement => {
  const userProfilePath: string = RouteNames.CURRENT_PROFILE.replace(':username', info.username);
  const fullUsername: string = concatUsername(info.firstName, info.middleName, info.secondName);
  const userAge: string = determineUserAge(info.birthDate);

  return (
    <div className={s.user}>
      <NavLink to={userProfilePath}>
        <Avatar size={65} icon={<UserOutlined />} />
      </NavLink>
      <div className={s.info}>
        <div>
          <span className={gS.userInfoField}>{fullUsername}</span>
        </div>
        <div className={gS.infoField}>{info.username}</div>
        {isExtended && (
          <div className={gS.infoField}>
            {info.city && <span className={s.field}>{info.city},</span>}
            <span className={s.field}>{userAge} y.o.</span>
          </div>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default CardInfo;
