import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { useDetectScroll } from '../../hooks';

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

const InternalPanel = React.forwardRef<HTMLElement, PanelProps>(
  (
    {
      bordered,
      colorScheme,
      display,
      elevation = 'raised',
      styles,
      size = 'md',
      children,
      ...restBoxProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const { hasScroll, targetElRef } = useDetectScroll();
    return (
      <Box
        {...restBoxProps}
        ref={ref}
        elevation={elevation}
        styles={concat(
          panelMixin({
            bordered,
            colorScheme,
            display,
            elevation,
            theme,
          }),
          styles,
        )}
      >
        <PanelContext.Provider
          value={{ scrolledBodyContent: hasScroll, size, bodyRef: targetElRef }}
        >
          {children}
        </PanelContext.Provider>
      </Box>
    );
  },
);

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
