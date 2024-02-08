import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Stepper, HFlex, Button, StepperProps } from '..';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper/Cases',
  component: Stepper,
  args: {
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const initialSteps: StepperProps['steps'] = [
  { name: 'OPT_1', label: 'Option 1', status: 'pending' },
  { name: 'OPT_2', label: 'Option 2', status: 'pending' },
  { name: 'OPT_3', label: 'Option 3', status: 'pending' },
  { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
];

export const WithNavigation: Story = {
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
