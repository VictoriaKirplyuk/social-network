import React, { FC, useEffect, useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import Button from '../../../components/Button/Button';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { RouteNames } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getAnotherProfileData, getProfileData } from '../2-bll/thunk/profile-thunk';

import s from './Profile.module.css';

const Profile: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const { firstName, middleName, secondName, username, avatar, birthDate, city, education, relationshipStatus, workplace } = useAppSelector(
    state => state.profile,
  );
  const dispatch = useAppDispatch();

  const urlParams = useParams<'username'>();

  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  const showDetails = (): void => setIsShowDetails(!isShowDetails);

  useEffect(() => {
    const requestedUsername = urlParams.username;

    if (requestedUsername) {
      dispatch(getAnotherProfileData(requestedUsername));

      return;
    }
    dispatch(getProfileData());
  }, [dispatch, urlParams]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        <div className={s.profileInfo}>
          <ProfileAvatar avatar={avatar.mimeType} />
          <div className={s.generalInfo}>
            <div>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{firstName}</span>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{middleName}</span>
              <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{secondName}</span>
            </div>
            <div className={gS.userInfoField}>{username}</div>
            <div className={gS.userInfoFieldName}>
              Birth date: <span className={gS.userInfoField}>{birthDate}</span>
            </div>
          </div>
        </div>
        <Button title={!isShowDetails ? 'Show details' : 'Hide details'} onClick={showDetails} />
        {isShowDetails && (
          <div className={s.otherInfo}>
            <div className={gS.userInfoFieldName}>
              City: <span className={gS.userInfoField}>{city}</span>
            </div>
            <div className={gS.userInfoFieldName}>
              Workplace: <span className={gS.userInfoField}>{workplace}</span>
            </div>
            <div className={gS.userInfoFieldName}>
              Education: <span className={gS.userInfoField}>{education}</span>
            </div>
            <div className={gS.userInfoFieldName}>
              Relationship: <span className={gS.userInfoField}>{relationshipStatus}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
