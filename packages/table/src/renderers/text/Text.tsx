import * as React from 'react';
import { StyledText } from './StyledText';

interface TextProps {
  value: any;
  bold?: boolean;
}

export const TextRenderer = ({ value, bold }: TextProps) => (
  <StyledText bold={bold}>{value}</StyledText>
);
