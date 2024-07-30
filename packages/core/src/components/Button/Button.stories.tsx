import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GIDownloadCloudFileSync } from '@devoinc/genesys-icons';

import { Button, type ButtonProps, Typography } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  args: {
    children: 'Button label',
    iconPosition: 'left',
    colorScheme: 'neutral',
    size: 'md',
  },
  parameters: { controls: { sort: 'alpha' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};

export const AsDropdown: Story = {
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Button
          {...props}
          hasDropdown
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
        >
          Dropdown button
        </Button>
      );
    })(args),
};

export const AsLink: Story = {
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Go to Devo ',
  },
};

export const Loading: Story = {
  args: {
    icon: <GIDownloadCloudFileSync />,
    state: 'loading',
    children: 'Downloading...',
  },
};

export const Success: Story = {
  args: {
    icon: <GIDownloadCloudFileSync />,
    state: 'loading',
    children: 'Downloading...',
  },
  render: () =>
    (() => {
      const [load, setLoad] = React.useState<ButtonProps['state']>('enabled');
      const onClick = () => {
        setLoad('loading');
        setTimeout(function () {
          setLoad('loading-success');
        }, 3000);
        setTimeout(function () {
          setLoad('enabled');
        }, 5000);
      };
      const getLabel = () => {
        if (load === 'loading') return 'Downloading...';
        if (load === 'loading-success') return 'Downloaded!';
        return 'Download';
      };
      return (
        <>
          <Typography.Paragraph size="sm" colorScheme="weak">
            Click on the button to get the <code>loading-success</code> state.
          </Typography.Paragraph>
          <Button
            icon={<GIDownloadCloudFileSync />}
            onClick={onClick}
            state={load}
          >
            {getLabel()}
          </Button>
        </>
      );
    })(),
};

export const Error: Story = {
  args: {
    icon: <GIDownloadCloudFileSync />,
    state: 'loading',
    children: 'Downloading...',
  },
  render: () =>
    (() => {
      const [load, setLoad] = React.useState<ButtonProps['state']>('enabled');
      const onClick = () => {
        setLoad('loading');
        setTimeout(function () {
          setLoad('loading-error');
        }, 3000);
        setTimeout(function () {
          setLoad('enabled');
        }, 5000);
      };
      const getLabel = () => {
        if (load === 'loading') return 'Downloading...';
        if (load === 'loading-error') return 'There was a problem! Try again';
        return 'Download';
      };
      return (
        <>
          <Typography.Paragraph size="sm" colorScheme="weak">
            Click on the button to get the <code>loading-error</code> state.
          </Typography.Paragraph>
          <Button
            icon={<GIDownloadCloudFileSync />}
            onClick={onClick}
            state={load}
          >
            {getLabel()}
          </Button>
        </>
      );
    })(),
};

export const MultipleUncontrolled: Story = {
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    children: 'Option',
  },
};

export const MultipleControlled: Story = {
  args: {
    selectionScheme: 'multiple',
    children: 'Option',
    value: 'option',
  },
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Button
          {...props}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        >
          Option
        </Button>
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  args: {
    selectionScheme: 'single',
    value: 'option',
    children: 'Option',
    name: 'option',
  },
};

export const SingleControlled: Story = {
  args: {
    selectionScheme: 'single',
    value: 'Option',
    children: 'Option',
    name: 'option',
  },
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Button
          {...props}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        >
          Option
        </Button>
      );
    })(args),
};

export const Custom: Story = {
  name: 'Custom based in internal components',
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Button._Container
          {...props}
          hasDropdown
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          style={{ height: '48px', backgroundColor: 'gold' }}
        >
          <Button._Label style={{ fontStyle: 'italic' }}>
            Dropdown button
          </Button._Label>
          <Button._Addon hasSpace isDropdown position="right">
            <Button._DropdownIcon />
          </Button._Addon>
        </Button._Container>
      );
    })(args),
};
