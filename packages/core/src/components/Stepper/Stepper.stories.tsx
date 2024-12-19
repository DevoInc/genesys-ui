import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { HFlex } from '../HFlex';
import { Stepper, type StepperProps } from './Stepper';

const initialSteps: StepperProps['steps'] = [
  { name: 'OPT_1', label: 'Option 1', status: 'pending' },
  { name: 'OPT_2', label: 'Option 2', status: 'pending' },
  { name: 'OPT_3', label: 'Option 3', status: 'pending' },
  { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  args: {
    'aria-label': 'Stepper aria-label',
    size: 'md',
    steps: initialSteps,
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Playground: Story = {};

export const WithNavigation: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [steps, setSteps] = React.useState<StepperProps['steps']>([
        ...initialSteps,
      ]);
      const [current, setCurrent] = React.useState(1);

      const updateSteps = React.useCallback((steps, current) => {
        const newSteps = [...steps];
        newSteps.forEach((step, idx) => {
          if (step.status !== 'disabled') step.status = 'pending';
          if (idx + 1 < current) step.status = 'completed';
          if (idx + 1 === current) step.status = 'current';
        });
        return newSteps;
      }, []);

      const goNext = () =>
        setCurrent(() => (current <= steps.length ? current + 1 : current));
      const goPrevious = () =>
        setCurrent(() => (current > 1 ? current - 1 : current));

      const buttonLabel = current >= steps.length ? 'Finish' : 'Next';

      React.useEffect(
        () => setSteps((preSteps) => updateSteps(preSteps, current)),
        [current, updateSteps],
      );

      return (
        <>
          <Stepper id="stepper" aria-label="Hi" steps={steps} />
          <HFlex marginTop="cmp-lg">
            <Button onClick={goPrevious}>Previous</Button>
            <Button onClick={goNext} colorScheme="accent">
              {buttonLabel}
            </Button>
          </HFlex>
        </>
      );
    })(),
};

export const AdvancedUsage: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <Stepper._Container>
          <Stepper._Item status="current" hasDivider={false}>
            Step one
          </Stepper._Item>
          <Stepper._Item stepNumberPos={1}>Step two</Stepper._Item>
          <Stepper._Item stepNumberPos={2}>Step three</Stepper._Item>
          <Stepper._Item._Container>
            <Stepper._Item._Divider />
            <Stepper._Item._Indicator stepNumberPos={3} status="pending" />
            <Stepper._Item._Content status="pending">
              Step four
            </Stepper._Item._Content>
          </Stepper._Item._Container>
        </Stepper._Container>
      );
    })(),
};
