import styled, { css } from 'styled-components';

import { IFieldsCombinerItemStyled } from './declarations';

export const StyledFieldsCombinerItem = styled.div<IFieldsCombinerItemStyled>`
  ${({
    $combinedButtons,
    $size,
    $width,
    $order,
    theme,
    $componentType,
    $status,
  }) => {
    const cmpTokens = theme.cmp.fieldsCombiner.item;
    const height = cmpTokens.size.height[$size];
    const checkWidth = theme.cmp.button.size.square[$size];
    const borderRadius = theme.alias.fields.shape.borderRadius;

    return css`
      position: relative;
      height: ${height};
      width: ${$width};

      ${$componentType === 'button' || $componentType === 'check'
        ? css`
            z-index: 1;
            flex: 0 auto;
          `
        : css`
            flex: ${!$width && '1 1 100%'};
          `}

      ${$componentType === 'check' &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        border-style: solid;
        border-color: ${cmpTokens.color.border.checkType[$status]};
        border-width: ${cmpTokens.shape.checkType.borderSize};
        border-radius: ${borderRadius};
        width: ${checkWidth};
        padding: 0;
        background-color: ${cmpTokens.color.background.checkType};

        ${$order === 'first'
          ? css`
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              border-right-width: 0;
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left-width: 0;
            `}

        &:focus {
          box-shadow: none;
        }
      `}

      ${!$combinedButtons &&
      css`
        // Right elem
        ${$order !== 'first' &&
        css`
          margin-left: -0.1rem;
        `}

        // states
        &:hover {
          z-index: 2;
        }
      `};

      // parent hover state
      ${$componentType === 'check' &&
      css`
        *:hover > & {
          border-color: ${cmpTokens.color.border.checkType.hovered};
        }
      `}
    `;
  }};
`;
