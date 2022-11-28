import React, { ReactElement, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import UserCard from '../../../components/Cards/UserCard/UserCard';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { ProfileAttitude } from '../../../enums/profile-enums';
import { RouteNames } from '../../../enums/router-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { acceptFriend, requestFriend } from '../../friends/2-bll/thunk/friends-thunk';
import pS from '../../Pages.module.css';
import { getUsers } from '../2-bll/thunk/users-thunk';

const Users = (): ReactElement => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.users.foundUsers.content);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;

  const handleChangeFriendStatus = (username: string, attitude: ProfileAttitude): void => {
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
        {!isLoading ? (
          users.map(user => (
            <UserCard key={user.username} info={user} handleChangeFriendStatus={handleChangeFriendStatus} />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default Users;
