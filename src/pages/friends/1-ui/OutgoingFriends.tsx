import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import UserRequestCard from '../../../components/Cards/UserRequestCard/UserRequestCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';

const OutgoingFriends: FC = () => {
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const outgoingFriends = useAppSelector(state => state.friends.friendList.content);

  // const dispatch = useAppDispatch();

  const unsubscribe = (username: string): void => {
    console.log(username);
    // call action to unsubscribe
  };

  useEffect(() => {
    // outgoing list request
  }, []);

  return (
    <div className={gS.block}>
      {!isLoading ? outgoingFriends.map(f => <UserRequestCard key={f.username} info={f} unsubscribe={unsubscribe} />) : <Preloader />}
    </div>
  );
};

export default OutgoingFriends;
