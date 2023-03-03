import * as React from 'react';

import { FieldProps, Flex } from '../../';

import { Typography, Field, FieldLabelProps, FormGroupProps } from '../../';

import {
  StyledFormLegendContainer,
  StyledFormLegendContainerProps,
} from './StyledFormLegendContainer';

export interface FormLegendProps
  extends StyledFormLegendContainerProps,
    Pick<FieldProps, 'helper'>,
    Pick<FieldLabelProps, 'requiredMark'>,
    Pick<FormGroupProps, 'legendPosition'> {
  /** If it's rendered as a legend HTML tag. */
  asLegend?: boolean;
  /** If the form group legend has label format. Usually when the form group is a checkbox or radio group. */
  hasLabelFormat?: boolean;
  /** The text of the legend. */
  text: string;
}

export const FormLegend: React.FC<FormLegendProps> = ({
  asLegend,
  text,
  hasLabelFormat = false,
  requiredMark,
  helper,
  srOnly = false,
  ...styledProps
}) => {
  return (
    <StyledFormLegendContainer {...styledProps} srOnly={srOnly}>
      <Flex
        alignItems="center"
        role={!asLegend ? 'group' : null}
        as={asLegend ? 'legend' : null}
        margin="0"
      >
        {hasLabelFormat ? (
          <Field.Label helper={helper} requiredMark={requiredMark}>
            {text}
          </Field.Label>
        ) : (
          <Typography.Heading as="span" size="h6">
            {requiredMark}
            {text}
            {helper}
          </Typography.Heading>
        )}
      </Flex>
    </StyledFormLegendContainer>
  );
};
