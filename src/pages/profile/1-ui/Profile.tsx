import React, { FC, useEffect, useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import ProfileInfoField from '../../../components/_Profile/ProfileInfoField/ProfileInfoField';
import Button from '../../../components/Button/Button';
import Preloader from '../../../components/Preloader/Preloader';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { RequestStatus, RouteNames } from '../../../enums';
import { formatDateOfBirth } from '../../../helpers/date-and-time-formatters/date-and-time-formatters';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getAnotherProfileData, getProfileData } from '../2-bll/thunk/profile-thunk';

import s from './Profile.module.css';

const Profile: FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const { firstName, middleName, secondName, username, avatar, birthDate, residenceAddress, education, relationshipStatus, workplace } =
    useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const urlParams = useParams<'username'>();

  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  const showDetails = (): void => setIsShowDetails(!isShowDetails);

  useEffect(() => {
    if (isLoggedIn) {
      const requestedUsername = urlParams.username;

      if (requestedUsername) {
        dispatch(getAnotherProfileData(requestedUsername));

        return;
      }
      dispatch(getProfileData());
    }
  }, [dispatch, isLoggedIn, urlParams]);

  if (!isLoggedIn) {
    return <Navigate to={RouteNames.LOGIN} />;
  }

  return (
    <div className={pS.pageContent}>
      <div className={gS.block}>
        {!isLoading ? (
          <>
            {/* ProfileInfo component */}
            <div className={s.profileInfo}>
              <ProfileAvatar avatar={avatar.mimeType} />
              {/* generalProfileInfo component */}
              <div className={s.generalProfileInfo}>
                <div className={s.nameGroup}>
                  <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{firstName}</span>
                  <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{middleName}</span>
                  <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{secondName}</span>
                  <div className={gS.userInfoField}>({username})</div>
                </div>
                <ProfileInfoField title="Date of Birth" info={formatDateOfBirth(birthDate)} />
                <ProfileInfoField title="City" info={residenceAddress?.city} />
              </div>
            </div>
            <Button title={!isShowDetails ? 'Show details' : 'Hide details'} onClick={showDetails} />
            {/* additionalProfileInfo component */}
            {isShowDetails && (
              <div className={s.additionalProfileInfo}>
                <ProfileInfoField title="Workplace" info={workplace} />
                <ProfileInfoField title="Education" info={education} />
                <ProfileInfoField title="Relationship" info={relationshipStatus} />
              </div>
            )}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default Profile;
