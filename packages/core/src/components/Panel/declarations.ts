import * as React from 'react';

import { ButtonProps, IconButtonProps } from '../';
import { GlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export interface HeaderSettingsProps {
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  bordered?: boolean;
  renderContent?: React.ReactNode;
  hasBoxShadow?: boolean;
}

export interface FooterSettingsProps {
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  /** Apply border at the top of the footer */
  bordered?: boolean;
  /** Configuration for the footer content */
  renderContent?: React.ReactNode;
  /** Apply the background color to the footer */
  hasBackground?: boolean;
  /** Apply box-shadow to the footer */
  hasBoxShadow?: boolean;
}

export interface BodySettingsProps {
  removeSpace?: boolean;
}

export type PanelSize = PickUnion<GlobalSize, 'xs' | 'sm' | 'md'>;
