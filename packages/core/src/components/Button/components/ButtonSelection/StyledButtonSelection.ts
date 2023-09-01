import styled from 'styled-components';

import { srOnlyMixin } from '../../../../styled/mixins';

export const StyledButtonSelection = styled.input`
  // hide the html element on screens, but not for screen readers
  ${srOnlyMixin};
`;
