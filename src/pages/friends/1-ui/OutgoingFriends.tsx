import React, { ReactElement, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getFriendOutgoing, revokeRequestFriend } from '../2-bll/thunk/friends-thunk';

const OutgoingFriends = (): ReactElement => {
  const dispatch = useAppDispatch();

  const outgoingFriends = useAppSelector(state => state.friends.friendList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  const handleUnsubscribe = (username: string): void => {
    dispatch(revokeRequestFriend(username));
  };

  useEffect(() => {
    dispatch(getFriendOutgoing({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {!isLoading ? (
        outgoingFriends.map(outgoing => (
          <UserRequestCard key={outgoing.username} info={outgoing} handleUnsubscribe={handleUnsubscribe} />
        ))
      ) : (
        <Preloader />
      )}
      {!isLoading && !outgoingFriends.length && <div className={gS.infoBlockContent}>No content</div>}
    </div>
  );
};

export default OutgoingFriends;
