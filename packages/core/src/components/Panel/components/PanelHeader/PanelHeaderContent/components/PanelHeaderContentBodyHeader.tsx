import * as React from 'react';

import { Typography } from '../../../../..';

import {
  PanelHeaderContentBodySubtitle,
  PanelHeaderContentBodyHeaderTitle,
  PanelHeaderContentBodyHeaderTitleProps,
} from './PanelHeaderContentBodyHeaderTitle';

import {
  StyledPanelHeaderContentHgroup,
  StyledPanelHeaderContentIcon,
  StyledPanelHeaderContentBodyHeader,
} from './StyledPanelHeaderContentBody';

export interface PanelHeaderContentBodyHeaderProps
  extends Omit<PanelHeaderContentBodyHeaderTitleProps, 'children'> {
  children?: React.ReactNode;
  icon?: string;
  subtitle?: string;
  title?: React.ReactNode;
}

export const PanelHeaderContentBodyHeader: React.FC<
  PanelHeaderContentBodyHeaderProps
> = ({
  children,
  helpTooltip,
  helpUrl,
  icon,
  legend,
  size,
  subtitle,
  title,
  titleTooltip,
}) => (
  <StyledPanelHeaderContentBodyHeader>
    {children ? (
      typeof children === 'string' ? (
        <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
      ) : (
        children
      )
    ) : (
      <>
        {icon && <StyledPanelHeaderContentIcon icon={icon} size={size} />}
        {title && subtitle ? (
          <StyledPanelHeaderContentHgroup>
            <PanelHeaderContentBodyHeaderTitle
              helpTooltip={helpTooltip}
              helpUrl={helpUrl}
              legend={legend}
              size={size}
              titleTooltip={titleTooltip}
            >
              {title}
            </PanelHeaderContentBodyHeaderTitle>
            <PanelHeaderContentBodySubtitle size={size}>
              {subtitle}
            </PanelHeaderContentBodySubtitle>
          </StyledPanelHeaderContentHgroup>
        ) : title ? (
          <PanelHeaderContentBodyHeaderTitle
            helpTooltip={helpTooltip}
            helpUrl={helpUrl}
            legend={legend}
            size={size}
          >
            {title}
          </PanelHeaderContentBodyHeaderTitle>
        ) : subtitle ? (
          <PanelHeaderContentBodySubtitle size={size}>
            {subtitle}
          </PanelHeaderContentBodySubtitle>
        ) : null}
      </>
    )}
  </StyledPanelHeaderContentBodyHeader>
);
