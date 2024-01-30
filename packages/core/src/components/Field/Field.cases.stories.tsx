import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { InputControl } from '../InputControl';

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
      <Field._Container>
        <Field._LabelDistributor>
          <Field._Label
            htmlFor="story-field"
            requiredMark={
              <Field._RequiredMark tooltip="This field is required" />
            }
          >
            Field label
          </Field._Label>
          <InputControl aria-label="Field label" id="story-field" />
        </Field._LabelDistributor>
        <Field._Helper message="This is the Field helper" />
      </Field._Container>
    ))(),
};

export const AdvancedUsageWithValidation: Story = {
  name: 'Advanced usage with validation',
  render: () =>
    (() => (
      <Field._Container>
        <Field._LabelDistributor>
          <Field._Label
            requiredMark={
              <Field._RequiredMark
                colorScheme="error"
                tooltip="This field is required"
              />
            }
            htmlFor="story-field"
          >
            Field label
          </Field._Label>
          <InputControl
            aria-label="Field label"
            id="story-field"
            status="error"
          />
        </Field._LabelDistributor>
        <Field._Helper
          status="error"
          message="This is the Field validation helper"
        />
      </Field._Container>
    ))(),
};

export const AdvancedUsageWithFloatingValidation: Story = {
  name: 'Advanced usage with floating validation',
  render: () =>
    (() => (
      <Field._Container>
        <Field._LabelDistributor>
          <Field._Label
            htmlFor="story-field"
            requiredMark={
              <Field._RequiredMark
                colorScheme="error"
                tooltip="This field is required"
              />
            }
            helper={
              <Field._FloatingHelper
                status="error"
                message="This is the Field floating validation helper"
              />
            }
          >
            Field label
          </Field._Label>
          <Field._ControlDistributor>
            <InputControl
              aria-label="Field label"
              id="story-field"
              status="error"
            />
          </Field._ControlDistributor>
        </Field._LabelDistributor>
      </Field._Container>
    ))(),
};
