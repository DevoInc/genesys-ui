import * as React from 'react';
import styled from 'styled-components';
import { Col, ColProps } from 'react-grid-system';

export interface StyledColProps extends ColProps {
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  $alignSelf?: React.CSSProperties['alignSelf'];
}

export const StyledCol = styled(Col)<StyledColProps>`
  ${({ $alignSelf }) => `
    align-self: ${$alignSelf};
  `};
`;
