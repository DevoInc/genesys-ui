import * as React from 'react';
import { Panel } from '../../../components';
import { PanelContainerProps } from '../../Panel/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopoverPanelProps extends Omit<PanelContainerProps, 'elevation'> {}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  children,
  padding,
  width = '20rem',
  ...restPanelContainerProps
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
    <Panel.Container
      {...restPanelContainerProps}
      elevation="activated"
      padding={padding || (hasComplexPanel ? '0' : 'cmp-xxs')}
      width={width}
    >
      {children}
    </Panel.Container>
  );
};
