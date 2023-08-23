import * as React from 'react';

import { StyledTableCellRendererText } from './StyledCellRendererText';

interface TextProps {
  value: any;
}

export const RenderCellContentText: React.FC<TextProps> = ({ value }) => (
  <StyledTableCellRendererText>{value.toString()}</StyledTableCellRendererText>
);
