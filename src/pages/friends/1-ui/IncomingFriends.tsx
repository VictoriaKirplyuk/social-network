import React, { ReactElement, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { acceptFriend, declineFriend, getFriendIncoming } from '../2-bll/thunk/friends-thunk';

const IncomingFriends = (): ReactElement => {
  const dispatch = useAppDispatch();

  const incomingFriends = useAppSelector(state => state.friends.friendList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  const handleReplyFriendRequest = (username: string, reply: string): void => {
    if (reply === 'accept') dispatch(acceptFriend(username));
    else dispatch(declineFriend(username));
  };

  useEffect(() => {
    dispatch(getFriendIncoming({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {!isLoading ? (
        incomingFriends.map(incoming => (
          <UserRequestCard
            key={incoming.username}
            info={incoming}
            handleReplyFriendRequest={handleReplyFriendRequest}
          />
        ))
      ) : (
        <Preloader />
      )}
      {!isLoading && !incomingFriends.length && <div className={gS.infoBlockContent}>No content</div>}
    </div>
  );
};

export default IncomingFriends;
