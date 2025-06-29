import * as React from 'react';

import { PanelContext } from '../../context';
import type { IPanelFooterAttrs } from './declarations';
import type {
  IPanelBaseAttrs,
  IPanelHelpAttrs,
  IPanelSpaceAttrs,
} from '../../declarations';
import {
  PanelFooterActions,
  PanelFooterContainer,
  PanelFooterHelp,
} from './components';
import { Typography } from '../../../Typography';

export interface PanelFooterProps
  extends IPanelBaseAttrs,
    IPanelFooterAttrs,
    IPanelHelpAttrs,
    IPanelSpaceAttrs {}

export const InternalPanelFooter = React.forwardRef<
  HTMLElement,
  PanelFooterProps
>(
  (
    {
      actions,
      as = 'footer',
      bordered = false,
      children,
      hasBackground = false,
      hasBoxShadow,
      helpTooltip = 'Go to Docs to get help',
      helpUrl,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      removeSpace,
      size,
      style,
    },
    ref,
  ) => {
    const context = React.useContext(PanelContext);
    const evalSize = size || context.size || 'md';
    return (
      <PanelFooterContainer
        ref={ref}
        as={as}
        customContent={Boolean(children)}
        hasBoxShadow={hasBoxShadow ?? context.scrolledBodyContent}
        hasBackground={hasBackground}
        bordered={bordered}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        removeSpace={removeSpace}
        style={style}
        size={evalSize}
      >
        {children ? (
          typeof children === 'string' ? (
            <Typography.Paragraph size={evalSize}>
              {children}
            </Typography.Paragraph>
          ) : (
            children
          )
        ) : (
          <>
            {helpUrl && (
              <PanelFooterHelp
                size={evalSize}
                helpUrl={helpUrl}
                helpTooltip={helpTooltip}
              />
            )}
            {actions && (
              <PanelFooterActions actions={actions} size={evalSize} />
            )}
          </>
        )}
      </PanelFooterContainer>
    );
  },
);

export const PanelFooter = InternalPanelFooter as typeof InternalPanelFooter & {
  _Container: typeof PanelFooterContainer;
  _Help: typeof PanelFooterHelp;
  _Actions: typeof PanelFooterActions;
};

PanelFooter._Container = PanelFooterContainer;
PanelFooter._Help = PanelFooterHelp;
PanelFooter._Actions = PanelFooterActions;

InternalPanelFooter.displayName = 'Panel.Footer';
PanelFooter._Container.displayName = 'Panel.Footer._Container';
PanelFooter._Help.displayName = 'Panel.Footer._Help';
PanelFooter._Actions.displayName = 'Panel.Footer._Actions';
