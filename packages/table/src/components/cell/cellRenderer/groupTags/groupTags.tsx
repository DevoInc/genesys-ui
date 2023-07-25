import * as React from 'react';
import { FeedbackColorScheme, Tag } from '@devoinc/genesys-ui';

import { StyledCellTagGroup } from './StyledCellTagGroup';

interface GroupTagsProps {
  value?: {
    colorScheme: FeedbackColorScheme;
    text: string;
    icon: string;
  }[];
}

export const RenderCellContentGroupTags: React.FC<GroupTagsProps> = ({
  value,
}) => {
  return (
    <StyledCellTagGroup colorScheme={'blend-base'}>
      {value.map((tag) => {
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
