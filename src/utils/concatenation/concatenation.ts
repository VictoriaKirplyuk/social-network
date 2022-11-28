import { Nullable } from '../../common/types/nullable';

export const concatUsername = (firstName: string, middleName: Nullable<string>, secondName: string): string => {
  return !middleName ? `${firstName} ${secondName}` : `${firstName} ${middleName} ${secondName}`;
};
