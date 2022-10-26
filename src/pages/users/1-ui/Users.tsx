import React, { FC, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import UserCard from '../../../components/Cards/UserCard/UserCard';
import { ProfileAttitude, RouteNames } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { acceptFriend, requestFriend } from '../../friends/2-bll/thunk/friends-thunk';
import pS from '../../Pages.module.css';
import { getUsers } from '../2-bll/thunk/users-thunk';

const Users: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const users = useAppSelector(state => state.users.foundUsers.content);

  const dispatch = useAppDispatch();

  const changeFriendStatus = (username: string, attitude: ProfileAttitude): void => {
    if (attitude === ProfileAttitude.NONE) dispatch(requestFriend(username));
    if (attitude === ProfileAttitude.FRIEND_INCOMING) dispatch(acceptFriend(username));
    // fix on:
    // if (attitude === ProfileAttitude.NONE || attitude === ProfileAttitude.FRIEND_INCOMING) dispatch(requestFriend(username));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        {users.map(u => (
          <UserCard key={u.username} info={u} changeFriendStatus={changeFriendStatus} />
        ))}
      </div>
    </div>
  );
};

export default Users;
