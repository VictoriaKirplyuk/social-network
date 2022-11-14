import React, { FC } from 'react';

import { ProfileAttitude, RequestStatus } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';
import Button from '../../Button/Button';
import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserRequestCardProps {
  info: IInfo;
  replyFriendRequest?: (username: string, reply: string) => void;
  unsubscribe?: (username: string) => void;
}

const UserRequestCard: FC<IUserRequestCardProps> = ({ info, replyFriendRequest, unsubscribe }) => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const isIncomingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_INCOMING;
  const isOutgoingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_OUTGOING;

  const replyFriendRequestHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.dataset.type && replyFriendRequest) replyFriendRequest(info.username, e.currentTarget.dataset.type);
  };

  const unsubscribeHandler = (): void => {
    if (unsubscribe) unsubscribe(info.username);
  };

  return (
    <div className={cS.wrapper}>
      <CardInfo info={info} />
      {isIncomingRequest && (
        <div className={cS.btnGroup}>
          <Button data-type="accept" style={cS.btn} title="Accept request" onClick={replyFriendRequestHandler} disabled={isLoading} />
          <Button data-type="decline" style={cS.btn} title="Decline friend" onClick={replyFriendRequestHandler} disabled={isLoading} />
        </div>
      )}
      {isOutgoingRequest && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title="Unsubscribe" onClick={unsubscribeHandler} disabled={isLoading} />
        </div>
      )}
    </div>
  );
};

export default UserRequestCard;
