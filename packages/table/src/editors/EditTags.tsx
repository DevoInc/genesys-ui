import * as React from 'react';
import { SelectControl, SelectOption, TagProps } from '@devoinc/genesys-ui';
import { PropsValue } from 'react-select';
import { EditorFloatingWrapper } from './components';

interface EditTagsProps {
  value: TagProps[];
  onChange?: (newValue: TagProps[]) => void;
}

const getTagsFromOptions = (options: PropsValue<SelectOption>): TagProps[] =>
  (Array.isArray(options) ? options : [options]).map(
    (option: SelectOption) => ({ text: option.value.toString() }),
  );

const getOptionsFromTags = (tags: TagProps[]) =>
  tags.map((tag: TagProps) => ({ value: tag.text, label: tag.text }));

export const EditTags: React.FC<EditTagsProps> = ({ value, onChange }) => {
  const [options, setOptions] = React.useState<TagProps[]>(value);

  const onOptionSelect = (
    newOption: PropsValue<{ value: string; label: string }>,
  ) => setOptions(getTagsFromOptions(newOption));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => onChange?.(options), [options]);

  return (
    <EditorFloatingWrapper>
      <SelectControl
        onChange={onOptionSelect}
        value={getOptionsFromTags(value)}
        creatable
        isMulti
        menuAppendToBody
        options={getOptionsFromTags(value)}
        autoFocus
      />
    </EditorFloatingWrapper>
  );
};
