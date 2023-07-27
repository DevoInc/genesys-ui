import * as React from 'react';
import { css, useTheme } from 'styled-components';

// components
import { Label } from '../Label';

// declarations
import { LabelPosition } from './declarations';
import { TagProps } from '../Tag';
import {
  Flex,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../';

// helpers
import { tagGroupFlexSpacingMixin, tagGroupLabelMixin } from './helpers';
import { FlexItem } from '../Flex/subcomponents';

export interface TagGroupProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<TagProps, 'size'> {
  children: React.ReactElement<TagProps>[];
  /** Position of the label text relative to the tags */
  labelPosition?: LabelPosition;
  /** Text within the label. (aria-label is the same as Label) */
  labelText?: string;
}

export const InternalTagGroup: React.FC<TagGroupProps> = ({
  children,
  labelPosition = 'left',
  labelText,
  size = 'md',
  styles,
  ...restNativeProps
}) => {
  const theme = useTheme();
  const itemTokens = theme.cmp.tagGroup.item;
  return (
    <Flex
      {...restNativeProps}
      alignItems={labelPosition === 'left' ? 'center' : null}
      inline
      flexDirection={labelPosition === 'left' ? 'row' : 'column'}
      styles={styles}
    >
      {labelText && (
        <Label
          styles={tagGroupLabelMixin({ size, labelPosition, theme })}
          size={size}
        >
          {labelText}
        </Label>
      )}
      <Flex
        alignItems="center"
        flexWrap="wrap"
        inline
        role="group"
        styles={tagGroupFlexSpacingMixin({ size, theme })}
      >
        {children?.map((child, idx) =>
          React.cloneElement(child, {
            key: idx,
            size: size,
          })
        )}
      </Flex>
    </Flex>
  );
};

export const TagGroup = InternalTagGroup as typeof InternalTagGroup & {
  Container: typeof FlexItem;
};
