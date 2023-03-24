import * as React from 'react';
import {
  components,
  ContainerProps as DefaultSelectContainerProps,
} from 'react-select';
import { useTheme } from 'styled-components';

import { CustomSelectProps } from '../declarations';

import { Field, Flex } from '../../';

interface SelectContainerProps extends DefaultSelectContainerProps {
  id: any;
  selectProps: DefaultSelectContainerProps['selectProps'] & CustomSelectProps;
}

export const SelectContainer: React.FC<SelectContainerProps> = (props) => {
  const theme = useTheme();
  return (
    <components.SelectContainer {...props}>
      <Flex position="relative">
        {props.selectProps.addonToLeft && (
          <Field.Addon size={props.selectProps.size}>
            {props.selectProps.addonToLeft}
          </Field.Addon>
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
          {props.children}
        </Flex>
        {props.selectProps.addonToRight && (
          <Field.Addon position="right" size={props.selectProps.size}>
            {props.selectProps.addonToRight}
          </Field.Addon>
        )}
      </Flex>
    </components.SelectContainer>
  );
};
