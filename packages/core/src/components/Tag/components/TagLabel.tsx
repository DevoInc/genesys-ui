import * as React from 'react';

import { StyledTagLabel } from './StyledTagLabel';
import { StyledOverloadCssProps } from '../../../declarations';

export interface TagLabelProps extends StyledOverloadCssProps {
  children?: React.ReactNode;
}

export const TagLabel: React.FC<TagLabelProps> = ({ children, styles }) => {
  return <StyledTagLabel css={styles}>{children}</StyledTagLabel>;
};
