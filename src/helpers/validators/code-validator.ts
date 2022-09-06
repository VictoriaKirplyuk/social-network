import * as yup from 'yup';

export const codeSchema = yup.object().shape({
  code: yup.string().required('Required field'),
});
