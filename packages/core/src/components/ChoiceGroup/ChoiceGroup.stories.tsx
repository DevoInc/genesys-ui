import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, IconButton } from '../';
import {
  GIArrowsPlayRepeat,
  GIArrowsPlayShuffle,
  GIBookmarkTag,
  GIBookmarkTagSolid,
  GIChart,
  GIChartAgg,
  GIChartDonut,
  GIChartSankey,
  GIHeartFull,
  GILikeHeartFavoriteRatingLove,
  GIPause,
  GIPinBookmark,
  GIPlay,
} from '@devoinc/genesys-icons';

const meta: Meta<typeof ChoiceGroup> = {
  title: 'Components/Form/ChoiceGroup',
  component: ChoiceGroup,
  args: {
    colorScheme: 'quiet',
    hasFloatingHelper: true,
    hasLegendLabelFormat: true,
    legendPosition: 'top',
    selectionScheme: 'multiple',
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChoiceGroup>;

export const Base: Story = {
  args: {
    children: (
      <>
        <ChoiceGroup.IconButton icon={<GIPlay />} tooltip="Play" />
        <ChoiceGroup.IconButton tooltip="Pause" icon={<GIPause />} />
        <ChoiceGroup.IconButton
          icon={<GIArrowsPlayShuffle />}
          tooltip="Shuffle"
        />
        <ChoiceGroup.IconButton
          icon={<GIArrowsPlayRepeat />}
          tooltip="Repeat"
        />
      </>
    ),
  },
};

export const SpecificChildProp: Story = {
  tags: ['isHidden'],
  name: 'Specific prop value for a child',
  render: (args) =>
    ((props) => {
      return (
        <ChoiceGroup {...props}>
          <ChoiceGroup.IconButton icon={<GIPlay />} tooltip="Play" />
          <ChoiceGroup.IconButton tooltip="Pause" icon={<GIPause />} />
          <ChoiceGroup.IconButton
            icon={<GIArrowsPlayShuffle />}
            tooltip="Shuffle"
          />
          <ChoiceGroup.IconButton
            icon={<GIArrowsPlayRepeat />}
            tooltip="Repeat"
            colorScheme="neutral"
          />
        </ChoiceGroup>
      );
    })(args),
};

export const UseOfIconButton: Story = {
  tags: ['isHidden'],
  name: 'Using not pre-defined ChoiceGroup components',
  render: (args) =>
    ((props) => {
      return (
        <ChoiceGroup {...props} size="xs">
          <IconButton icon={<GIPlay />} tooltip="Play" />
          <IconButton tooltip="Pause" icon={<GIPause />} />
          <IconButton icon={<GIArrowsPlayShuffle />} tooltip="Shuffle" />
          <IconButton icon={<GIArrowsPlayRepeat />} tooltip="Repeat" />
        </ChoiceGroup>
      );
    })(args),
};

export const MultipleSelectionControlled: Story = {
  render: () =>
    (() => {
      const [selectedButtons, setSelectedButtons] = React.useState({
        one: null,
        two: null,
        three: null,
      });
      return (
        <ChoiceGroup>
          <ChoiceGroup.IconButton
            icon={
              selectedButtons?.one ? (
                <GIHeartFull />
              ) : (
                <GILikeHeartFavoriteRatingLove />
              )
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                one: !selectedButtons?.one,
              });
            }}
            state={selectedButtons.one ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={
              selectedButtons.two ? <GIBookmarkTagSolid /> : <GIBookmarkTag />
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                two: !selectedButtons?.two,
              });
            }}
            state={selectedButtons.two ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={<GIPinBookmark />}
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                three: !selectedButtons?.three,
              });
            }}
            state={selectedButtons.three ? 'selected' : 'enabled'}
          />
        </ChoiceGroup>
      );
    })(),
};

export const MultipleSelectionUncontrolled: Story = {
  args: {
    children: (
      <>
        <ChoiceGroup.IconButton icon={<GILikeHeartFavoriteRatingLove />} />
        <ChoiceGroup.IconButton icon={<GIBookmarkTag />} />
      </>
    ),
  },
};

export const SingleSelectionControlled: Story = {
  render: () =>
    (() => {
      const [selectedButton, setSelectedButton] = React.useState(0);
      return (
        <ChoiceGroup>
          <ChoiceGroup.IconButton
            icon={<GIChart />}
            onChange={() => {
              setSelectedButton(1);
            }}
            selectionScheme="single"
            state={selectedButton === 1 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={<GIChartAgg />}
            onChange={() => {
              setSelectedButton(2);
            }}
            selectionScheme="single"
            state={selectedButton === 2 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={<GIChartDonut />}
            onChange={() => {
              setSelectedButton(3);
            }}
            selectionScheme="single"
            state={selectedButton === 3 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={<GIChartSankey />}
            onChange={() => {
              setSelectedButton(4);
            }}
            selectionScheme="single"
            state={selectedButton === 4 ? 'selected' : 'enabled'}
          />
        </ChoiceGroup>
      );
    })(),
};

export const SingleSelectionUncontrolled: Story = {
  args: {
    children: (
      <>
        <ChoiceGroup.IconButton
          icon={<GIChart />}
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon={<GIChartAgg />}
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon={<GIChartDonut />}
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon={<GIChartSankey />}
          name="uncontrolled"
          selectionScheme="single"
        />
      </>
    ),
  },
};
