import * as React from 'react';
import { Panel, PanelProps } from '../../../components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopoverPanelProps extends Omit<PanelProps, 'elevation'> {}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  children,
  padding,
  width = '20rem',
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
      width={width}
    >
      {children}
    </Panel>
  );
};
