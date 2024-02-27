import * as React from 'react';

import { Flex } from '../../Flex';
import type { FormGroupProps } from '../../Form/components';
import { Typography } from '../../Typography';
import { Field, type FieldProps, type FieldLabelProps } from '../../Field';

import {
  StyledFormLegendContainer,
  type StyledFormLegendContainerProps,
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
  tooltip,
  ...styledProps
}) => {
  return (
    <StyledFormLegendContainer {...styledProps} srOnly={srOnly} title={tooltip}>
      <Flex
        alignItems="center"
        role={!asLegend ? 'group' : null}
        as={asLegend ? 'legend' : null}
        margin="0"
      >
        {hasLabelFormat ? (
          <Field._Label helper={helper} requiredMark={requiredMark}>
            {text}
          </Field._Label>
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
