import * as React from 'react';
import styled from 'styled-components';
import { TagGroup } from '@devoinc/genesys-ui';

export const StyledCellTagGroup = styled((props) => <TagGroup {...props} />)`
  flex-wrap: nowrap;
`;
