import * as React from 'react';
import { components, ContainerProps as RSContainerProps } from 'react-select';
import { useTheme } from 'styled-components';

import { SelectControlContext } from '../context';

import type { SelectOption } from '../declarations';
import { Field } from '../../Field';
import { Flex } from '../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContainerProps extends RSContainerProps {}

export const SelectContainer: React.FC<ContainerProps> = (props) => {
  const theme = useTheme();
  return (
    <components.SelectContainer {...props}>
      <Flex position="relative">
        {props.selectProps.addonToLeft && (
          <Field._Addon size={props.selectProps.size}>
            {props.selectProps.addonToLeft}
          </Field._Addon>
        )}
        <Flex
          flexDirection="column"
          flex={
            props.selectProps.selectWidth
              ? `0 1 ${
                  theme.alias.fields.size.width[props.selectProps.selectWidth]
                }`
              : '1 1 100%'
          }
          position="relative"
          width={
            props.selectProps.selectWidth
              ? theme.alias.fields.size.width[props.selectProps.selectWidth]
              : '100%'
          }
        >
          <SelectControlContext.Provider
            value={{
              size: props.selectProps.size ?? 'md',
              values: props.getValue() as SelectOption[],
              options: props.selectProps.options as SelectOption[],
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
