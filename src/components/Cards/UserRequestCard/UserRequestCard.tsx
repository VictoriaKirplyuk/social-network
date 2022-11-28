import React, { ReactElement } from 'react';

import { RequestStatus } from '../../../enums/app-enums';
import { ProfileAttitude } from '../../../enums/profile-enums';
import { useAppSelector } from '../../../hooks/redux-hooks';
import Button from '../../Button/Button';
import CardInfo from '../CardInfo/CardInfo';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserRequestCardProps {
  info: IInfo;
  handleReplyFriendRequest?: (username: string, reply: string) => void;
  handleUnsubscribe?: (username: string) => void;
}

const UserRequestCard = ({
  info,
  handleReplyFriendRequest,
  handleUnsubscribe,
}: IUserRequestCardProps): ReactElement => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  const isIncomingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_INCOMING;
  const isOutgoingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_OUTGOING;

  const onReplyFriendRequestClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.dataset.type && handleReplyFriendRequest)
      handleReplyFriendRequest(info.username, e.currentTarget.dataset.type);
  };

  const onUnsubscribeClick = (): void => {
    if (handleUnsubscribe) handleUnsubscribe(info.username);
  };

  return (
    <div className={cS.wrapper}>
      <CardInfo info={info} />
      {isIncomingRequest && (
        <div className={cS.btnGroup}>
          <Button
            data-type="accept"
            style={cS.btn}
            title="Accept request"
            onClick={onReplyFriendRequestClick}
            disabled={isLoading}
          />
          <Button
            data-type="decline"
            style={cS.btn}
            title="Decline friend"
            onClick={onReplyFriendRequestClick}
            disabled={isLoading}
          />
        </div>
      )}
      {isOutgoingRequest && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title="Unsubscribe" onClick={onUnsubscribeClick} disabled={isLoading} />
        </div>
      )}
    </div>
  );
};

export default UserRequestCard;
