import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { HFlex, Typography, VFlex } from '@devoinc/genesys-ui';
import { GISortAscCarets, GISortDescCarets } from '@devoinc/genesys-icons';
import type { TColDef } from '../../declarations';

interface OrderIndicatorProps {
  colDef: TColDef;
}

export const OrderIndicator: React.FC<OrderIndicatorProps> = ({ colDef }) => {
  const cmpTokens = useTheme().cmp.table.headCellOrder;
  const iconColor = cmpTokens.color.fill.base;
  const iconSize = cmpTokens.size.square;
  const iconOffset = cmpTokens.space.offset;
  const iconOpacity = cmpTokens.shape.opacity.base;
  const iconOpacitySelected = cmpTokens.shape.opacity.selected;
  return (
    <HFlex
      spacing="cmp-xxs"
      style={css`
        opacity: ${colDef.sort ? 1 : 0};
        transition: opacity ease-in-out ${cmpTokens.mutation.transitionDuration};

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
              opacity:
                colDef.sort === 'asc' ? iconOpacitySelected : iconOpacity,
            }}
          />
        </VFlex.Item>
        <VFlex.Item cssTranslate={`0, -${iconOffset}px`}>
          <GISortDescCarets
            color={iconColor}
            size={iconSize}
            style={{
              opacity:
                colDef.sort === 'desc' ? iconOpacitySelected : iconOpacity,
            }}
          />
        </VFlex.Item>
      </VFlex>
      <Typography.Caption size="xs">{colDef.sortIndex}</Typography.Caption>
    </HFlex>
  );
};
