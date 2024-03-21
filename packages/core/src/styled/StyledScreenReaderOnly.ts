import styled from 'styled-components';

import { srOnlyMixin } from './mixins/screenReader';

export const StyledScreenReadersOnly = styled.span`
  ${srOnlyMixin};
`;
