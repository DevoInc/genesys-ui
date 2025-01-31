import * as React from 'react';
import { Field, type FieldRequiredMarkProps } from '../../../Field';

export interface FormRequiredMarkProps extends FieldRequiredMarkProps {}

export const FormRequiredMark: React.FC<FormRequiredMarkProps> = (
  requiredMarkProps,
) => <Field._RequiredMark {...requiredMarkProps} />;
