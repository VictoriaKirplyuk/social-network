import moment from 'moment';

export const createTimeout = (seconds: number): string => {
  const secInMinutes = 60;
  const formatBorderValue = 10;

  const min = Math.floor(seconds / secInMinutes);
  const sec = seconds - min * secInMinutes;

  const formatMin = min >= formatBorderValue ? min : `0${min}`;
  const formatSec = sec >= formatBorderValue ? sec : `0${sec}`;

  return `${formatMin}:${formatSec}`;
}; // fix

// export const determineUserAge = (birthDate: string): string => {
//   const userBirthDate: Moment = moment(birthDate, 'YYYY-MM-DD');
// };

export const formatDateOfBirth = (birthDate: string): string => {
  return moment(birthDate, 'YYYY-MM-DD').format('D MMM YYYY');
};
