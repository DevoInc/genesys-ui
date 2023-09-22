import * as React from 'react';
import { StyledTableCellRendererText } from '../Cell/renderers/text/StyledCellRendererText';

interface TextProps {
  value: any;
  bold?: boolean;
}

export const RenderCellContentText: React.FC<TextProps> = ({ value, bold }) => (
  <StyledTableCellRendererText bold={bold}>
    {value.toString()}
  </StyledTableCellRendererText>
);
