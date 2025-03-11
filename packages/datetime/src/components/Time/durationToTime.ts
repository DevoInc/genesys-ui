const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const durationToTime = (duration: number) => {
  let ms = duration;

  const hours = Math.trunc(ms / HOUR);
  ms -= hours * HOUR;

  const minutes = Math.trunc(ms / MINUTE);
  ms -= minutes * MINUTE;

  const seconds = Math.trunc(ms / SECOND);
  ms -= seconds * SECOND;

  return {
    hours,
    minutes,
    seconds,
    milliseconds: ms,
  };
};
