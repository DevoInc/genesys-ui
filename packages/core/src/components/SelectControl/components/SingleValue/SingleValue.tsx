import * as React from 'react';
import {
  components,
  type SingleValueProps as RSSingleValueProps,
} from 'react-select';

import type { TSelectOption } from '../../declarations';
import { getValueIconSize } from '../../utils';
import { HFlex } from '../../../HFlex';
import { ValueIcon } from '../ValueIcon';

export interface SingleValueProps<Option> extends RSSingleValueProps<Option> {}

export const SingleValue = <Option extends TSelectOption>(
  props: SingleValueProps<Option>,
): React.ReactElement<SingleValueProps<Option>> =>
  components.SingleValue && (
    <components.SingleValue {...props}>
      <HFlex spacing="cmp-xxs">
        {props.data.prependContent}
        {props.data.icon && (
          <ValueIcon
            strong={props.data.bold}
            size={getValueIconSize({
              size: props.selectProps.size,
            })}
          >
            {props.data.icon}
          </ValueIcon>
        )}
        {props.data.label}
      </HFlex>
    </components.SingleValue>
  );
