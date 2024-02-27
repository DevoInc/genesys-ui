import * as React from 'react';

import { render, screen } from '@test';
import { Stepper, StepperProps } from './Stepper';

describe('Stepper', () => {
  const steps: StepperProps['steps'] = [
    { name: 'OPT_1', label: 'Option 1', status: 'completed' },
    { name: 'OPT_2', label: 'Option 2', status: 'current' },
    { name: 'OPT_3', label: 'Option 3', status: 'pending' },
    { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
  ];

  test('Render component', () => {
    render(
      <Stepper aria-label="Stepper for test" id="stepper-test" steps={steps} />,
    );
    const stepper = screen.getByRole('list', { name: 'Stepper for test' });
    expect(stepper.children).toHaveLength(4);
  });
});
