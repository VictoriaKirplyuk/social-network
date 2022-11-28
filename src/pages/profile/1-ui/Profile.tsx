import React, { ReactElement, useEffect, useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import gS from '../../../common/styles/styles.module.css';
import AdditionalProfileInfo from '../../../components/_Profile/AdditionalProfileInfo/AdditionalProfileInfo';
import ProfileInfo from '../../../components/_Profile/ProfileInfo/ProfileInfo';
import Button from '../../../components/Button/Button';
import Preloader from '../../../components/Preloader/Preloader';
import { RequestStatus } from '../../../enums/app-enums';
import { RouteNames } from '../../../enums/router-enums';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import pS from '../../Pages.module.css';
import { getAnotherProfileData, getProfileData } from '../2-bll/thunk/profile-thunk';

const Profile = (): ReactElement => {
  const urlParams = useParams<'username'>();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const isLoading = useAppSelector(state => state.app.status) === RequestStatus.LOADING;
  const {
    firstName,
    middleName,
    secondName,
    username,
    avatar,
    birthDate,
    residenceAddress,
    education,
    relationshipStatus,
    workplace,
  } = useAppSelector(state => state.profile);

  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  const onShowDetailsClick = (): void => setIsShowDetails(!isShowDetails);

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
            <ProfileInfo
              firstName={firstName}
              middleName={middleName}
              secondName={secondName}
              username={username}
              birthDate={birthDate}
              city={residenceAddress?.city}
              avatar={avatar}
            />
            <Button title={!isShowDetails ? 'Show details' : 'Hide details'} onClick={onShowDetailsClick} />
            {/* additionalProfileInfo component */}
            {isShowDetails && (
              <AdditionalProfileInfo
                workplace={workplace}
                education={education}
                relationshipStatus={relationshipStatus}
              />
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
