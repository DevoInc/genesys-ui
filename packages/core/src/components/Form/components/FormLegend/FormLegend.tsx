import * as React from 'react';

import { Flex } from '../../../Flex';
import { Typography } from '../../../Typography';
import { Field, type FieldProps, type FieldLabelProps } from '../../../Field';
import { StyledFormLegendContainer } from './StyledFormLegendContainer';
import { IGlobalAttrs } from '../../../../declarations';

export interface FormLegendProps
  extends IGlobalAttrs,
    Pick<FieldProps, 'helper'>,
    Pick<FieldLabelProps, 'requiredMark'> {
  /** If it's rendered as a legend HTML tag. */
  asLegend?: boolean;
  /** If the form group legend has label format. Usually when the form group is
   * a checkbox or radio group. */
  hasLabelFormat?: boolean;
  /** The text of the legend. */
  text?: React.ReactNode;
  /** The children if we need a custom content. */
  children?: React.ReactNode;
  /** If the heading of the form group is hidden (always exists for
   * accessibility reasons). */
  srOnly?: boolean;
}

export const FormLegend: React.FC<FormLegendProps> = ({
  asLegend,
  children,
  text,
  hasLabelFormat = false,
  requiredMark,
  helper,
  srOnly = false,
  tooltip,
  ...styledProps
}) => (
  <StyledFormLegendContainer {...styledProps} $srOnly={srOnly} title={tooltip}>
    <Flex
      alignItems="center"
      role={!asLegend ? 'group' : null}
      as={asLegend ? 'legend' : null}
      margin="0"
      childrenFlex="1 1 auto"
      flex="1 1 auto"
    >
      {children ||
        (hasLabelFormat ? (
          <Field._Label helper={helper} requiredMark={requiredMark}>
            {text}
          </Field._Label>
        ) : (
          <Typography.Heading size="h6" truncateLine={2}>
            {requiredMark}
            {text}
            {helper}
          </Typography.Heading>
        ))}
    </Flex>
  </StyledFormLegendContainer>
);
