import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ILayoutBoxCss } from '../../../../declarations';
import { PanelContext } from '../../../Panel/context';
import { modalBodyMixin } from './mixins';
import { Panel, type PanelBodyProps } from '../../../Panel';
import { mergeStyles } from '../../../../helpers';

export interface ModalBodyProps
  extends PanelBodyProps,
    Pick<ILayoutBoxCss, 'padding'> {}

export const ModalBody: React.FC<ModalBodyProps> = ({
  padding,
  children,
  style,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  return (
    <Panel.Body
      style={mergeStyles(
        modalBodyMixin({
          theme,
          padding,
          scrolledBodyContent: context.scrolledBodyContent,
        }),
        style,
      )}
    >
      {children}
    </Panel.Body>
  );
};
