import { TUserInfoSize } from "../../../declarations";

export const subtitleSize = (size: TUserInfoSize) => {
  let result;
  if (size === 'sm') {
    result = 'xs';
  } else if (size === 'lg') {
    result = 'md';
  } else {
    result = 'sm';
  }
  return result;
};
