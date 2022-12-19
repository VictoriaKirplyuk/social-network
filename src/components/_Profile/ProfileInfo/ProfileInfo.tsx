import React, { ReactElement } from 'react';

import gS from '../../../common/styles/styles.module.css';
import { Nullable } from '../../../common/types/nullable';
import { IAvatar } from '../../../common/types/user-types';
import { concatUsername } from '../../../utils/concatenation/concatenation';
import { formatDateOfBirth } from '../../../utils/date-and-time-formatters/date-and-time-formatters';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import ProfileInfoField from '../ProfileInfoField/ProfileInfoField';

import s from './ProfileInfo.module.css';

interface IProfileInfoProps {
  firstName: string;
  middleName: Nullable<string>;
  secondName: string;
  username: string;
  birthDate: string;
  city: Nullable<string | undefined>;
  avatar: IAvatar;
}

interface IProfileInfoField {
  title: string;
  info: Nullable<string | undefined>;
}

const ProfileInfo = ({
  firstName,
  middleName,
  secondName,
  username,
  birthDate,
  city,
  avatar,
}: IProfileInfoProps): ReactElement => {
  const profileInfoFields: IProfileInfoField[] = [
    { title: 'Date of Birth', info: formatDateOfBirth(birthDate) },
    { title: 'City', info: city },
  ];
  const fullUsername: string = concatUsername(firstName, middleName, secondName);

  return (
    <div className={s.profileInfo}>
      <ProfileAvatar avatar={avatar?.mimeType} />
      <div className={s.generalProfileInfo}>
        <div className={s.nameGroup}>
          <span className={`${gS.userInfoField} ${gS.importantInfoField}`}>{fullUsername}</span>
          <span className={gS.userInfoField}>({username})</span>
        </div>
        {profileInfoFields.map(({ title, info }) => (
          <ProfileInfoField key={title} title={title} info={info} />
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
