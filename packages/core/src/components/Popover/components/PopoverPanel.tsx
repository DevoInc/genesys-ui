import * as React from 'react';
import { Panel } from '../../../components';
import { PanelContainerProps } from '../../Panel/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PopoverPanelProps extends Omit<PanelContainerProps, 'elevation'> {}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  children,
  padding = 'cmp-xxs',
  width = '20rem',
  ...restPanelContainerProps
}) => (
  <Panel.Container
    {...restPanelContainerProps}
    elevation="activated"
    padding={padding}
    width={width}
  >
    {children}
  </Panel.Container>
);
