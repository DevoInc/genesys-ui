import * as React from 'react';
import type { TActiveStatus } from '../../declarations';

export type TBannerStatus = TActiveStatus;

export interface IBanner {
  /** The actions at the end of the Banner. We recommend to use the Banner.Button component because it inherits automatically some props from the parent. */
  actions?: React.ReactNode;
  /** To define the Banner based in internal components */
  children?: React.ReactNode;
  /** onClick function for close button */
  close?: React.MouseEventHandler;
  /** Tooltip for close button */
  closeTooltip?: string;
  /** Banner content */
  content?: React.ReactNode;
  /** This prop hides the Banner icon */
  hideIcon?: boolean;
  /** Banner title content */
  title?: React.ReactNode;
  status?: TBannerStatus;
  /** If it's true, the Banner acquires a look and feel less strong: no colored background, less padding, smaller font-size... etc. */
  subtle?: boolean;
}
