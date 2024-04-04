import { css, DefaultTheme } from 'styled-components';

export interface ICodeContainerMixin {
  readOnly?: boolean;
  bordered?: boolean;
  theme: DefaultTheme;
}

/**
 * Get the Editor container custom styles applied to a Box component.
 *
 * @return object with the css.
 */
export const codeContainerMixin = ({
  bordered,
  readOnly,
  theme,
}: ICodeContainerMixin) => css`
  position: relative;
  width: 100%;
  height: 100%;

  ${bordered &&
  css`
    border-width: ${theme.alias.fields.shape.borderSize.base};
    border-style: solid;
    border-color: ${readOnly
      ? theme.alias.fields.color.background.base.readonly
      : theme.alias.fields.color.border.base.enabled};
    border-radius: ${theme.alias.fields.shape.borderRadius};
  `}
`;
