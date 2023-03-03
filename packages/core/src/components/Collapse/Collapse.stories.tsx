import * as React from 'react';
import { Meta } from '@storybook/react';

import { Collapse, CollapseProps } from './Collapse';
import { Flex, Box, Typography } from '../';
import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Core/Navigation/Collapse',
  component: Collapse,
};

export default meta;

export const Base = (args: CollapseProps) => {
  const [expanded, setExpanded] = React.useState(args.expanded);
  return (
    <Flex flexDirection={'column'}>
      <Collapse
        {...args}
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      />
      {expanded && (
        <Box maxHeight={'190px'} overflow={'auto'} padding={'cmp-md cmp-lg'}>
          <Typography.Paragraph>{lorem}</Typography.Paragraph>
        </Box>
      )}
    </Flex>
  );
};
