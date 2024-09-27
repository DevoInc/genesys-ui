import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { HFlex, Typography, VFlex } from '@devoinc/genesys-ui';
import { GISortAscCarets, GISortDescCarets } from '@devoinc/genesys-icons';
import type { TColDef } from '../../declarations';

interface OrderIndicatorProps {
  colDef: TColDef;
}

export const OrderIndicator: React.FC<OrderIndicatorProps> = ({ colDef }) => {
  const theme = useTheme();
  const iconColor = theme.alias.color.text.body.base;
  const iconSize = 12;
  const iconOffset = iconSize - 5;
  const iconOpacity = 0.3;
  return (
    <HFlex
      spacing="cmp-xxs"
      style={css`
        opacity: ${colDef.sort ? 1 : 0};
        transition: opacity ease-in-out
          ${theme.alias.mutation.transitionDuration.opacity.sm};

        *:hover > & {
          opacity: 1;
        }
      `}
    >
      <VFlex spacing="0">
        <VFlex.Item cssTranslate={`0, ${iconOffset}px`}>
          <GISortAscCarets
            color={iconColor}
            size={iconSize}
            style={{
              opacity: colDef.sort === 'asc' ? 1 : iconOpacity,
            }}
          />
        </VFlex.Item>
        <VFlex.Item cssTranslate={`0, -${iconOffset}px`}>
          <GISortDescCarets
            color={iconColor}
            size={iconSize}
            style={{
              opacity: colDef.sort === 'desc' ? 1 : iconOpacity,
            }}
          />
        </VFlex.Item>
      </VFlex>
      <Typography.Caption size="xs">{colDef.sortIndex}</Typography.Caption>
    </HFlex>
  );
};
