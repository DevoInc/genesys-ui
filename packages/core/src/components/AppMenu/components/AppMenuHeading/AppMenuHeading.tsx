import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TAppMenuCollapsed } from '../../declarations';
import { AppMenuContext } from '../../context';
import { appMenuHeadingSlice, appMenuHeadingTextMixin } from './helpers';
import { Typography } from '../../../Typography';
import { StyledAppMenuHeading } from './StyledAppMenuHeading';

export interface AppMenuHeadingProps {
  /** If the AppMenu is collapsed. */
  collapsed?: TAppMenuCollapsed;
  /** The text content for the menu heading when the menu is collapsed. */
  collapsedText?: string;
  /** The text content for the menu heading. */
  text?: string;
}

export const AppMenuHeading: React.FC<AppMenuHeadingProps> = ({
  collapsed,
  collapsedText,
  text,
}) => {
  const theme = useTheme();
  const context = React.useContext(AppMenuContext);
  const evalCollapsed = collapsed ?? context.collapsed;
  return (
    <>
      <StyledAppMenuHeading $collapsed={evalCollapsed}>
        <Typography.Heading
          size="overline-sm"
          style={appMenuHeadingTextMixin({ collapsed: evalCollapsed, theme })}
        >
          {evalCollapsed ? collapsedText || appMenuHeadingSlice(text) : text}
        </Typography.Heading>
      </StyledAppMenuHeading>
    </>
  );
};
