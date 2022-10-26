import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { acceptFriend, declineFriend, getFriendRequests } from '../2-bll/thunk/friends-thunk';

const IncomingFriends: FC = () => {
  const friends = useAppSelector(state => state.friends.friendList.content);

  const dispatch = useAppDispatch();

  const replyFriendRequest = (username: string, reply: string): void => {
    if (reply === 'accept') dispatch(acceptFriend(username));
    else dispatch(declineFriend(username));
  };

  useEffect(() => {
    dispatch(getFriendRequests({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {friends.map(f => (
        <UserRequestCard key={f.username} info={f} replyFriendRequest={replyFriendRequest} />
      ))}
    </div>
  );
};

export default IncomingFriends;
