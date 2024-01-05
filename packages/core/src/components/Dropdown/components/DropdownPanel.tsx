import * as React from 'react';
import { Panel } from '../../../components';
import { PanelContainerProps } from '../../Panel/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownPanelProps extends Omit<PanelContainerProps, 'elevation'> {}

export const DropdownPanel: React.FC<DropdownPanelProps> = ({
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
