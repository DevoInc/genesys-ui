import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Collapse } from './Collapse';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { lorem } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Navigation/Collapse',
  component: Collapse,
  args: {
    heading: 'Collapse heading',
    truncateLine: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [expanded, setExpanded] = React.useState(args.expanded);
      const contentId = 'accessibility';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            {...args}
            aria-controls={args['aria-controls'] || contentId}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded && (
            <Box
              id={contentId}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
        </Flex>
      );
    })(args),
};

export const BaseForDocs: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      const contentId = 'accessibility';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            aria-controls={contentId}
            expanded={expanded}
            heading="Collapse heading"
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded && (
            <Box
              id={contentId}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
        </Flex>
      );
    })(),
};

export const Custom = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Flex flexDirection={'column'}>
      <Collapse._Container
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <Box
          position="relative"
          onClick={() => alert('Clock on Collapse marker')}
        >
          <Collapse._Marker />
        </Box>
        <Collapse._Heading styles="font-style: italic;">
          Custom collapse
        </Collapse._Heading>
      </Collapse._Container>
      {expanded && (
        <Box maxHeight={'190px'} overflow={'auto'} padding={'cmp-md cmp-lg'}>
          <Typography.Paragraph>{lorem}</Typography.Paragraph>
        </Box>
      )}
    </Flex>
  );
};
