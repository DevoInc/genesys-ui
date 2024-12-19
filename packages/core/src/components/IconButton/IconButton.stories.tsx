import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GIBookmarkTag,
  GIBookmarkTagSolid,
  GIConnectionsLinks,
  GIFolder,
  GIHeartFull,
  GILikeHeartFavoriteRatingLove,
  GIRealTime,
  GITextStyleBold,
  GITimeEdit,
} from '@devoinc/genesys-icons';
import { Box, HFlex, IconButton, SpinnerLoader, VFlex } from '../..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Button/IconButton',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
  args: {
    icon: <GIHeartFull />,
    tooltip: 'Favourite',
  },
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <IconButton {...props} size="xxs" icon={<GIHeartFull />} />
        <IconButton {...props} size="xs" icon={<GIHeartFull />} />
        <IconButton {...props} size="sm" icon={<GIHeartFull />} />
        <IconButton {...props} size="md" icon={<GIHeartFull />} />
        <IconButton {...props} size="lg" icon={<GIHeartFull />} />
      </HFlex>
    ))(args),
};

export const States: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <IconButton {...props} icon={<GIHeartFull />} />
        <IconButton {...props} state="disabled" icon={<GIHeartFull />} />
        <IconButton {...props} state="expanded" icon={<GIHeartFull />} />
        <IconButton {...props} state="selected" icon={<GIHeartFull />} />
        <IconButton {...props} state="hovered" icon={<GIHeartFull />} />
        <IconButton {...props} state="focused" icon={<GIHeartFull />} />
        <IconButton {...props} state="pressed" icon={<GIHeartFull />} />
        <IconButton {...props} state="loading" icon={<GIHeartFull />} />
        <IconButton
          {...props}
          state="loading-error"
          colorScheme="error"
          icon={<GIHeartFull />}
        />
        <IconButton
          {...props}
          state="loading-success"
          colorScheme="success"
          icon={<GIHeartFull />}
        />
      </HFlex>
    ))(args),
};

export const WithBadge: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <IconButton {...props} icon={<GIHeartFull />} hasBadge />
        <IconButton {...props} icon={<GIHeartFull />} hasBadge badgeText="8" />
      </HFlex>
    ))(args),
};

export const Wide: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex>
        <VFlex.Item>
          <IconButton {...props} icon={<GIHeartFull />} wide />
        </VFlex.Item>
        <HFlex>
          <IconButton {...props} icon={<GIHeartFull />} wide />
          <IconButton {...props} icon={<GIHeartFull />} wide />
          <IconButton {...props} icon={<GIHeartFull />} wide />
        </HFlex>
      </VFlex>
    ))(args),
};

export const Circular: Story = {
  tags: ['isHidden'],
  args: {
    circular: true,
    icon: <GIHeartFull />,
  },
};

export const WithChildren: Story = {
  tags: ['isHidden'],
  args: {
    circular: true,
    icon: <GIRealTime />,
    children: (
      <Box position="absolute" width="100%" height="100%">
        <SpinnerLoader />
      </Box>
    ),
  },
};

export const AsLink: Story = {
  tags: ['isHidden'],
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: <GIConnectionsLinks />,
  },
};

export const WithDropdown: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButton
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          icon={<GITimeEdit />}
          hasDropdown
        />
      );
    })(),
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButton._Container
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          style="height: 4.8rem; width: 4.8rem;"
        >
          <IconButton._Icon style={{ fontSize: '2.8rem' }}>
            <GIFolder />
          </IconButton._Icon>
        </IconButton._Container>
      );
    })(),
};

export const MultipleUncontrolled: Story = {
  tags: ['isHidden'],
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    icon: <GITextStyleBold />,
  },
};

export const MultipleControlled: Story = {
  tags: ['isHidden'],
  args: {
    selectionScheme: 'multiple',
  },
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...props}
          icon={selected ? <GIHeartFull /> : <GILikeHeartFavoriteRatingLove />}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        />
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  tags: ['isHidden'],
  args: {
    selectionScheme: 'single',
    name: 'option',
    value: 'option',
    icon: <GIBookmarkTag />,
  },
};

export const SingleControlled: Story = {
  tags: ['isHidden'],
  args: {
    selectionScheme: 'single',
    value: 'Option',
    name: 'option',
  },
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...props}
          icon={selected ? <GIBookmarkTagSolid /> : <GIBookmarkTag />}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        />
      );
    })(args),
};
