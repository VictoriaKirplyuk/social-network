import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Navigate } from 'react-router-dom';

import { RouteNames } from '../../../enums';
import { useAppSelector } from '../../../hooks/redux-hooks';

import s from './Profile.module.css';

const Profile: FC = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized);

  if (!isInitialized) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={s.profile}>
      <div className={s.generalDescription}>
        <Avatar size={125} icon={<UserOutlined />} />
        <div className={s.info}>
          <div className={s.name}>
            <div>Last name</div>
            <div>Middle name</div>
            <div>Second name</div>
          </div>
        </div>
      </div>
      <div className={s.AdditionalInfo}>Additional Information</div>
    </div>
  );
};

export default Profile;
