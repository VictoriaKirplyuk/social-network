import React, { ReactElement } from 'react';

import { ProfileAttitude } from '../../../enums/profile-enums';
import { createUserCardBtnTitle } from '../../../utils/create-user-card-btn-title/create-btn-title';
import Button from '../../Button/Button';
import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserCardProps {
  info: IInfo;
  handleChangeFriendStatus?: (username: string, attitude: ProfileAttitude) => void;
}

const UserCard = ({ info, handleChangeFriendStatus }: IUserCardProps): ReactElement => {
  const isActiveUser: boolean = info.attitude === ProfileAttitude.YOU;
  const btnTitle: string = createUserCardBtnTitle(info.attitude);

  const onStatusChangeClick = (): void => {
    if (handleChangeFriendStatus) handleChangeFriendStatus(info.username, info.attitude);
  };

  return (
    <div className={cS.wrapper}>
      <CardInfo info={info} isExtended />
      {!isActiveUser && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title={btnTitle} onClick={onStatusChangeClick} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
