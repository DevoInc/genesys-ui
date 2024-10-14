import * as React from 'react';
import {
  components,
  type ContainerProps as RSContainerProps,
} from 'react-select';
import { useTheme } from 'styled-components';

import { SelectControlContext } from '../../context';
import type { TSelectOption } from '../../declarations';
import { Field } from '../../../Field';
import { Flex } from '../../../Flex';

export interface ContainerProps extends RSContainerProps {}

export const SelectContainer: React.FC<ContainerProps> = (props) => {
  const theme = useTheme();
  const cmpTokens = theme.cmp.selectControl;
  const filteredDataProps = Object.fromEntries(
    Object.entries(props.selectProps).filter((x) => x[0].includes('data-')),
  );
  return (
    <components.SelectContainer {...props}>
      <Flex position="relative" {...filteredDataProps}>
        {props.selectProps.addonToLeft && (
          <Field._Addon size={props.selectProps.size}>
            {props.selectProps.addonToLeft}
          </Field._Addon>
        )}
        <Flex
          flexDirection="column"
          flex={
            props.selectProps.selectWidth
              ? `0 1 ${cmpTokens.size.width[props.selectProps.selectWidth]}`
              : '1 1 100%'
          }
          position="relative"
          width={
            props.selectProps.selectWidth
              ? cmpTokens.size.width[props.selectProps.selectWidth]
              : '100%'
          }
        >
          <SelectControlContext.Provider
            value={{
              size: props.selectProps.size ?? 'md',
              values: props.getValue() as TSelectOption[],
              options: props.selectProps.options as TSelectOption[],
            }}
          >
            {props.children}
          </SelectControlContext.Provider>
        </Flex>
        {props.selectProps.addonToRight && (
          <Field._Addon position="right" size={props.selectProps.size}>
            {props.selectProps.addonToRight}
          </Field._Addon>
        )}
      </Flex>
    </components.SelectContainer>
  );
};
