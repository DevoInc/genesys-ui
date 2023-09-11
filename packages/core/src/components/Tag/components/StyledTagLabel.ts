import styled from 'styled-components';

import { truncateTypoMixin } from '../../../styled';

export const StyledTagLabel = styled.span`
  ${() => truncateTypoMixin()};
`;
