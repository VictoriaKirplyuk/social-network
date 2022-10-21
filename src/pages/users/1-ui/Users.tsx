import React, { FC, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import UserCard from '../../../components/User/UserCard';
import { RouteNames } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { requestFriend } from '../../friends/2-bll/thunk/friends-thunk';
import pS from '../../Pages.module.css';
import { getUsers } from '../2-bll/thunk/users-thunk';

const Users: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const users = useAppSelector(state => state.users.foundUsers.content);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const changeFriendStatus = (username: string): void => {
    dispatch(requestFriend(username));
  };

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        {users.map(u => (
          <UserCard key={u.username} info={u} action={changeFriendStatus} />
        ))}
      </div>
    </div>
  );
};

export default Users;
