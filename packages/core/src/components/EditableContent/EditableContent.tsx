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
import type { Resolve } from '../../typeFunctions';

export interface EditableContentProps
  extends IGlobalAttrs,
    IMouseEventAttrs,
    IFocusEventAttrs,
    IContainerEventAttrs,
    IFieldEventAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss {
  children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export const EditableContent: React.FC<Resolve<EditableContentProps>> = ({
  children,
  tooltip,
  style,
  ref,
  ...nativeProps
}) => {
  const theme = useTheme();
  const iconTokens = theme.cmp.editableContent.icon;
  const iconSize = iconTokens.size.square.base;
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
          color={iconTokens.color.fill.base}
          style={{
            position: 'absolute',
            top: `calc(${iconSize} / 2 * -1)`,
            right: `calc(${iconSize} / 2 * -1)`,
            transition: `opacity ease ${iconTokens.mutation.transitionDuration}`,
          }}
        >
          <GIPencilEdit />
        </Icon>
      )}
    </StyledEditableContentWrapper>
  );
};
