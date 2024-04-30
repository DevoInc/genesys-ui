import { css, CSSProp } from 'styled-components';

import type { InputControlProps } from '@devoinc/genesys-ui';
import { ITime } from '../declarations';

export interface ICssDateTimeRangeInput
  extends Pick<InputControlProps, 'size' | 'status'>,
    Pick<ITime, 'hasMillis' | 'hasSeconds' | 'hasTime'> {}

export const cssDateTimeRangeInput = ({
  size,
  status,
}: ICssDateTimeRangeInput): CSSProp => {
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
