import * as yup from 'yup';

export const confirmCodeSchema = yup.object().shape({
  code: yup.string().required('Required field'),
});
