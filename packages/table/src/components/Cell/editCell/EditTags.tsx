import * as React from 'react';
import { SelectControl } from '@devoinc/genesys-ui';
import { PropsValue } from 'react-select';

interface EditTagsProps {
  value: string[];
  onChange?: (newValue: string[]) => void;
}

export const EditTags: React.FC<EditTagsProps> = ({ value, onChange }) => {
  const [options, setOptions] = React.useState<string[]>(value);

  const onOptionSelect = (
    newOption: PropsValue<{ value: string; label: string }>
  ) => setOptions([...(Array.isArray(newOption) ? newOption : [newOption])]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => onChange?.(options), [options]);

  return (
    <SelectControl
      onChange={onOptionSelect}
      value={value.map((valueElement: string) => ({
        value: valueElement,
        label: valueElement,
      }))}
      creatable
      isMulti
      menuAppendToBody
    />
  );
};
