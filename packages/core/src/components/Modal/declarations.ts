import { CSSProperties, DOMAttributes } from 'react';

import { GlobalStatus } from '../../declarations';
export interface StyledModalProps {
  headerStyle?: string;
  hasBoxShadow?: boolean;
  contentPadding?: string;
  height?: CSSProperties['height'];
  windowSize?: string;
}

export interface StyledModalWithStatusProps extends StyledModalProps {
  status?: GlobalStatus;
}

export type HeaderAction = {
  icon: string;
  onClick: DOMAttributes<any>['onClick'];
  tooltip: string;
};

export type WindowSize =
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'fullscreen';
