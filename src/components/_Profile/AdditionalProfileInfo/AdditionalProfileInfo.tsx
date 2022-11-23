import React, { FC } from 'react';

import gS from '../../../common/styles/styles.module.css';
import ProfileInfoField from '../ProfileInfoField/ProfileInfoField';

import s from './AdditionalProfileInfo.module.css';

interface IAdditionalProfileInfoProps {
  workplace: string | null;
  education: string | null;
  relationshipStatus: string | null;
}

const AdditionalProfileInfo: FC<IAdditionalProfileInfoProps> = ({ workplace, education, relationshipStatus }) => {
  const isAdditionalInfo: boolean = [workplace, education, relationshipStatus].some(info => info !== null);

  return (
    <div className={s.additionalProfileInfo}>
      {isAdditionalInfo ? (
        <>
          <ProfileInfoField title="Workplace" info={workplace} />
          <ProfileInfoField title="Education" info={education} />
          <ProfileInfoField title="Relationship" info={relationshipStatus} />
        </>
      ) : (
        <div className={gS.infoField}>Information is absent</div>
      )}
    </div>
  );
};

export default AdditionalProfileInfo;
