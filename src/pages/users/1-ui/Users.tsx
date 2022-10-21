import React, { FC, useEffect } from 'react';

import gS from '../../../common/styles/styles.module.css';
import User from '../../../components/User/User';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getUsers } from '../2-bll/thunk/users-thunk';

const Users: FC = () => {
  const users = useAppSelector(state => state.users.foundUsers.content);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        {users.map(u => (
          <User key={u.username} info={u} />
        ))}
      </div>
    </div>
  );
};

export default Users;
