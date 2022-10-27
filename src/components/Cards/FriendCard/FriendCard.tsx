import React, { FC } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IFriendCardProps {
  info: IInfo;
}

const FriendCard: FC<IFriendCardProps> = ({ info }) => {
  return (
    <div className={cS.wrapper}>
      <CardInfo info={info} />
    </div>
  );
};

export default FriendCard;
