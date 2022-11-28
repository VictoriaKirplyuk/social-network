import React, { ReactElement } from 'react';

import gS from '../../../common/styles/styles.module.css';
import { Nullable } from '../../../common/types/nullable';

interface ProfileInfoFieldProps {
  title: string;
  info: Nullable<string> | undefined;
}

const ProfileInfoField = ({ title, info }: ProfileInfoFieldProps): Nullable<ReactElement> => {
  return info ? (
    <div className={gS.userInfoFieldName}>
      {title}: <span className={gS.userInfoField}>{info}</span>
    </div>
  ) : null;
};

export default ProfileInfoField;
