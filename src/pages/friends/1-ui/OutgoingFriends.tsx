import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getFriendOutgoing, revokeRequestFriend } from '../2-bll/thunk/friends-thunk';

const OutgoingFriends: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const outgoingFriends = useAppSelector(state => state.friends.friendList.content);

  const dispatch = useAppDispatch();

  const unsubscribe = (username: string): void => {
    dispatch(revokeRequestFriend(username));
  };

  useEffect(() => {
    dispatch(getFriendOutgoing({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {!isLoading ? outgoingFriends.map(f => <UserRequestCard key={f.username} info={f} unsubscribe={unsubscribe} />) : <Preloader />}
      {!isLoading && !outgoingFriends.length && <div className={gS.infoBlockContent}>No content</div>}
    </div>
  );
};

export default OutgoingFriends;
