import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import { ProfileAttitude, RouteNames } from '../../../enums';
import Button from '../../Button/Button';
import cS from '../Cards.module.css';
import { IInfo } from '../types';

interface IUserRequestCardProps {
  info: IInfo;
  replyFriendRequest?: (username: string, reply: string) => void;
  unsubscribe?: (username: string) => void;
}

const UserRequestCard: FC<IUserRequestCardProps> = ({ info, replyFriendRequest, unsubscribe }) => {
  const isIncomingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_INCOMING;
  const isOutgoingRequest: boolean = info.attitude === ProfileAttitude.FRIEND_OUTGOING;

  const userProfilePath: string = RouteNames.CURRENT_PROFILE.replace(':username', info.username);

  const replyFriendRequestHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.dataset.type && replyFriendRequest) replyFriendRequest(info.username, e.currentTarget.dataset.type);
  };

  const unsubscribeHandler = (): void => {
    if (unsubscribe) unsubscribe(info.username);
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
      {isIncomingRequest && (
        <div className={cS.btnGroup}>
          <Button data-type="accept" style={cS.btn} title="Accept request" onClick={replyFriendRequestHandler} />
          <Button data-type="decline" style={cS.btn} title="Decline friend" onClick={replyFriendRequestHandler} />
        </div>
      )}
      {isOutgoingRequest && (
        <div className={cS.btnGroup}>
          <Button style={cS.btn} title="Unsubscribe" onClick={unsubscribeHandler} />
        </div>
      )}
    </div>
  );
};

export default UserRequestCard;
