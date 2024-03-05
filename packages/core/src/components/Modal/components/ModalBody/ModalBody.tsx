import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import type { ILayoutBoxCss } from '../../../../declarations';
import { PanelContext } from '../../../Panel/context';
import { modalBodyMixin } from './mixins';
import { Panel, type PanelBodyProps } from '../../../Panel';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalBodyProps
  extends PanelBodyProps,
    Pick<ILayoutBoxCss, 'padding'> {}

export const ModalBody: React.FC<ModalBodyProps> = ({
  padding,
  children,
  styles,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  return (
    <Panel.Body
      styles={concat(
        modalBodyMixin({
          theme,
          padding,
          scrolledBodyContent: context.scrolledBodyContent,
        }),
        styles,
      )}
    >
      {children}
    </Panel.Body>
  );
};
