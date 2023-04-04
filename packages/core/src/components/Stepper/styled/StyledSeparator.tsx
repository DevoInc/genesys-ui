import * as React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../../Icon';

export const StyledSeparator = styled((props) => (
  <Icon {...props} aria-label="Steps separator" iconId="arrow_right" />
))`
  ${({ theme }) => css`
    color: ${theme.cmp.stepper.separator.color.background};
    margin-right: ${theme.cmp.stepper.separator.space.marginHor};
  `};
`;
