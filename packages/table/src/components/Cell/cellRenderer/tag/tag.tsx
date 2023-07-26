import * as React from 'react';

import { FeedbackColorScheme, Tag } from '@devoinc/genesys-ui';

interface TagProps {
  value?: {
    colorScheme: FeedbackColorScheme;
    text: string;
    icon: string;
  };
}

export const RenderCellContentTag: React.FC<TagProps> = ({ value }) => (
  <Tag colorScheme={value.colorScheme} text={value.text} icon={value.icon} />
);
