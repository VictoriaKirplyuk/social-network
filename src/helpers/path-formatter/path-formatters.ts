export const profilePathFormatter = (path: string, value: string, replacementValue: string): string => {
  return path.replace(value, replacementValue);
};
