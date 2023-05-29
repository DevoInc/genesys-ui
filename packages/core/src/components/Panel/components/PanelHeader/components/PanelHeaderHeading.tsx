import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { HEADER_SIZES } from './constants';

import { PanelHeaderSize } from '../declarations';
import { StyledOverloadCssProps } from '../../../../../declarations';

import { Flex, IconButtonGoToDocs, Typography } from '../../../../index';
import { PanelHeaderIcon, PanelHeaderIconProps } from './PanelHeaderIcon';

export interface PanelHeaderHeadingProps extends StyledOverloadCssProps {
  icon?: PanelHeaderIconProps['icon'];
  size?: PanelHeaderSize;
  helpUrl?: string;
  legend?: React.ReactNode;
  helpTooltip?: string;
  /** The tooltip for the header title block */
  title?: string;
  subtitle?: string;
  titleTooltip?: string;
}

export const PanelHeaderHeading: React.FC<PanelHeaderHeadingProps> = ({
  size = 'md',
  helpUrl,
  icon,
  legend,
  helpTooltip,
  subtitle,
  styles,
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
    <Flex alignItems="center" flex="1 1 auto" minWidth="0" styles={styles}>
      {icon && <PanelHeaderIcon icon={icon} size={size} />}
      <Flex.Item minWidth="0">
        {!helpUrl && !legend ? (
          <Typography.Heading
            truncateLine={2}
            size={HEADER_SIZES[size].title}
            styles={headingStyles}
          >
            {title}
          </Typography.Heading>
        ) : (
          <Flex alignItems="center" inline width="100%">
            <Typography.Heading
              truncateLine={2}
              size={HEADER_SIZES[size].title}
              tooltip={titleTooltip}
            >
              {title}
            </Typography.Heading>
            {(helpUrl || legend) && (
              <Flex alignItems="center" styles={legendStyles}>
                {helpUrl && (
                  <IconButtonGoToDocs
                    href={helpUrl}
                    size={size}
                    tooltip={helpTooltip}
                  />
                )}
                {legend && legend}
              </Flex>
            )}
          </Flex>
        )}
        <Typography.Paragraph
          colorScheme="weak"
          truncateLine={3}
          size={HEADER_SIZES[size].subtitle.size}
          styles={css`
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
