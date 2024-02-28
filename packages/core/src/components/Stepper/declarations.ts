import {
  FeedbackColorScheme,
  BodyColorScheme,
  BaseSize,
} from '../../declarations';
import { BadgeSize } from '../Badge';

export type StepperSize = BaseSize;

export type StepperStatus = 'completed' | 'current' | 'pending' | 'disabled';

export type HiddenText =
  | 'Completed: '
  | 'Current: '
  | 'Pending: '
  | 'Disabled: ';

export type BadgeColorProp = {
  completed: FeedbackColorScheme;
  current: FeedbackColorScheme;
  pending: FeedbackColorScheme;
  disabled: FeedbackColorScheme;
};

export type BadgeSizeProp = BadgeSize;

export type LabelColorProp = {
  completed: BodyColorScheme;
  current: BodyColorScheme;
  pending: BodyColorScheme;
  disabled: BodyColorScheme;
};

export type HiddenTextProp = {
  completed: string;
  current: string;
  pending: string;
  disabled: string;
};
