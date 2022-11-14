import jwtDecode from 'jwt-decode';
import moment, { Moment } from 'moment';

interface IJwtToken {
  sub: string;
  auth: string;
  exp: string;
}

interface IJwtInfo {
  exp: string;
  expDate: string;
}

const getTokenExpDate = (exp: string): string => {
  return moment().add(exp, 'ms').format('MM-DD-YYYY HH:mm');
};

export const registerJwtToken = (jwtToken: string): void => {
  const parsedJwt: IJwtToken = jwtDecode(jwtToken);

  const expDate: string = getTokenExpDate(parsedJwt.exp);

  const jwtInfo: IJwtInfo = {
    exp: parsedJwt.exp,
    expDate,
  };

  localStorage.setItem('jwtToken', JSON.stringify(jwtToken));
  localStorage.setItem('jwtInfo', JSON.stringify(jwtInfo));
};

export const isJwtTokenValid = (): boolean | Error => {
  const jwtInfo: string | null = localStorage.getItem('jwtInfo');

  if (jwtInfo) {
    const parseJwtInfo: IJwtInfo = JSON.parse(jwtInfo);
    const expDate: Moment = moment(parseJwtInfo.expDate, 'MM-DD-YYYY HH:mm');

    return moment().isBefore(expDate);
  }

  return new Error('Jwt token not found');
};
