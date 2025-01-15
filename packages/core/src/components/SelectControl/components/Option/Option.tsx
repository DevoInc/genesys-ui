import * as React from 'react';
import { components, type OptionProps as RSOptionProps } from 'react-select';

import type { TSelectOption } from '../../declarations';
import { CheckboxControl } from '../../../CheckboxControl';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Divider } from '../../../Divider';
import { Typography } from '../../../Typography';

export interface OptionProps<Option> extends RSOptionProps<Option> {}

export const Option = <Option extends TSelectOption>(
  props: OptionProps<Option>,
): React.ReactElement<OptionProps<Option>> =>
  props.data.isSeparator ? (
    <Divider margin="cmp-xs 0" />
  ) : (
    <components.Option {...props}>
      <HFlex spacing="cmp-xs">
        {props.selectProps.multipleSubtle && (
          <CheckboxControl
            onChange={() => true}
            checked={props.isSelected}
            aria-label="Selected option marker"
            style={{ flex: '0 0 auto' }}
          />
        )}
        {!props.data.icon && !props.data.prependContent ? (
          <Typography.Paragraph as="div" truncateLine={1}>
            {props.data.label}
          </Typography.Paragraph>
        ) : (
          <HFlex spacing="cmp-xxs">
            {props.data.prependContent}
            {props.data.icon && <Icon size="xs">{props.data.icon}</Icon>}
            <Typography.Paragraph as="div" truncateLine={1}>
              {props.data.label}
            </Typography.Paragraph>
          </HFlex>
        )}
      </HFlex>
    </components.Option>
  );
