import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { FloatPanel } from './FloatPanel';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';

const meta: Meta<typeof FloatPanel> = {
  title: 'Components/Layout/FloatPanel',
  component: FloatPanel,
  args: {
    position: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof FloatPanel>;

export const Base: Story = {
  args: {
    children: (
      <VFlex padding="cmp-md cmp-lg">
        <Typography.Heading size="h4">FloatPanel</Typography.Heading>
        <Typography.Paragraph>
          Culture science Euclid intelligent beings hydrogen atoms citizens of
          distant epochs. Cosmic ocean stirred by starlight extraordinary claims
          require extraordinary evidence at the edge of forever a very small
          stage in a vast cosmic arena extraplanetary. Vanquish the impossible
          tesseract permanence of the stars permanence of the stars invent the
          universe across the centuries. The only home we have ever known
          emerged into consciousness a mote of dust suspended in a sunbeam dream
          of the minds eye a mote of dust suspended in a sunbeam made in the
          interiors of collapsing stars and billions upon billions upon billions
          upon billions upon billions upon billions upon billions.
        </Typography.Paragraph>
      </VFlex>
    ),
  },
};

export const Closable: Story = {
  name: 'Closable using Panel component',
  render: () =>
    (() => {
      const [closed, setClosed] = React.useState(false);
      return closed ? (
        <Button onClick={() => setClosed(false)}>Open FloatPanel</Button>
      ) : (
        <FloatPanel position="left">
          <Panel
            closeSettings={{ onClick: () => setClosed(true) }}
            elevation="ground"
            headerSettings={{ bordered: true }}
            height="100%"
            title="FloatPanel"
          >
            <Typography.Paragraph>
              Culture science Euclid intelligent beings hydrogen atoms citizens
              of distant epochs. Cosmic ocean stirred by starlight extraordinary
              claims require extraordinary evidence at the edge of forever a
              very small stage in a vast cosmic arena extraplanetary. Vanquish
              the impossible tesseract permanence of the stars permanence of the
              stars invent the universe across the centuries. The only home we
              have ever known emerged into consciousness a mote of dust
              suspended in a sunbeam dream of the minds eye a mote of dust
              suspended in a sunbeam made in the interiors of collapsing stars
              and billions upon billions upon billions upon billions upon
              billions upon billions upon billions.
            </Typography.Paragraph>
          </Panel>
        </FloatPanel>
      );
    })(),
};
