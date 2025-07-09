import * as React from 'react';
import {
  Col as ReactGridCol,
  ColProps as ReactGridColProps,
} from 'react-grid-system';

import type { TFluidAs } from '../declarations';
import type { IGlobalAttrs } from '../../../declarations';
import type { Resolve } from '../../../typeFunctions';
import { COL_CLASS_NAME_BASE } from '../constants';

export interface ColProps
  extends Omit<ReactGridColProps, 'component'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  /** The HTML tag used to render the component: aside, section, span... etc. It's used a 'div' by default. */
  as?: TFluidAs;
  alignSelf?: React.CSSProperties['alignSelf'];
  children?: React.ReactNode;
}

export const Col = React.forwardRef<HTMLElement, Resolve<ColProps>>(
  (
    {
      as,
      alignSelf,
      children,
      className,
      style,
      tooltip,
      ...reactGridColProps
    },
    ref,
  ) => (
    <ReactGridCol
      {...reactGridColProps}
      className={[`${COL_CLASS_NAME_BASE} `, className ? `${className} ` : '']
        .join('')
        .trim()}
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
