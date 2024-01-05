import * as React from 'react';
import { Panel } from '../../../components';
import { PanelContainerProps } from '../../Panel/components';

interface DropdownPanelProps extends Omit<PanelContainerProps, 'elevation'> {}

export const DropdownPanel: React.FC<DropdownPanelProps> = ({
  padding = 'cmp-xxs',
  children,
  width = '20rem',
  ...restPanelContainerProps
}) => (
  <Panel.Container
    {...restPanelContainerProps}
    width={width}
    padding={padding}
    elevation="activated"
  >
    {children}
  </Panel.Container>
);
