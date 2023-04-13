import { css, CSSProp } from 'styled-components';
import { InputProps } from '@devoinc/genesys-ui-form';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface cssDateTimeRangeControlRTButtonProps
  extends Pick<InputProps, 'size'> {}

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
