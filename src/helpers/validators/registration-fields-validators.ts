import * as yup from 'yup';

const maxPasswordSymbol = 11;
const maxNameSymbol = 15;

export const registrationCompleteSchema = yup.object().shape({
  password: yup.string().max(maxPasswordSymbol, 'No more than 11 characters').required('Required field'),
  confirmPassword: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('password')], "Passwords don't match"),
  username: yup.string().required('Required field').max(maxNameSymbol, 'No more than 15 characters'),
  firstName: yup.string().required('Required field').max(maxNameSymbol, 'No more than 15 characters'),
  middleName: yup.string().required('Required field').max(maxNameSymbol, 'No more than 15 characters'),
  secondName: yup.string().required('Required field').max(maxNameSymbol, 'No more than 15 characters'),
  gender: yup.string().required('Required field'),
  birthDate: yup.string().required('Required field'),
});
