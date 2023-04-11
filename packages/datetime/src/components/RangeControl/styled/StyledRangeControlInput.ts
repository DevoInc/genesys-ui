import styled, { css } from 'styled-components';
import { Input, InputProps } from '@devoinc/genesys-ui-form';
import { FIEL } from '@devoinc/genesys-ui';
import { DateTimeRangeProps } from '../../DateTimeRange';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledRangeControlInputProps
  extends Pick<InputProps, 'status'>,
    Pick<DateTimeRangeProps, 'hasMillis' | 'hasSeconds' | 'hasTime'> {}

export const StyledRangeControlInput = styled(Input).attrs(({ theme }) => ({
  buttonTokens: theme.cmp.button,
  fieldTokens: theme.alias.fields,
  rangeControlInputTokens: theme.cmp.rangeInput.input,
}))<StyledRangeControlInputProps>`
  ${({
    hasMillis,
    hasSeconds,
    hasTime,
    fieldTokens,
    rangeControlInputTokens,
    size,
    status,
  }) => {
    const hasStatus = status && status !== 'base';
    const baseWidth =
      rangeControlInputTokens.size.width[
        hasMillis
          ? 'withMillis'
          : hasSeconds
          ? 'withSeconds'
          : hasTime
          ? 'withTime'
          : 'base'
      ][size];
    const floatingHelperSpace = '';
    return css`
      background-color: red !important;
      border: ${!hasStatus && 'none'};
      height: ${rangeControlInputTokens.size.height[size]};
      width: ${hasStatus ? `calc(${baseWidth} - 2.4rem)` : baseWidth};
      padding: ${rangeControlInputTokens.space.padding[size]};

      &:focus {
        box-shadow: inset ${fieldTokens.elevation.boxShadow[status].focused};
      }

      & + span {
        display: none;
      }
    `;
  }};
`;
