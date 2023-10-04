import * as React from 'react';
import styled from 'styled-components';
import { TagGroup } from '@devoinc/genesys-ui';

export const StyledTags = styled((props) => <TagGroup {...props} />)`
  flex-wrap: nowrap;
`;
