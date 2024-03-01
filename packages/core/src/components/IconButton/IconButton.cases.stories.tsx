import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';
import { SpinnerLoader } from '../SpinnerLoader';
import { IconButton } from './IconButton';
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

const meta: Meta<typeof IconButton> = {
  title: 'Components/Button/IconButton/Cases',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithChildren: Story = {
  name: 'With children',
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
  name: 'As link',
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: <GIConnectionsLinks />,
  },
};

export const WithDropdown: Story = {
  name: 'With dropdown',
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
  name: 'Custom based in internal components',
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButton._Container
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          styles="height: 4.8rem; width: 4.8rem;"
        >
          <IconButton._Icon style={{ fontSize: '2.8rem' }}>
            <GIFolder />
          </IconButton._Icon>
        </IconButton._Container>
      );
    })(),
};

export const MultipleUncontrolled: Story = {
  name: 'Multiple uncontrolled',
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    icon: <GITextStyleBold />,
  },
};

export const MultipleControlled: Story = {
  name: 'Multiple controlled',
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
  name: 'Single uncontrolled',
  args: {
    selectionScheme: 'single',
    name: 'option',
    value: 'option',
    icon: <GIBookmarkTag />,
  },
};

export const SingleControlled: Story = {
  name: 'Single controlled',
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
