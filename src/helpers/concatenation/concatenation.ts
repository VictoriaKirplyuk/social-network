export const concatUsername = (firstName: string, middleName: string | null, secondName: string): string => {
  if (!middleName) return `${firstName} ${secondName}`;

  return `${firstName} ${middleName} ${secondName}`;
};
