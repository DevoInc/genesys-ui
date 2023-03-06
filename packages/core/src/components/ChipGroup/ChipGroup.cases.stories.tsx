import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chip, ChipGroup } from '..';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/Core/Form/ChipGroup/Cases',
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

export const MultipleSelection: Story = {
  render: () =>
    (() => {
      const [selectedChips, setSelectedChips] = React.useState({
        one: false,
        two: false,
        three: false,
        four: false,
      });
      return (
        <ChipGroup legend="Multiple selection">
          <Chip
            state={selectedChips.one ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({ ...selectedChips, one: !selectedChips?.one });
            }}
          >
            Chip one
          </Chip>
          <Chip
            state={selectedChips.two ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({ ...selectedChips, two: !selectedChips?.two });
            }}
          >
            Chip two
          </Chip>
          <Chip
            state={selectedChips.three ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({
                ...selectedChips,
                three: !selectedChips?.three,
              });
            }}
          >
            Chip three
          </Chip>
          <Chip
            state={selectedChips.four ? 'selected' : 'enabled'}
            onChange={() => {
              setSelectedChips({
                ...selectedChips,
                four: !selectedChips?.four,
              });
            }}
          >
            Chip four
          </Chip>
        </ChipGroup>
      );
    })(),
};

export const SingleSelection: Story = {
  render: () =>
    (() => {
      const [selectedChip, setSelectedChip] = React.useState(0);
      return (
        <ChipGroup legend="Single selection">
          <Chip
            state={selectedChip === 1 ? 'selected' : 'enabled'}
            selectionScheme="single"
            name="single-selection"
            onChange={() => {
              setSelectedChip(1);
            }}
          >
            Chip one
          </Chip>
          <Chip
            state={selectedChip === 2 ? 'selected' : 'enabled'}
            selectionScheme="single"
            name="single-selection"
            onChange={() => {
              setSelectedChip(2);
            }}
          >
            Chip two
          </Chip>
          <Chip
            state={selectedChip === 3 ? 'selected' : 'enabled'}
            selectionScheme="single"
            name="single-selection"
            onChange={() => {
              setSelectedChip(3);
            }}
          >
            Chip three
          </Chip>
          <Chip
            state={selectedChip === 4 ? 'selected' : 'enabled'}
            selectionScheme="single"
            name="single-selection"
            onChange={() => {
              setSelectedChip(4);
            }}
          >
            Chip four
          </Chip>
        </ChipGroup>
      );
    })(),
};
