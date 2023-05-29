import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { PanelHeaderSize } from '../declarations';

import { Flex } from '../../../../Flex';
import { Icon, IconProps } from '../../../../Icon';

// TODO ad the component when it's ready
//const DropDownMenu = require('../../../../../react/molecules/DropDownMenu');

export interface PanelHeaderIconProps extends Omit<IconProps, 'iconId'> {
  icon: IconProps['iconId'];
  size: PanelHeaderSize;
}

export const PanelHeaderIcon: React.FC<PanelHeaderIconProps> = ({
  icon,
  size = 'md',
  styles,
  ...restIconProps
}) => {
  const iconTokens = useTheme().cmp.panel.headerIcon;
  // TODO: improve the genesys-tokens types to allow using the same types for space props (and many others), so we can pass a design token as a prop value
  const baseStyles = css`
    margin-right: ${iconTokens.space.marginRight[size]};
  `;
  return (
    <Flex
      alignSelf="flex-start"
      alignItems="center"
      justifyContent="center"
      inline
      styles={concat(baseStyles, styles)}
      flex="0 0 auto"
      height={iconTokens.size.height[size]}
    >
      <Icon
        {...restIconProps}
        iconId={icon}
        color={iconTokens.color.text}
        size={iconTokens.typo.fontSize[size]}
      />
    </Flex>
  );
};
