import * as React from 'react';
import { useTheme } from 'styled-components';
import { useFocusWithin } from 'ahooks';
import type { BasicTarget } from 'ahooks/lib/utils/domTarget';

import { GIPencilEdit } from '@devoinc/genesys-icons';

import type {
  IContainerEventAttrs,
  IFieldEventAttrs,
  IFocusEventAttrs,
  IGlobalAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { Icon } from '../Icon';
import { StyledEditableContent } from './StyledEditableContent';
import { StyledEditableContentWrapper } from './StyledEditableContentWrapper';

export interface EditableContentProps
  extends IGlobalAttrs,
    IMouseEventAttrs,
    IFocusEventAttrs,
    IContainerEventAttrs,
    IFieldEventAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss {
  children?: React.ReactNode;
}

export const EditableContent: React.FC<EditableContentProps> = React.forwardRef<
  HTMLDivElement,
  EditableContentProps
>(({ children, tooltip, style, ...nativeProps }, ref) => {
  // TODO: cmpTokens
  const theme = useTheme();
  const iconSize = theme.alias.typo.fontSize.icon.xxxs;
  const isFocusWithin = useFocusWithin(ref as BasicTarget);
  return (
    <StyledEditableContentWrapper>
      <StyledEditableContent
        {...nativeProps}
        css={style}
        contentEditable
        ref={ref}
        title={tooltip}
      >
        {children}
      </StyledEditableContent>
      {!isFocusWithin && (
        <Icon
          size={iconSize}
          color={theme.alias.color.text.body.weaker}
          style={{
            position: 'absolute',
            top: `calc(${iconSize} / 2 * -1)`,
            right: `calc(${iconSize} / 2 * -1)`,
            transition: `opacity ease ${theme.alias.mutation.transitionDuration.opacity.md}`,
          }}
        >
          <GIPencilEdit />
        </Icon>
      )}
    </StyledEditableContentWrapper>
  );
});

EditableContent.displayName = 'EditableContent';
