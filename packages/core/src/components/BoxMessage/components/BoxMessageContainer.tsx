import * as React from 'react';

import {
  ActiveStatus,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

import { StyledBoxMessage } from '../StyledBoxMessage';

export interface BoxMessageContainerProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  children: React.ReactNode;
  status?: ActiveStatus;
}

export const BoxMessageContainer: React.FC<BoxMessageContainerProps> = ({
  as,
  children,
  className,
  id,
  role,
  status,
  styles,
  tooltip,
  ...ariaProps
}) => (
  <StyledBoxMessage
    {...ariaProps}
    as={as}
    className={className}
    css={styles}
    id={id}
    role={role}
    status={status}
    title={tooltip}
  >
    {children}
  </StyledBoxMessage>
);
