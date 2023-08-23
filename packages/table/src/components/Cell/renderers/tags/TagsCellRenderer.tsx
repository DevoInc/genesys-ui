import * as React from 'react';
import { BaseTagProps, Tag } from '@devoinc/genesys-ui';
import { StyledCellTagGroup } from './StyledCellTagGroup';

interface TagsProps {
  value?: BaseTagProps[];
}

export const TagsCellRenderer: React.FC<TagsProps> = ({ value }) => {
  return (
    <StyledCellTagGroup colorScheme={'blend-base'}>
      {value.map((tag: BaseTagProps) => {
        return (
          <Tag
            colorScheme={tag.colorScheme}
            text={tag.text}
            icon={tag.icon}
            key={tag.text}
          />
        );
      })}
    </StyledCellTagGroup>
  );
};
