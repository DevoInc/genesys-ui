import * as React from 'react';
import {
  components,
  ContainerProps as DefaultSelectContainerProps,
} from 'react-select';
import { useTheme } from 'styled-components';

import { CommonSelectCmpsProps } from '../declarations';

import { Field, Flex } from '@devoinc/genesys-ui';

interface SelectContainerProps extends DefaultSelectContainerProps {
  id: any;
  selectProps: DefaultSelectContainerProps['selectProps'] &
    CommonSelectCmpsProps;
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
                  theme.tokens.alias.fields.size.width[
                    props.selectProps.selectWidth
                  ]
                }`
              : '1 1 100%'
          }
          position="relative"
          width={
            props.selectProps.selectWidth
              ? theme.tokens.alias.fields.size.width[
                  props.selectProps.selectWidth
                ]
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
