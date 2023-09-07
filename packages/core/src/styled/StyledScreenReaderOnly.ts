import styled from 'styled-components';

import { srOnlyMixin } from './mixins';

export const StyledScreenReadersOnly = styled.span`
  ${srOnlyMixin};
`;
