import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps, Typography } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button/Button/Cases',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Loading: Story = {
  args: {
    icon: 'gi-cloud_download_2',
    state: 'loading',
    children: 'Downloading...',
  },
};

export const Success: Story = {
  args: {
    icon: 'gi-cloud_download_2',
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
          <Button icon="gi-cloud_download_2" onClick={onClick} state={load}>
            {getLabel()}
          </Button>
        </>
      );
    })(),
};

export const Error: Story = {
  args: {
    icon: 'gi-cloud_download_2',
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
          <Button icon="gi-cloud_download_2" onClick={onClick} state={load}>
            {getLabel()}
          </Button>
        </>
      );
    })(),
};
