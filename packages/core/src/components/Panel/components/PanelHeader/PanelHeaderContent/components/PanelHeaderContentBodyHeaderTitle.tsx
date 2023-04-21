import * as React from 'react';

import { Flex, IconButtonGoToDocs, Typography } from '../../../../..';
import { HEADER_SIZES } from '../constants';

import { PanelHeaderSize } from '../../declarations';
import { StyledPanelHeaderContentLegend } from './StyledPanelContentBodyTitle';

export interface PanelHeaderContentBodyHeaderTitleProps {
  children: React.ReactNode;
  size: PanelHeaderSize;
  helpUrl?: string;
  legend?: React.ReactNode;
  helpTooltip?: string;
}

export const PanelHeaderContentBodyHeaderTitle: React.FC<
  PanelHeaderContentBodyHeaderTitleProps
> = ({ size, children, helpUrl, legend, helpTooltip }) =>
  !helpUrl && !legend ? (
    <Typography.Heading truncateLine={2} size={HEADER_SIZES[size].title}>
      {children}
    </Typography.Heading>
  ) : (
    <Flex alignItems="center" inline width="100%">
      <Typography.Heading truncateLine={2} size={HEADER_SIZES[size].title}>
        {children}
      </Typography.Heading>
      {helpUrl && (
        <StyledPanelHeaderContentLegend size={size}>
          <IconButtonGoToDocs href={helpUrl} size={size} title={helpTooltip} />
        </StyledPanelHeaderContentLegend>
      )}
      {legend && (
        <StyledPanelHeaderContentLegend size={size}>
          {legend}
        </StyledPanelHeaderContentLegend>
      )}
    </Flex>
  );

export interface PanelHeaderContentBodySubtitleProps {
  children: React.ReactNode;
  size: PanelHeaderSize;
}

export const PanelHeaderContentBodySubtitle: React.FC<
  PanelHeaderContentBodySubtitleProps
> = ({ size, children }) => (
  <Typography.Paragraph
    colorScheme="weak"
    truncateLine={3}
    size={HEADER_SIZES[size].subtitle.size}
  >
    {children}
  </Typography.Paragraph>
);
