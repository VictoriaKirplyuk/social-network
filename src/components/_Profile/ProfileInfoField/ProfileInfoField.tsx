import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';

interface ProfileInfoFieldProps {
  title: string;
  info: string | null | undefined;
}

const ProfileInfoField: FC<ProfileInfoFieldProps> = ({ title, info }) => {
  return info ? (
    <div className={gS.userInfoFieldName}>
      {title}: <span className={gS.userInfoField}>{info}</span>
    </div>
  ) : null;
};

export default ProfileInfoField;
