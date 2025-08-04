import * as React from 'react';

import { PANEL_HEADER_FORMATS } from '../constants';

import type { IPanelHeadingAttrs } from '../../declarations';
import type {
  IPanelContainerAttrs,
  IPanelBaseAttrs,
  IPanelHelpAttrs,
} from '../../../../declarations';
import {
  PANEL_HEADING_CLASS_NAME_BASE,
  PANEL_HEADING_WRAPPER_CLASS_NAME_BASE,
  PANEL_LEGEND_CLASS_NAME_BASE,
  PANEL_LEGEND_TEXT_CLASS_NAME_BASE,
  PANEL_SUBTITLE_CLASS_NAME_BASE,
  PANEL_TITLE_CLASS_NAME_BASE,
  PANEL_TITLE_TEXT_CLASS_NAME_BASE,
} from '../../../../constants';

import { Typography } from '../../../../../Typography';
import { Flex } from '../../../../../Flex';
import { IconButtonGoToDocs } from '../../../../../IconButton';
import { PanelHeaderIcon } from '../PanelHeaderIcon';

export interface PanelHeaderHeadingProps
  extends IPanelBaseAttrs,
    IPanelHeadingAttrs,
    Pick<IPanelContainerAttrs, 'size'>,
    IPanelHelpAttrs {}

export const PanelHeaderHeading: React.FC<PanelHeaderHeadingProps> = ({
  as,
  className,
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
  const classNames = [
    `${PANEL_HEADING_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Flex
      className={classNames}
      as={as}
      alignItems="center"
      flex="1 1 auto"
      minWidth="0"
      style={style}
    >
      {icon && <PanelHeaderIcon icon={icon} size={size} />}
      <Flex.Item minWidth="0" className={PANEL_HEADING_WRAPPER_CLASS_NAME_BASE}>
        {!helpUrl && !legend ? (
          <Typography
            className={PANEL_TITLE_TEXT_CLASS_NAME_BASE}
            truncateLine={2}
            format={PANEL_HEADER_FORMATS[size].title}
          >
            {title}
          </Typography>
        ) : (
          <Flex
            alignItems="center"
            inline
            width="100%"
            className={PANEL_TITLE_CLASS_NAME_BASE}
          >
            <Typography
              className={PANEL_TITLE_TEXT_CLASS_NAME_BASE}
              truncateLine={2}
              format={PANEL_HEADER_FORMATS[size].title}
              tooltip={titleTooltip}
            >
              {title}
            </Typography>
            {(helpUrl || legend) && (
              <Flex
                alignItems="center"
                className={PANEL_LEGEND_CLASS_NAME_BASE}
              >
                {helpUrl && (
                  <IconButtonGoToDocs
                    href={helpUrl}
                    size={size}
                    tooltip={helpTooltip}
                  />
                )}
                {legend && typeof legend === 'string' ? (
                  <Typography
                    className={PANEL_LEGEND_TEXT_CLASS_NAME_BASE}
                    colorScheme="weak"
                    truncateLine={1}
                    format={PANEL_HEADER_FORMATS[size].subtitle.size}
                  >
                    {legend}
                  </Typography>
                ) : (
                  legend
                )}
              </Flex>
            )}
          </Flex>
        )}
        {subtitle && (
          <Typography
            className={PANEL_SUBTITLE_CLASS_NAME_BASE}
            colorScheme="weak"
            truncateLine={3}
            format={PANEL_HEADER_FORMATS[size].subtitle.size}
          >
            {subtitle}
          </Typography>
        )}
      </Flex.Item>
    </Flex>
  );
};
