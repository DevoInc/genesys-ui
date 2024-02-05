import * as React from 'react';
import {
  components,
  SingleValueProps as RSSingleValueProps,
} from 'react-select';

import { SelectOption } from '../declarations';

import { getValueIconSize } from '../utils';

import { HFlex } from '../../HFlex';
import { ValueIcon } from './ValueIcon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SingleValueProps<Option> extends RSSingleValueProps<Option> {}

export const SingleValue = <Option extends SelectOption>(
  props: SingleValueProps<Option>,
): React.ReactElement<SingleValueProps<Option>> => {
  return (
    components.SingleValue && (
      <components.SingleValue {...props}>
        <HFlex spacing="cmp-xxs">
          {props.data.prependContent}
          {props.data.icon && (
            <ValueIcon
              iconId={props.data.icon}
              strong={props.data.bold}
              size={getValueIconSize({
                size: props.selectProps.size,
              })}
            />
          )}
          {props.data.label}
        </HFlex>
      </components.SingleValue>
    )
  );
};
