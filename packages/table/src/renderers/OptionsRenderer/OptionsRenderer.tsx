import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, Tag, TagGroup, Typography } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import type { TContextOptions, TContextOption } from './declarations';
import { StyledOptionsRendererWrapper } from './StyledOptionsRendererWrapper';
import { TableContext } from '../../context';
import { remToPx } from 'polished';

export const OptionsRenderer: React.FC<TCellRenderer> = ({
  value = [],
  cellDef,
  colDef,
  width,
}) => {
  const { density } = React.useContext(TableContext);
  const realValue = Array.isArray(value) ? value : [value];
  const context = (colDef?.context as TContextOptions) ?? {};
  const options = context?.options ?? [];
  const flexWrap = context?.flexWrap ?? 'nowrap';
  const theme = useTheme();
  const evalHorPadding = parseFloat(
    remToPx(theme.cmp.table.cell.space.padding.hor[density]),
  );
  const contentEvalWidth = width - evalHorPadding * 2;
  const ellipsisMarkerWidth = 32;

  return (
    <Flex overflow="hidden" flex="1">
      <StyledOptionsRendererWrapper
        $width={contentEvalWidth}
        $ellipsisMarkerWidth={ellipsisMarkerWidth}
      >
        <TagGroup flexWrap={flexWrap}>
          {realValue.map((tag: string) => {
            const option = Object.entries(options).find(([k]) => k === tag);
            const optionParams = option ? (option[1] as TContextOption) : {};
            return (
              <Tag
                colorScheme={optionParams?.colorScheme}
                text={optionParams?.label ?? tag}
                icon={optionParams?.icon as string}
                key={tag}
              />
            );
          })}
        </TagGroup>
      </StyledOptionsRendererWrapper>
      {!cellDef?.isExpanded && (
        <Flex width={`${ellipsisMarkerWidth}px`} justifyContent="center">
          <Typography.Paragraph size="xl">...</Typography.Paragraph>
        </Flex>
      )}
    </Flex>
  );
};
