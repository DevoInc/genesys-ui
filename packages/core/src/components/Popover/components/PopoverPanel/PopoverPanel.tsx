import * as React from 'react';

import { Panel, type PanelProps } from '../../../Panel';

interface PopoverPanelProps extends Omit<PanelProps, 'elevation'> {}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  children,
  padding,
  minWidth = '22rem',
  maxWidth = '40rem',
  ...restPanelProps
}) => {
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
      elevation="activated"
      padding={padding || (hasComplexPanel ? '0' : 'cmp-xxs')}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      {children}
    </Panel>
  );
};
