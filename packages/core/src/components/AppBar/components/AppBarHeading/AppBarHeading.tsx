import * as React from 'react';

import type {
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { Typography } from '../../../Typography';

export interface AppBarHeadingProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    Pick<IGlobalAttrs, 'id'> {
  /** Heading content */
  children: React.ReactNode;
}

export const AppBarHeading: React.FC<AppBarHeadingProps> = ({
  as,
  children,
  id,
  style,
}) => (
  <Typography.Heading
    as={as}
    id={id}
    style={style}
    colorScheme="weak"
    size="overline-md"
  >
    {children}
  </Typography.Heading>
);
