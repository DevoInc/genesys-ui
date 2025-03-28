import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, Tag, TagGroup, Typography } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import type { TContextOptions, TContextOption } from './declarations';
import { TableContext } from '../../context';
import { getPxFromRem } from '@devoinc/genesys-ui';

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
  const evalHorPadding = getPxFromRem(
    theme.cmp.table.cell.space.padding.hor[density],
  );
  const contentEvalWidth = width - evalHorPadding;
  const contentRef = React.createRef<HTMLDivElement>();
  const [contentOverflow, setContentOverflow] = React.useState(false);

  React.useEffect(() => {
    const contentWidth = contentRef.current.clientWidth;
    if (contentWidth > contentEvalWidth) {
      setContentOverflow(true);
    }
  }, [contentRef, contentEvalWidth]);

  return (
    <Flex overflow="hidden" flex="1">
      <Flex
        position="relative"
        overflowX="auto"
        style={`&::-webkit-scrollbar {display: none;}`}
      >
        <TagGroup flexWrap={flexWrap} ref={contentRef}>
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
      </Flex>
      {!cellDef?.isExpanded && contentOverflow && (
        <Flex flex="0 0 auto" justifyContent="center" marginLeft="cmp-xs">
          <Typography.Paragraph size="xl">...</Typography.Paragraph>
        </Flex>
      )}
    </Flex>
  );
};
