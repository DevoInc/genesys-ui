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
}

export const Col = React.forwardRef<HTMLElement, Resolve<ColProps>>(
  ({ as, alignSelf, children, style, tooltip, ...reactGridColProps }, ref) => (
    <ReactGridCol
      {...reactGridColProps}
      ref={
        ref as React.LegacyRef<HTMLDivElement> & React.LegacyRef<ReactGridCol>
      }
      component={as}
      style={{ ...style, alignSelf: alignSelf }}
      title={tooltip}
    >
      {children}
    </ReactGridCol>
  ),
);
