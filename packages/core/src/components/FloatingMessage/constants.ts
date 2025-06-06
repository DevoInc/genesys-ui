import type {
  TFloatingMessageOffset,
  TFloatingMessagePosition,
} from './declarations';

export const FN_STATUS_DEFAULT_VALUE = 'success';
export const FN_POSITION_DEFAULT_VALUE: TFloatingMessagePosition = 'right-top';

export const FN_POSITION_DEFAULT_OFFSET_MAP: {
  [key in TFloatingMessagePosition]: TFloatingMessageOffset;
} = {
  custom: null,
  'left-top': [10, 10],
  'left-center': [10, 0],
  'left-bottom': [10, 10],
  'center-top': [0, 10],
  'center-center': [0, 0],
  'center-bottom': [0, 10],
  'right-top': [10, 10],
  'right-center': [10, 0],
  'right-bottom': [10, 10],
};
