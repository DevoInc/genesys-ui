import { css, CSSProp } from 'styled-components';

import type { InputControlProps } from '@devoinc/genesys-ui';
import type { DateTimeRangeProps } from '../DateTimeRange';

export interface ICssDateTimeRangeControlInput
  extends Pick<InputControlProps, 'size' | 'status'>,
    Pick<DateTimeRangeProps, 'hasMillis' | 'hasSeconds' | 'hasTime'> {}

export const cssDateTimeRangeControlInput = ({
  size,
  status,
}: ICssDateTimeRangeControlInput): CSSProp => {
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
