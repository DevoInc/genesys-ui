import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GIArrowRight,
  GIDownloadCloudFileSync,
  GIReloadRefreshUpdate,
} from '@devoinc/genesys-icons';

import { Typography } from '../Typography';
import { Button, type ButtonProps } from '../Button';
import { Flex } from '../Flex';
import { HFlex } from '../HFlex';
import { VFlex } from '../VFlex';
import { Wrap } from '../Wrap';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  args: {
    children: 'Button label',
  },
  parameters: { controls: { sort: 'alpha' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const AccentHigh: Story = {
  tags: ['isHidden'],
  args: {
    colorScheme: 'accent-high',
    children: 'Accent high',
  },
};

export const Accent: Story = {
  tags: ['isHidden'],
  args: {
    colorScheme: 'accent',
    children: 'Accent',
  },
};

export const Neutral: Story = {
  tags: ['isHidden'],
  args: {
    colorScheme: 'neutral',
    children: 'Neutral',
  },
};

export const Blend: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-md">
      <Flex.Item flex="1 1 50%">
        <Button colorScheme="blend-base">Blend base</Button>
      </Flex.Item>
      <Flex.Item flex="1 1 50%">
        <div style={{ backgroundColor: '#222', padding: '2rem' }}>
          <Button colorScheme="blend-inverse">Blend inverse</Button>
        </div>
      </Flex.Item>
    </HFlex>
  ),
};

export const UI: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-md">
      <Flex.Item>
        <Button colorScheme={'error'}>Error</Button>
      </Flex.Item>
      <Flex.Item>
        <Button colorScheme={'success'}>Success</Button>
      </Flex.Item>
      <Flex.Item>
        <Button colorScheme={'warning'}>Warning</Button>
      </Flex.Item>
      <Flex.Item>
        <Button colorScheme={'help'}>Help</Button>
      </Flex.Item>
      <Flex.Item>
        <Button colorScheme={'info'}>Info</Button>
      </Flex.Item>
    </HFlex>
  ),
};

export const Quiet: Story = {
  tags: ['isHidden'],
  args: {
    colorScheme: 'quiet',
    children: 'Quiet',
  },
};

export const WithBadge: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <Button {...props} hasBadge>
          Badge as marker
        </Button>
        <Button {...props} hasBadge badgeText="8">
          Badge with content
        </Button>
      </HFlex>
    ))(args),
};

export const Wide: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex>
        <VFlex.Item>
          <Button {...props} wide>
            Button wide
          </Button>
        </VFlex.Item>
        <HFlex>
          <Button {...props} wide>
            Button wide one
          </Button>
          <Button {...props} wide>
            Button wide two
          </Button>
          <Button {...props} wide>
            Button wide one
          </Button>
        </HFlex>
      </VFlex>
    ))(args),
};

export const WithIcon: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <Button {...props} icon={<GIReloadRefreshUpdate />}>
          Icon to left
        </Button>
        <Button {...props} icon={<GIArrowRight />} iconPosition="right">
          Icon to right
        </Button>
      </HFlex>
    ))(args),
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <Button {...props} size="xxs">
          Size xxs
        </Button>
        <Button {...props} size="xs">
          Size xs
        </Button>
        <Button {...props} size="sm">
          Size sm
        </Button>
        <Button {...props}>Size md</Button>
        <Button {...props} size="lg">
          Size lg
        </Button>
      </HFlex>
    ))(args),
};

export const States: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Wrap>
        <Button {...props}>Enabled</Button>
        <Button {...props} state="disabled">
          Disabled
        </Button>
        <Button {...props} state="expanded">
          Expanded
        </Button>
        <Button {...props} state="selected">
          Selected
        </Button>
        <Button {...props} state="hovered">
          Hovered
        </Button>
        <Button {...props} state="focused">
          Focused
        </Button>
        <Button {...props} state="pressed">
          Pressed
        </Button>
        <Button {...props} state="loading">
          Loading
        </Button>
        <Button {...props} state="loading-error" colorScheme="error">
          Loading error
        </Button>
        <Button {...props} state="loading-success" colorScheme="success">
          Loading success
        </Button>
      </Wrap>
    ))(args),
};

export const AsDropdown: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Go to Devo ',
  },
};

export const Loading: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GIDownloadCloudFileSync />,
    state: 'loading',
    children: 'Downloading...',
  },
};

export const Success: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
  tags: ['isHidden'],
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    children: 'Option',
  },
};

export const MultipleControlled: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
  args: {
    selectionScheme: 'single',
    value: 'option',
    children: 'Option',
    name: 'option',
  },
};

export const SingleControlled: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
