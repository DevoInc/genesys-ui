import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { StyledInputControl } from '../InputControl/styled/StyledInputControl';
import { InputControl } from '../InputControl';

const meta: Meta<typeof Field> = {
  title: 'Components/Core/Form/Field',
  component: Field,
  args: {
    labelPosition: 'top',
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      defaultValue:
        'The sky calls to us a very small stage in a vast cosmic arena not a sunrise but a galaxyrise',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Base: Story = {
  args: {
    id: 'story-id',
    label: 'Label for story',
    children: (
      <StyledInputControl
        id="story-id"
        readOnly
        style={{
          alignItems: 'center',
          flex: '1 1 auto',
          display: 'flex',
          border: 'none',
        }}
      />
    ),
  },
};

export const BasicUsageWithHelper: Story = {
  name: 'Using an InputControl as child',
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
  name: 'Custom based in internal components',
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
        <Field._Helper
          message="This is the Field helper"
          styles="p {color: purple}"
        />
      </Field._Container>
    ))(),
};

export const AdvancedUsageWithValidation: Story = {
  tags: ['isHidden'],
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
            hideStatusIcon
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
  tags: ['isHidden'],
  render: () =>
    (() => (
      <Field._Container status="error">
        <Field._LabelDistributor>
          <Field._Label
            htmlFor="story-field"
            requiredMark={
              <Field._RequiredMark tooltip="This field is required" />
            }
            helper={
              <Field._FloatingHelper message="This is the Field floating validation helper" />
            }
          >
            Field label
          </Field._Label>
          <InputControl
            aria-label="Field label"
            hideStatusIcon
            id="story-field"
            status="error"
          />
        </Field._LabelDistributor>
      </Field._Container>
    ))(),
};

export const AdvancedUsageWithFloatingValidationHiddenLabel: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <Field._Container status="error">
        <Field._LabelDistributor>
          <Field._Label
            htmlFor="story-field"
            requiredMark={
              <Field._RequiredMark tooltip="This field is required" />
            }
          >
            Field label
          </Field._Label>
          <Field._ControlDistributor>
            <InputControl
              aria-label="Field label"
              hideStatusIcon
              id="story-field"
              status="error"
            />
            <Field._FloatingHelper message="This is the Field floating validation helper" />
          </Field._ControlDistributor>
        </Field._LabelDistributor>
      </Field._Container>
    ))(),
};
