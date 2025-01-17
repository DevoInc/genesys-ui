import * as React from 'react';
import { components, type OptionProps as RSOptionProps } from 'react-select';

import type { TSelectOption } from '../../declarations';
import { CheckboxControl } from '../../../CheckboxControl';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Divider } from '../../../Divider';
import { Typography } from '../../../Typography';
import { VFlex } from '../../../VFlex';
import { useTheme } from 'styled-components';

export interface OptionProps<Option> extends RSOptionProps<Option> {}

export const Option = <Option extends TSelectOption>(
  props: OptionProps<Option>,
): React.ReactElement<OptionProps<Option>> => {
  const checkboxHeight = useTheme().alias.typo.lineHeight.body.md;
  return props.data.isSeparator ? (
    <Divider margin="cmp-xs 0" />
  ) : (
    <components.Option {...props}>
      <HFlex
        alignItems="flex-start"
        spacing="cmp-xs"
        minWidth="0"
        tooltip={props.data.tooltip}
      >
        {props.selectProps.multipleSubtle && (
          <HFlex height={checkboxHeight}>
            <CheckboxControl
              onChange={() => true}
              checked={props.isSelected}
              aria-label="Selected option marker"
              style={{ flex: '0 0 auto' }}
            />
          </HFlex>
        )}
        {!props.data.icon && !props.data.prependContent ? (
          <VFlex spacing="0">
            <Typography.Paragraph as="div" truncateLine={1}>
              {props.data.label}
            </Typography.Paragraph>
            <Typography.Paragraph
              as="div"
              size="sm"
              colorScheme="weaker"
              truncateLine={1}
            >
              {props.data.description}
            </Typography.Paragraph>
          </VFlex>
        ) : (
          <HFlex spacing="cmp-xxs">
            {props.data.prependContent}
            {props.data.icon && <Icon size="xs">{props.data.icon}</Icon>}
            <VFlex spacing="0">
              <Typography.Paragraph as="div" truncateLine={1}>
                {props.data.label}
              </Typography.Paragraph>
              <Typography.Paragraph
                as="div"
                size="sm"
                colorScheme="weaker"
                truncateLine={1}
              >
                {props.data.description}
              </Typography.Paragraph>
            </VFlex>
          </HFlex>
        )}
      </HFlex>
    </components.Option>
  );
};
