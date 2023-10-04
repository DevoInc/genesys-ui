import * as React from 'react';
import { BaseTagProps, Tag } from '@devoinc/genesys-ui';
import { StyledTags } from './StyledTags';

interface TagsProps {
  value?: BaseTagProps[];
}

export const TagsRenderer: React.FC<TagsProps> = ({ value }) => {
  const realValue = value || [];
  return (
    <StyledTags>
      {realValue.map((tag: BaseTagProps) => {
        return (
          <Tag
            colorScheme={tag.colorScheme}
            text={tag.text}
            icon={tag.icon}
            key={tag.text}
          />
        );
      })}
    </StyledTags>
  );
};
