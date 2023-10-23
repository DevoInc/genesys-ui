import styled, { css } from 'styled-components';

import { Box, BoxProps } from '@devoinc/genesys-ui';

export interface StyledContainerProps extends BoxProps {
  readOnly?: boolean;
  bordered?: boolean;
}

export const StyledContainer = styled(Box)<StyledContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ bordered, readOnly, theme }) =>
    bordered &&
    css`
      border-width: ${theme.alias.fields.shape.borderSize.base};
      border-style: solid;
      border-color: ${readOnly
        ? theme.alias.fields.color.background.base.readonly
        : theme.alias.fields.color.border.base.enabled};
      border-radius: ${theme.alias.fields.shape.borderRadius};
    `}
`;
