import * as React from 'react';

import type { TAvatarColorScheme, TAvatarSize } from '../Avatar/declarations';
import { IKeyValue } from '../KeyValue/declarations';
import { IGlobalAttrs, TBaseSize } from '../../declarations';

export type TUserInfoSize = TBaseSize;
export type TUserInfoFormat = 'base' | 'heading' | 'bold';

export interface IUserInfo extends Pick<IGlobalAttrs, 'id' | 'tooltip'> {
  /** The children for the user info. */
  children?: React.ReactNode;
  /** The avatar image of the user. */
  avatar?: string;
  /** The pre-defined size of the Avatar which defines its width and height. */
  avatarSize?: TAvatarSize;
  /** The color scheme (info, neutral... etc.) of the avatar which will be visible if it's not defined the avatar image. */
  avatarColorScheme?: TAvatarColorScheme;
  /** The custom info blocks for the user: address, gender, ID... etc. */
  customInfo?: {
    supportingVisual: IKeyValue['supportingVisual'];
    key?: IKeyValue['keyContent'];
    value: IKeyValue['valueContent'];
  }[];
  /** The email of the user. */
  email?: string;
  /** The email key. */
  emailKey?: string;
  /** The format for the user info. */
  format?: TUserInfoFormat;
  /** The job/position of the user. */
  job?: string;
  /** The job key. */
  jobKey?: string;
  /** The complete name of the user. */
  name?: string;
  /** The phone number of the user. */
  phone?: string;
  /** The phone key. */
  phoneKey?: string;
  /** The role of the user. */
  role?: string;
  /** The role key. */
  roleKey?: string;
  /** The size of the user which affects to the typographic styles and the default avatar size.  */
  size?: TUserInfoSize;
  /** The content which will be rendered as subtitle below the name.  */
  subtitle?: React.ReactNode;
}
