import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Field, InputControl } from '..';

const meta: Meta<typeof Field> = {
  title: 'Components/Core/Form/Field/Cases',
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const BasicUsageWithHelper: Story = {
  name: 'Basic usage with helper',
  render: () =>
    (() => {
      const label = 'Field label';
      return (
        <Field
          id="story-field"
          label={label}
          helper="This is the Field helper"
          required
          requiredMarkTooltip="This field is required"
        >
          <InputControl aria-label={label} />
        </Field>
      );
    })(),
};
export const AdvancedUsage: Story = {
  name: 'Advanced usage',
  render: () =>
    (() => (
      <Field.Container>
        <Field.LabelDistributor>
          <Field.Label
            htmlFor="story-field"
            requiredMark={
              <Field.RequiredMark tooltip="This field is required" />
            }
          >
            Field label
          </Field.Label>
          <InputControl aria-label="Field label" id="story-field" />
        </Field.LabelDistributor>
        <Field.Helper message="This is the Field helper" />
      </Field.Container>
    ))(),
};

export const AdvancedUsageWithValidation: Story = {
  name: 'Advanced usage with validation',
  render: () =>
    (() => (
      <Field.Container>
        <Field.LabelDistributor>
          <Field.Label
            requiredMark={
              <Field.RequiredMark
                colorScheme="error"
                tooltip="This field is required"
              />
            }
            htmlFor="story-field"
          >
            Field label
          </Field.Label>
          <InputControl
            aria-label="Field label"
            id="story-field"
            status="error"
          />
        </Field.LabelDistributor>
        <Field.Helper
          status="error"
          message="This is the Field validation helper"
        />
      </Field.Container>
    ))(),
};

export const AdvancedUsageWithFloatingValidation: Story = {
  name: 'Advanced usage with floating validation',
  render: () =>
    (() => (
      <Field.Container>
        <Field.LabelDistributor>
          <Field.Label
            htmlFor="story-field"
            requiredMark={
              <Field.RequiredMark
                colorScheme="error"
                tooltip="This field is required"
              />
            }
            helper={
              <Field.FloatingHelper
                status="error"
                message="This is the Field floating validation helper"
              />
            }
          >
            Field label
          </Field.Label>
          <Field.ControlDistributor hasFloatingHelper>
            <InputControl
              aria-label="Field label"
              id="story-field"
              status="error"
            />
          </Field.ControlDistributor>
        </Field.LabelDistributor>
      </Field.Container>
    ))(),
};
