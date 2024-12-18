import * as React from 'react';
import {
  Col as ReactGridCol,
  ColProps as ReactGridColProps,
} from 'react-grid-system';

import type { TFluidAs } from '../declarations';
import type { IGlobalAttrs } from '../../../declarations';
import type { Resolve } from '../../../typeFunctions';

export interface ColProps
  extends Omit<ReactGridColProps, 'component'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  /** The HTML tag used to render the component: aside, section, span... etc. It's used a 'div' by default. */
  as?: TFluidAs;
  alignSelf?: React.CSSProperties['alignSelf'];
  children?: React.ReactNode;
  ref?: React.LegacyRef<ReactGridCol> & React.Ref<HTMLDivElement>;
}

export const Col: React.FC<Resolve<ColProps>> = ({
  as,
  alignSelf,
  children,
  style,
  tooltip,
  ...reactGridColProps
}) => (
  <ReactGridCol
    {...reactGridColProps}
    component={as}
    style={{ ...style, alignSelf: alignSelf }}
    title={tooltip}
  >
    {children}
  </ReactGridCol>
);
