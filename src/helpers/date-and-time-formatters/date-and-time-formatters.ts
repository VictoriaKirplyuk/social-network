import moment, { Moment } from 'moment';

export const createTimeout = (seconds: number): string => {
  const secInMinutes = 60;
  const formatBorderValue = 10;

  const min = Math.floor(seconds / secInMinutes);
  const sec = seconds - min * secInMinutes;

  const formatMin = min >= formatBorderValue ? min : `0${min}`;
  const formatSec = sec >= formatBorderValue ? sec : `0${sec}`;

  return `${formatMin}:${formatSec}`;
}; // fix

export const determineUserAge = (birthDate: string): string => {
  const formattedDate: Moment = moment(birthDate, 'YYYY-MM-DD');

  return moment().diff(formattedDate, 'y').toString();
};

export const formatDateOfBirth = (birthDate: string): string => {
  return moment(birthDate, 'YYYY-MM-DD').format('D MMM YYYY');
};

export const formatMessageSendDate = (sendingDate: string): string => {
  const formattedDate: Moment = moment(sendingDate);
  const yesterdaysDate: Moment = moment().subtract(1, 'days');

  if (moment().isSame(formattedDate, 'day')) return formattedDate.format('HH:mm');
  if (yesterdaysDate.isSame(formattedDate, 'day')) return 'yesterday';
  if (moment().isSame(formattedDate, 'year')) return formattedDate.format('MMM YY');

  return formattedDate.format('DD MMM');
};
