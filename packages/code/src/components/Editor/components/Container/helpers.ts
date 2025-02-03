import { css, DefaultTheme } from 'styled-components';

export interface ICodeContainerMixin {
  $readOnly?: boolean;
  $bordered?: boolean;
  theme: DefaultTheme;
}

/**
 * Get the Editor container custom styles applied to a Box component.
 *
 * @return object with the css.
 */
export const codeContainerMixin = ({
  $bordered,
  $readOnly,
  theme,
}: ICodeContainerMixin) => {
  const cmpTokens = theme.cmp.editor;
  return css`
    position: relative;
    width: 100%;
    height: 100%;

    ${$bordered &&
    css`
      border-width: ${cmpTokens.shape.borderSize};
      border-style: solid;
      border-color: ${$readOnly
        ? cmpTokens.color.border.readOnly
        : cmpTokens.color.border.base};
      border-radius: ${cmpTokens.shape.borderRadius};
    `}
  `;
};
