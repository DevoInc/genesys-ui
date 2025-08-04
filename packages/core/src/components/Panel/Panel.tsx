import * as React from 'react';

import type { TPanelSize } from './declarations';
import { PANEL_CLASS_NAME_BASE } from './constants';
import { useIsOverflow } from '../../hooks';
import { PanelContext } from './context';
import {
  getBasedCssVariablesStyle,
  getVariableBasedClassNames,
} from '../../helpers';
import { Box, type BoxProps } from '../Box';
import {
  PanelBody,
  PanelFooter,
  PanelHeader,
  type PanelFooterProps,
  type PanelHeaderProps,
} from './components';

export interface PanelProps extends BoxProps {
  bordered?: boolean;
  children?:
    | [
        React.ReactElement<PanelHeaderProps>,
        React.ReactNode,
        React.ReactElement<PanelFooterProps>,
      ]
    | [React.ReactElement<PanelHeaderProps>, React.ReactNode]
    | React.ReactNode;
  colorScheme?: React.CSSProperties['backgroundColor'];
  removeContentSpace?: boolean;
  /** Set size for Panel components */
  size?: TPanelSize;
}

const InternalPanel = React.forwardRef<HTMLElement, PanelProps>(
  (
    {
      bordered,
      className,
      colorScheme,
      display,
      elevation = 'raised',
      size = 'md',
      children,
      removeContentSpace,
      style,
      ...restBoxProps
    },
    ref,
  ) => {
    const targetElRef = React.useRef<HTMLDivElement>(null);
    const { hasScroll } = useIsOverflow(targetElRef);
    const classNameBase = PANEL_CLASS_NAME_BASE;
    const classNames = [
      `${classNameBase} `,
      bordered ? `${classNameBase}--bordered ` : '',
      elevation ? `${classNameBase}--${elevation} ` : '',
      size ? `${classNameBase}--${size} ` : '',
      className ? `${className} ` : '',
      ...getVariableBasedClassNames(
        {
          backgroundColor: colorScheme,
        },
        'before',
      ),
    ]
      .join('')
      .trim();
    const basedCssVariablesStyle = getBasedCssVariablesStyle({
      backgroundColor: colorScheme,
    });
    return (
      <Box
        {...restBoxProps}
        ref={ref}
        className={classNames}
        elevation={elevation}
        style={{ ...basedCssVariablesStyle, ...style }}
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
