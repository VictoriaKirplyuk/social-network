import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';

// import { Navigate } from 'react-router-dom';
//
// import { RouteNames } from '../../../enums';
// import { useAppSelector } from '../../../hooks/redux-hooks';
import gS from '../../../common/styles/styles.module.css';
import Button from '../../../components/Button/Button';
import pS from '../../Pages.module.css';

import s from './Profile.module.css';

const Profile: FC = () => {
  // const isInitialized = useAppSelector(state => state.app.isInitialized);

  // if (!isInitialized) {
  //   return <Navigate to={RouteNames.LOGIN} />;
  // }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        <div className={s.profileInfo}>
          <Avatar size={140} icon={<UserOutlined />} />
          <div className={s.generalInfo}>
            <div>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>Hiroko</span>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>Shingo</span>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>Hamasaki</span>
            </div>
            <div className={gS.userInfoField}>Username</div>
            <div className={gS.userInfoFieldName}>Birth date:</div>
          </div>
        </div>
        <div className={gS.otherInfo}>
          <Button title="Show details" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
