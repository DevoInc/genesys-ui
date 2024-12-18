import * as React from 'react';
import { useTheme } from 'styled-components';

import { useIsOverflow } from '../../hooks';
import type { TPanelSize } from './declarations';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { PanelContext } from './context';
import { panelMixin, type PanelMixinProps } from './helpers';
import { Box, type BoxProps } from '../Box';
import {
  PanelBody,
  PanelFooter,
  PanelHeader,
  type PanelFooterProps,
  type PanelHeaderProps,
} from './components';
import { mergeStyles } from '../../helpers';
import type { Resolve } from '../../typeFunctions';

export interface PanelProps
  extends BoxProps,
    IStyledOverloadCss,
    IStyledPolymorphic,
    Omit<PanelMixinProps, 'theme'> {
  children?:
    | [
        React.ReactElement<PanelHeaderProps>,
        React.ReactNode,
        React.ReactElement<PanelFooterProps>,
      ]
    | [React.ReactElement<PanelHeaderProps>, React.ReactNode]
    | React.ReactNode;
  removeContentSpace?: boolean;
  /** Set size for Panel components */
  size?: TPanelSize;
}

const InternalPanel: React.FC<Resolve<PanelProps>> = ({
  bordered,
  colorScheme,
  display,
  elevation = 'raised',
  style,
  size = 'md',
  children,
  removeContentSpace,
  ...restBoxProps
}) => {
  const theme = useTheme();
  const targetElRef = React.useRef<HTMLDivElement>(null);
  const { hasScroll } = useIsOverflow(targetElRef);
  return (
    <Box
      {...restBoxProps}
      elevation={elevation}
      style={mergeStyles(
        panelMixin(theme)({
          bordered,
          colorScheme,
          display,
          elevation,
        }),
        style,
      )}
    >
      <PanelContext.Provider
        value={{
          scrolledBodyContent: hasScroll,
          size,
          bodyRef: targetElRef,
          removeContentSpace,
        }}
      >
        {children}
      </PanelContext.Provider>
    </Box>
  );
};

export const Panel = InternalPanel as typeof InternalPanel & {
  Header: typeof PanelHeader;
  Body: typeof PanelBody;
  Footer: typeof PanelFooter;
};

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

InternalPanel.displayName = 'Panel';
Panel.Header.displayName = 'Panel.Header';
Panel.Body.displayName = 'Panel.Body';
Panel.Footer.displayName = 'Panel.Footer';
