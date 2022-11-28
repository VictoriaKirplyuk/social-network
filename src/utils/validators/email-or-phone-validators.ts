import * as yup from 'yup';

const phoneRegExp: RegExp = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/i;

export const emailOrPhoneSchema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .required('Required field')
    .test('emailOrPhone', 'Invalid email or phone', value => {
      return validateEmail(value) || validatePhone(parseInt(value ?? '0', 10));
    }),
});

const validateEmail = (email: string | undefined): boolean => {
  return yup.string().email().isValidSync(email);
};

const validatePhone = (phone: number | undefined): boolean => {
  return yup
    .number()
    .integer()
    .positive()
    .test(phone => {
      return !!(phone && phoneRegExp.test(phone.toString()));
    })
    .isValidSync(phone);
};
