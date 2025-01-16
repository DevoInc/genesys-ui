import { css, CSSProp } from 'styled-components';

import type { InputControlProps } from '@devoinc/genesys-ui';
import { ITime } from '../../../declarations';

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
      const rangeControlTokens = theme.cmp.dateTimeRangeControl;
      const rangeControlInputTokens = rangeControlTokens.input;
      return css`
        border: ${!hasStatus && 'none'};
        height: ${rangeControlInputTokens.size.height[size]};
        padding: ${rangeControlInputTokens.space.padding[size]};

        ${hasStatus &&
        css`
          &:focus {
            box-shadow: inset
              ${rangeControlTokens.elevation.boxShadow[status].focused};
          }
        `}
      `;
    }};
  `;
};
