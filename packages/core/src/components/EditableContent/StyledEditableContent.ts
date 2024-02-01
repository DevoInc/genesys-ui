import styled, { css } from 'styled-components';
import icons from '@devoinc/genesys-icons/dist/icon-variables';

import { StyledPolymorphicProps } from '../../declarations';

import { iconFontMixin, pseudoElementMixin } from '../../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledEditableContentProps extends StyledPolymorphicProps {}

export const StyledEditableContent = styled.div<StyledEditableContentProps>`
  ${({ theme }) => {
  const iconSize = theme.alias.typo.fontSize.icon.xxxs;
  return css`
      position: relative;
      transition: all ease ${theme.alias.mutation.transitionDuration.opacity.sm};
      border-radius: ${theme.alias.shape.borderRadius.elevated};

      &:hover {
        background-color: ${theme.alias.color.background.surface.base.raised};
      }

      &:focus-visible {
        box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
        outline: none;
        background-color: transparent;
      }

      &::after {
        ${pseudoElementMixin({
    content: `'${icons.pencil_edit || ''}'`,
  })};
        ${iconFontMixin()};
        right: calc(${iconSize} / 2 * -1);
        top: calc(${iconSize} / 2 * -1);
        transition: opacity ease
          ${theme.alias.mutation.transitionDuration.opacity.md};
        font-size: ${iconSize};
        color: ${theme.alias.color.text.body.weaker};
      }

      &:focus::after {
        opacity: 0;
      }
    `;
}}
`;
