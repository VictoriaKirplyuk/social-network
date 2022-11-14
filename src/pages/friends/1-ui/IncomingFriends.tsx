import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { acceptFriend, declineFriend, getFriendIncoming } from '../2-bll/thunk/friends-thunk';

import s from './Friends.module.css';

const IncomingFriends: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const incomingFriends = useAppSelector(state => state.friends.friendList.content);

  const dispatch = useAppDispatch();

  const replyFriendRequest = (username: string, reply: string): void => {
    if (reply === 'accept') dispatch(acceptFriend(username));
    else dispatch(declineFriend(username));
  };

  useEffect(() => {
    dispatch(getFriendIncoming({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {!isLoading ? incomingFriends.map(f => <UserRequestCard key={f.username} info={f} replyFriendRequest={replyFriendRequest} />) : <Preloader />}
      {!isLoading && !incomingFriends.length && <div className={s.infoContent}>No content</div>}
    </div>
  );
};

export default IncomingFriends;
