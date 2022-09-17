import { FC } from 'react';

import ConfirmCode, { IConfirmCodeProps } from '../../../../components/Forms/ConfirmationCode/ConfirmCode';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { resetPasswordConfirmCode } from '../2-bll/thunk/password-thunk';

const ResetPasswordConfirmCode: FC = () => {
  const stepResetPassword = useAppSelector(state => state.password.stepResetPassword);

  const formSettings: IConfirmCodeProps = {
    type: 'reset-password',
    stepToCheck: stepResetPassword,
    onSubmit: resetPasswordConfirmCode,
  };

  return <ConfirmCode {...formSettings} />;
};

export default ResetPasswordConfirmCode;
