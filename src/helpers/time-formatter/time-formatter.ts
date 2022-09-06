export const timeFormatter = (seconds: number): string => {
  const secInMinutes = 60;
  const formatBorderValue = 10;

  const min = Math.floor(seconds / secInMinutes);
  const sec = seconds - min * secInMinutes;

  const formatMin = min >= formatBorderValue ? min : `0${min}`;
  const formatSec = sec >= formatBorderValue ? sec : `0${sec}`;

  return `${formatMin}:${formatSec}`;
};
