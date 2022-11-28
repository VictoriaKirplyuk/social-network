import React, { ReactElement } from 'react';

import gS from '../../../common/styles/styles.module.css';
import { Nullable } from '../../../common/types/nullable';
import ProfileInfoField from '../ProfileInfoField/ProfileInfoField';

import s from './AdditionalProfileInfo.module.css';

interface IAdditionalProfileInfoProps {
  workplace: Nullable<string>;
  education: Nullable<string>;
  relationshipStatus: Nullable<string>;
}

interface IProfileInfoField {
  title: string;
  info: Nullable<string>;
}

const AdditionalProfileInfo = ({
  workplace,
  education,
  relationshipStatus,
}: IAdditionalProfileInfoProps): ReactElement => {
  const isAdditionalInfo: boolean = [workplace, education, relationshipStatus].some(info => !!info);
  const profileInfoFields: Nullable<IProfileInfoField[]> = isAdditionalInfo
    ? [
        { title: 'Workplace', info: workplace },
        { title: 'Education', info: education },
        { title: 'Relationship', info: relationshipStatus },
      ]
    : null;

  return (
    <div className={s.additionalProfileInfo}>
      {isAdditionalInfo && profileInfoFields ? (
        <>
          {profileInfoFields.map(({ info, title }) => (
            <ProfileInfoField key={title} title={title} info={info} />
          ))}
        </>
      ) : (
        <div className={gS.infoField}>Information is absent</div>
      )}
    </div>
  );
};

export default AdditionalProfileInfo;
