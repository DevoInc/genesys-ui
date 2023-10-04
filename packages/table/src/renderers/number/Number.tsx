import * as React from 'react';
import { StyledNumber } from './StyledNumber';

interface TextProps {
  value: any;
}

export const NumberRenderer: React.FC<TextProps> = ({ value }) => (
  <StyledNumber>{value}</StyledNumber>
);
