import * as React from 'react';

import { Resolve } from '../../../../typeFunctions';
import { Panel, type PanelProps } from '../../../Panel';

interface PopoverPanelProps extends Omit<PanelProps, 'elevation'> {}

export const PopoverPanel = React.forwardRef<
  HTMLDivElement,
  Resolve<PopoverPanelProps>
>(
  (
    { children, padding, minWidth = '22rem', maxWidth, ...restPanelProps },
    ref,
  ) => {
    const hasComplexPanel = React.useMemo(() => {
      const childrenAsArray = Array.isArray(children) ? children : [children];
      return childrenAsArray.some((x) => {
        return React.isValidElement(x)
          ? ['PanelHeader', 'PanelBody'].includes(
              (x.type as React.FC).displayName,
            )
          : false;
      });
    }, [children]);
    return (
      <Panel
        {...restPanelProps}
        ref={ref}
        elevation="activated"
        padding={padding || (hasComplexPanel ? '0' : 'cmp-xxs')}
        maxWidth={maxWidth}
        minWidth={minWidth}
      >
        {children}
      </Panel>
    );
  },
);
