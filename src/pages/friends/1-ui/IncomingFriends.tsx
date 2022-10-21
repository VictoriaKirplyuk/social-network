import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { getFriendRequests } from '../2-bll/thunk/friends-thunk';

const IncomingFriends: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriendRequests({}));
  }, [dispatch]);

  return <div className={gS.block}>Incoming friends</div>;
};

export default IncomingFriends;
