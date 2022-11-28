import { ReactElement } from 'react';

import EmailOrPhone, { IEmailOrPhoneProps } from '../../../../components/Forms/EmailOrPhone/EmailOrPhone';
import { RouteNames } from '../../../../enums/router-enums';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { registration } from '../2-bll/thunk/registration-thunk';

const Registration = (): ReactElement => {
  const stepAuth = useAppSelector(state => state.auth.stepAuth);

  const formSettings: IEmailOrPhoneProps = {
    type: 'registration',
    title: 'Sign up an your account',
    stepToCheck: stepAuth,
    subLink: {
      title: 'Already have an account?',
      path: RouteNames.LOGIN,
    },
    onSubmit: registration,
  };

  return <EmailOrPhone {...formSettings} />;
};

export default Registration;
