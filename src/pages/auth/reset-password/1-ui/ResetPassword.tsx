import { FC } from 'react';

import EmailOrPhone, { IEmailOrPhoneProps } from '../../../../components/Forms/EmailOrPhone/EmailOrPhone';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { resetPassword } from '../2-bll/thunk/password-thunk';

const ResetPassword: FC = () => {
  const stepResetPassword = useAppSelector(state => state.password.stepResetPassword);

  const formSettings: IEmailOrPhoneProps = {
    type: 'reset-password',
    stepToCheck: stepResetPassword,
    title: 'Enter email or phone to recover',
    onSubmit: resetPassword,
  };

  return <EmailOrPhone {...formSettings} />;
};

export default ResetPassword;
