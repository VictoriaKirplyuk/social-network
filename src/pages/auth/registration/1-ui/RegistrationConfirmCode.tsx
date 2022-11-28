import React, { ReactElement } from 'react';

import ConfirmCode, { IConfirmCodeProps } from '../../../../components/Forms/ConfirmationCode/ConfirmCode';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { registrationConfirmCode } from '../2-bll/thunk/registration-thunk';

const RegistrationConfirmCode = (): ReactElement => {
  const stepAuth = useAppSelector(state => state.auth.stepAuth);

  const formSettings: IConfirmCodeProps = {
    type: 'registration',
    stepToCheck: stepAuth,
    onSubmit: registrationConfirmCode,
  };

  return <ConfirmCode {...formSettings} />;
};

export default RegistrationConfirmCode;
