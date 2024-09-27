import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { PANEL_HEADER_SIZES } from '../constants';

import { IPanelHeadingAttrs } from '../../declarations';

import { Typography } from '../../../../../Typography';
import { Flex } from '../../../../../Flex';
import { IconButtonGoToDocs } from '../../../../../IconButton';
import { PanelHeaderIcon } from '../PanelHeaderIcon';
import {
  IPanelContainerAttrs,
  IPanelBaseAttrs,
  IPanelHelpAttrs,
} from '../../../../declarations';

export interface PanelHeaderHeadingProps
  extends IPanelBaseAttrs,
    IPanelHeadingAttrs,
    Pick<IPanelContainerAttrs, 'size'>,
    IPanelHelpAttrs {}

export const PanelHeaderHeading: React.FC<PanelHeaderHeadingProps> = ({
  as,
  size = 'md',
  helpUrl,
  icon,
  legend,
  helpTooltip,
  subtitle,
  style,
  title,
  titleTooltip,
}) => {
  const theme = useTheme();
  const legendStyles = css`
    margin-left: ${theme.cmp.panel.headerLegend.space.marginLeft[size]};
    height: ${theme.cmp.panel.headerLegend.size.height[size]};
  `;
  const headingStyles = css`
    max-width: ${theme.cmp.panel.headerTitle.size.maxWidth};
  `;
  return (
    <Flex
      as={as}
      alignItems="center"
      flex="1 1 auto"
      minWidth="0"
      style={style}
    >
      {icon && <PanelHeaderIcon icon={icon} size={size} />}
      <Flex.Item minWidth="0">
        {!helpUrl && !legend ? (
          <Typography.Heading
            truncateLine={2}
            size={PANEL_HEADER_SIZES[size].title}
            style={headingStyles}
          >
            {title}
          </Typography.Heading>
        ) : (
          <Flex alignItems="center" inline width="100%">
            <Typography.Heading
              truncateLine={2}
              size={PANEL_HEADER_SIZES[size].title}
              tooltip={titleTooltip}
            >
              {title}
            </Typography.Heading>
            {(helpUrl || legend) && (
              <Flex alignItems="center" style={legendStyles}>
                {helpUrl && (
                  <IconButtonGoToDocs
                    href={helpUrl}
                    size={size}
                    tooltip={helpTooltip}
                  />
                )}
                {legend}
              </Flex>
            )}
          </Flex>
        )}
        <Typography.Paragraph
          colorScheme="weak"
          truncateLine={3}
          size={PANEL_HEADER_SIZES[size].subtitle.size}
          style={css`
            margin-top: ${theme.cmp.panel.headerSubtitle.space.marginTop};
            max-width: ${theme.cmp.panel.headerSubtitle.size.maxWidth};
          `}
        >
          {subtitle}
        </Typography.Paragraph>
      </Flex.Item>
    </Flex>
  );
};
