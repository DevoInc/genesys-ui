import * as React from 'react';

import {
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Typography } from '../../../Typography';

export interface AppBarHeadingProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<GlobalAttrProps, 'id'> {
  /** Heading content */
  children: React.ReactNode;
}

export const AppBarHeading: React.FC<AppBarHeadingProps> = ({
  as,
  children,
  id,
  styles,
}) => (
  <Typography.Heading
    as={as}
    id={id}
    styles={styles}
    colorScheme="weak"
    size="overline-md"
  >
    {children}
  </Typography.Heading>
);
