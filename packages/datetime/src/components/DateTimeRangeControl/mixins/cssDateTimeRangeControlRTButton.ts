import { css, CSSProp } from 'styled-components';

import { InputControlProps } from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface cssDateTimeRangeControlRTButtonProps
  extends Pick<InputControlProps, 'size'> {}

export const cssDateTimeRangeControlRTButton: CSSProp = css`
  ${({ size }: cssDateTimeRangeControlRTButtonProps): CSSProp => {
  return css`
      ${({ theme }) => {
    const RTButtonTokens = theme.cmp.dateTimeRangeControl.realTimeButton;
    const buttonSquare = RTButtonTokens.size.square[size];
    const buttonIconSize = RTButtonTokens.typo.fontSize[size];
    return css`
          width: ${buttonSquare};
          height: ${buttonSquare};

          i {
            font-size: ${buttonIconSize};
            width: ${buttonIconSize};
          }
        `;
  }}
    `;
}}
`;
