import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChipGroup } from '../ChipGroup';
import { Chip } from '../Chip';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/Form/ChipGroup',
  component: ChipGroup,
  args: {
    direction: 'row',
    hasLegendLabelFormat: true,
    legend: 'Chip group legend',
    legendPosition: 'left',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    legend: {
      type: { name: 'string', required: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const Base: Story = {
  args: {
    children: (
      <>
        <ChipGroup.Chip>Chip one</ChipGroup.Chip>
        <ChipGroup.Chip>Chip two</ChipGroup.Chip>
        <ChipGroup.Chip>Chip three</ChipGroup.Chip>
      </>
    ),
  },
};

export const MultipleSelection: Story = {
  render: (args) =>
    ((props) => {
      const [selectedChips, setSelectedChips] = React.useState({
        one: false,
        two: false,
        three: false,
        four: false,
      });
      return (
        <ChipGroup {...props} legend="Multiple selection">
          <ChipGroup.Chip
            state={selectedChips.one ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({ ...selectedChips, one: !selectedChips?.one });
            }}
          >
            Chip one
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChips.two ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({ ...selectedChips, two: !selectedChips?.two });
            }}
          >
            Chip two
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChips.three ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({
                ...selectedChips,
                three: !selectedChips?.three,
              });
            }}
          >
            Chip three
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChips.four ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({
                ...selectedChips,
                four: !selectedChips?.four,
              });
            }}
          >
            Chip four
          </ChipGroup.Chip>
        </ChipGroup>
      );
    })(args),
};

export const SingleSelection: Story = {
  render: (args) =>
    ((props) => {
      const [selectedChip, setSelectedChip] = React.useState(0);
      return (
        <ChipGroup
          {...props}
          legend="Single selection"
          name="single-selection"
          selectionScheme="single"
        >
          <ChipGroup.Chip
            state={selectedChip === 1 ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChip(1);
            }}
          >
            Chip one
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChip === 2 ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChip(2);
            }}
          >
            Chip two
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChip === 3 ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChip(3);
            }}
          >
            Chip three
          </ChipGroup.Chip>
          <ChipGroup.Chip
            state={selectedChip === 4 ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChip(4);
            }}
          >
            Chip four
          </ChipGroup.Chip>
        </ChipGroup>
      );
    })(args),
};

export const UseOfChip: Story = {
  tags: ['isHidden'],
  name: 'Using not pre-defined ChipGroup components',
  render: (args) =>
    ((props) => {
      return (
        <ChipGroup {...props} size="xs">
          <Chip>Chip one</Chip>
          <Chip>Chip two</Chip>
          <Chip>Chip three</Chip>
          <Chip>Chip four</Chip>
        </ChipGroup>
      );
    })(args),
};
