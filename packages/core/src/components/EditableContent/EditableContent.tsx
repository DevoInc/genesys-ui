import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import type {
  ContainerEventAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { Icon } from '../Icon';
import { GIPencilEdit } from '@devoinc/genesys-icons';
import { StyledEditableContent } from './StyledEditableContent';

export interface EditableContentProps
  extends GlobalAttrProps,
    MouseEventAttrProps,
    FocusEventAttrProps,
    ContainerEventAttrProps,
    FieldEventAttrProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  children?: React.ReactNode;
}

export const EditableContent: React.FC<EditableContentProps> = React.forwardRef<
  HTMLDivElement,
  EditableContentProps
>(({ children, tooltip, styles, ...nativeProps }, ref) => {
  const theme = useTheme();
  const iconSize = theme.alias.typo.fontSize.icon.xxxs;
  return (
    <StyledEditableContent
      {...nativeProps}
      css={concat(
        css`
          &:focus > svg {
            opacity: 0;
          }
        `,
        styles,
      )}
      contentEditable
      ref={ref}
      title={tooltip}
    >
      {children}
      <Icon
        size={iconSize}
        color={theme.alias.color.text.body.weaker}
        style={{
          position: 'absolute',
          top: `calc(${iconSize} / 2 * -1)`,
          right: `calc(${iconSize} / 2 * -1)`,
          transition: `opacity ease
          ${theme.alias.mutation.transitionDuration.opacity.md}`,
        }}
      >
        <GIPencilEdit />
      </Icon>
    </StyledEditableContent>
  );
});

EditableContent.displayName = 'EditableContent';
