import * as React from 'react';

import {
  PanelFooterActions,
  PanelFooterActionsProps,
  PanelFooterContainer,
  PanelFooterContainerProps,
  PanelFooterHelp,
  PanelFooterHelpProps,
} from './components';

export interface PanelFooterProps
  extends PanelFooterContainerProps,
    PanelFooterHelpProps,
    PanelFooterActionsProps {
  children?: React.ReactNode;
}

export const InternalPanelFooter: React.FC<PanelFooterProps> = ({
  actions,
  as,
  bordered = false,
  children,
  hasBackground = false,
  hasBoxShadow = false,
  helpTooltip = 'Go to Docs to get help',
  helpUrl,
  removeSpace,
  size = 'md',
  styles,
}) => {
  return (
    <PanelFooterContainer
      as={as}
      hasBoxShadow={hasBoxShadow}
      hasBackground={hasBackground}
      bordered={bordered}
      removeSpace={removeSpace}
      styles={styles}
      size={size}
    >
      {children ? (
        children
      ) : (
        <>
          {helpUrl && (
            <PanelFooterHelp
              size={size}
              helpUrl={helpUrl}
              helpTooltip={helpTooltip}
            />
          )}
          {actions && <PanelFooterActions actions={actions} size={size} />}
        </>
      )}
    </PanelFooterContainer>
  );
};

export const PanelFooter = InternalPanelFooter as typeof InternalPanelFooter & {
  Container: typeof PanelFooterContainer;
  Help: typeof PanelFooterHelp;
  Actions: typeof PanelFooterActions;
};

PanelFooter.Container = PanelFooterContainer;
PanelFooter.Help = PanelFooterHelp;
PanelFooter.Actions = PanelFooterActions;
