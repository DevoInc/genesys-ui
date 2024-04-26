import * as React from 'react';
import { concat } from 'lodash';

import {
  FN_POSITION_DEFAULT_OFFSET_MAP,
  FN_POSITION_DEFAULT_VALUE,
  FN_STATUS_DEFAULT_VALUE,
} from './constants';
import type {
  TFloatingMessageOffset,
  TFloatingMessagePosition,
} from './declarations';
import { floatingNotificationMixin } from './mixins';

import { Helper, type HelperProps } from '../Helper';
import { Panel } from '../Panel';

export interface FloatingMessageProps extends Omit<HelperProps, 'size'> {
  /** The offset in pixels for the position of the notification. It's defined in an array of two values in which the first one is for the axis-x and the second one for the axis-y. */
  offset?: TFloatingMessageOffset;
  /** The position of the notification relative to its parent container (it should have position relative or absolute). It's positioned absolutely over the sibling and the prop defines the location by main side positions: left-top, left-center, center-center... etc.*/
  position?: TFloatingMessagePosition;
}

export const FloatingMessage: React.FC<FloatingMessageProps> = ({
  offset,
  position = FN_POSITION_DEFAULT_VALUE,
  role,
  status = FN_STATUS_DEFAULT_VALUE,
  styles,
  ...restHelperProps
}) => {
  const evalOffset = offset || FN_POSITION_DEFAULT_OFFSET_MAP[position];
  return (
    <Panel
      elevation="popOut"
      size="xs"
      styles={concat(
        floatingNotificationMixin({ offset: evalOffset, position }),
        styles,
      )}
    >
      <Panel.Body>
        <Helper
          {...restHelperProps}
          size="sm"
          role={role || (status === 'error' ? 'alert' : undefined)}
          status={status}
        />
      </Panel.Body>
    </Panel>
  );
};
