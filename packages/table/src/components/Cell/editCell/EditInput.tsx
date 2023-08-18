import React from 'react';
import { InputControl } from '@devoinc/genesys-ui';

export const EditInput = (value) => {
  const commonProps = {
    hideLabel: true,
    defaultValue: value,
  };

  return <InputControl type={'text'} aria-label={'hola'} {...commonProps} />;
};
