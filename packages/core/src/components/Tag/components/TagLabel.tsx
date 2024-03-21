import * as React from 'react';

import { StyledTagLabel } from './StyledTagLabel';
import { IStyledOverloadCss } from '../../../declarations';

export interface TagLabelProps extends IStyledOverloadCss {
  children?: React.ReactNode;
}

export const TagLabel: React.FC<TagLabelProps> = ({ children, styles }) => {
  return <StyledTagLabel css={styles}>{children}</StyledTagLabel>;
};
