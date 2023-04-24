import { css, CSSProp } from 'styled-components';

import { InputProps } from '@devoinc/genesys-ui-form';
import { DateTimeRangeProps } from '../../DateTimeRange';

export interface CssDateTimeRangeControlInputProps
  extends Pick<InputProps, 'size' | 'status'>,
    Pick<DateTimeRangeProps, 'hasMillis' | 'hasSeconds' | 'hasTime'> {}

export const cssDateTimeRangeControlInput = ({
  size,
  status,
}: CssDateTimeRangeControlInputProps): CSSProp => {
  const hasStatus = status && status !== 'base';
  return css`
    ${({ theme }) => {
      const fieldTokens = theme.alias.fields;
      const rangeControlInputTokens = theme.cmp.dateTimeRangeControl.input;
      return css`
        border: ${!hasStatus && 'none'};
        height: ${rangeControlInputTokens.size.height[size]};
        padding: ${rangeControlInputTokens.space.padding[size]};

        &:focus {
          box-shadow: inset ${fieldTokens.elevation.boxShadow[status].focused};
        }
      `;
    }};
  `;
};
