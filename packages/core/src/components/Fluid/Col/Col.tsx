import * as React from 'react';
import {
  Col as ReactGridCol,
  ColProps as ReactGridColProps,
} from 'react-grid-system';

import { FluidAs } from '../declarations';
import { GlobalAttrProps } from '../../../declarations';

export interface ColProps
  extends Omit<ReactGridColProps, 'component'>,
    Pick<GlobalAttrProps<HTMLDivElement>, 'tooltip'> {
  /** The HTML tag used to render the component: aside, section, span... etc. It's used a 'div' by default. */
  as?: FluidAs;
  alignSelf?: React.CSSProperties['alignSelf'];
  children?: React.ReactNode;
}

export const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ as, alignSelf, children, style, tooltip, ...reactGridColProps }, ref) => {
    return (
      <ReactGridCol
        {...reactGridColProps}
        component={as}
        ref={
          ref as React.LegacyRef<ReactGridCol> & React.LegacyRef<HTMLDivElement>
        }
        style={{ ...style, alignSelf: alignSelf }}
        title={tooltip}
      >
        {children}
      </ReactGridCol>
    );
  },
);

Col.displayName = 'Col';
