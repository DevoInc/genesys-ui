import * as React from 'react';

import { IconButtonGoToDocs, Flex, Typography } from '../../../../';
import { HEADER_SIZES } from '../constants';
import {
  PanelHelpTooltip,
  PanelHelpUrl,
  PanelSize,
} from '../../../declarations';
import {
  StyledPanelHeaderContentBody,
  StyledPanelHeaderContentHgroup,
  StyledPanelHeaderContentIcon,
  StyledPanelHeaderContentLegend,
} from '../StyledPanelHeaderContent';

export interface PanelHeaderContentBodyProps {
  children?: React.ReactNode;
  helpTooltip: PanelHelpTooltip;
  helpUrl: PanelHelpUrl;
  icon: string;
  legend?: React.ReactNode;
  size?: PanelSize;
  subtitle?: string;
  title?: React.ReactNode;
}

export const PanelHeaderContentBody: React.FC<PanelHeaderContentBodyProps> = ({
  children,
  helpTooltip,
  helpUrl,
  icon,
  legend,
  size,
  subtitle,
  title,
}) => {
  const renderPanelHeaderHgroup = () => {
    const HeaderTitle = (
      <Typography.Heading truncateLine={2} size={HEADER_SIZES[size].title}>
        {title}
      </Typography.Heading>
    );
    const PanelHeaderTitle =
      !helpUrl && !legend ? (
        HeaderTitle
      ) : (
        <Flex alignItems="center" inline width="100%">
          {HeaderTitle}
          {helpUrl && (
            <StyledPanelHeaderContentLegend size={size}>
              <IconButtonGoToDocs
                href={helpUrl}
                size={size}
                title={helpTooltip}
              />
            </StyledPanelHeaderContentLegend>
          )}
          {legend && (
            <StyledPanelHeaderContentLegend size={size}>
              {legend}
            </StyledPanelHeaderContentLegend>
          )}
        </Flex>
      );

    const PanelHeaderSubtitle = subtitle && (
      <Typography.Paragraph
        colorScheme="weak"
        truncateLine={3}
        size={HEADER_SIZES[size].subtitle.size}
      >
        {subtitle}
      </Typography.Paragraph>
    );

    if (title && subtitle)
      return (
        <StyledPanelHeaderContentHgroup>
          {PanelHeaderTitle}
          {PanelHeaderSubtitle}
        </StyledPanelHeaderContentHgroup>
      );

    if (title) return PanelHeaderTitle;

    if (subtitle) return PanelHeaderSubtitle;

    return null;
  };

  if (children)
    return (
      <StyledPanelHeaderContentBody>
        {typeof children === 'string' ? (
          <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
        ) : (
          children
        )}
      </StyledPanelHeaderContentBody>
    );

  return (
    <StyledPanelHeaderContentBody>
      {icon && <StyledPanelHeaderContentIcon icon={icon} size={size} />}
      {renderPanelHeaderHgroup()}
    </StyledPanelHeaderContentBody>
  );
};
