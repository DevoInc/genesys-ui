import { TUserInfoFormat } from '../../../declarations';

export const evalFormatFN = (
  format: TUserInfoFormat,
  subtitle: React.ReactNode,
) => {
  if (format !== 'base') {
    return format;
  }
  return subtitle ? 'bold' : 'base';
};
