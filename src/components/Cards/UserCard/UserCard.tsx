import React, { FC } from 'react';

import { ProfileAttitude } from '../../../enums';
import { createUserCardBtnTitle } from '../../../helpers/create-user-card-btn-title/create-btn-title';
import Button from '../../Button/Button';
import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserCardProps {
  info: IInfo;
  changeFriendStatus?: (username: string, attitude: ProfileAttitude) => void;
}

const UserCard: FC<IUserCardProps> = ({ info, changeFriendStatus }) => {
  const isActiveUser: boolean = info.attitude === ProfileAttitude.YOU;

  const btnTitle: string = createUserCardBtnTitle(info.attitude);

  const changeFriendStatusHandler = (): void => {
    if (changeFriendStatus) changeFriendStatus(info.username, info.attitude);
  };

  return (
    <div className={cS.wrapper}>
      <CardInfo info={info} isExtended />
      {!isActiveUser && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title={btnTitle} onClick={changeFriendStatusHandler} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
