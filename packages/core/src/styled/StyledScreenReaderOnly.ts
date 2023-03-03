import styled from 'styled-components';

import { srOnlyMixin } from './mixins/utilsMixins';

export const StyledScreenReadersOnly = styled.span`
  ${srOnlyMixin};
`;
