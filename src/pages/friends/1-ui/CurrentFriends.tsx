import React, { ReactElement, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import FriendCard from '../../../components/Cards/FriendCard/FriendCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getFriends } from '../2-bll/thunk/friends-thunk';

const CurrentFriends = (): ReactElement => {
  const dispatch = useAppDispatch();

  const friends = useAppSelector(state => state.friends.friendList.content);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  useEffect(() => {
    dispatch(getFriends({}));
  }, [dispatch]);

  return (
    <div className={gS.block}>
      {!isLoading ? friends.map(friend => <FriendCard key={friend.username} info={friend} />) : <Preloader />}
      {!isLoading && !friends.length && <div className={gS.infoBlockContent}>No content</div>}
    </div>
  );
};

export default CurrentFriends;
