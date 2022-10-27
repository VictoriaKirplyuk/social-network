import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import FriendCard from '../../../components/Cards/FriendCard/FriendCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getFriends } from '../2-bll/thunk/friends-thunk';

const CurrentFriends: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const friends = useAppSelector(state => state.friends.friendList.content);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriends({}));
  }, [dispatch]);

  return <div className={gS.block}>{!isLoading ? friends.map(f => <FriendCard key={f.username} info={f} />) : <Preloader />}</div>;
};

export default CurrentFriends;
