import { css, type DefaultTheme } from 'styled-components';

export const getBorderPlacement = (position: string, theme: DefaultTheme) => {
  const borderSize = '0.6rem';
  const borderRadius = theme.cmp.panel.shape.borderRadius;

  if (position?.includes('top')) {
    return css`
      padding-bottom: ${borderSize};

      &::after {
        bottom: 0;
        width: 100%;
        height: ${borderSize};
        border-radius: 0 0 ${borderRadius} ${borderRadius};
      }
    `;
  }
  if (position?.includes('right')) {
    return css`
      padding-left: ${borderSize};

      &::after {
        left: 0;
        width: ${borderSize};
        height: 100%;
        border-radius: ${borderRadius} 0 0 ${borderRadius};
      }
    `;
  }
  if (position?.includes('bottom')) {
    return css`
      padding-top: ${borderSize};

      &::after {
        top: 0;
        width: 100%;
        height: ${borderSize};
        border-radius: ${borderRadius} ${borderRadius} 0 0;
      }
    `;
  }
  if (position?.includes('left')) {
    return css`
      padding-right: ${borderSize};

      &::after {
        right: 0;
        width: ${borderSize};
        width: ${borderSize};
        height: 100%;
        border-radius: 0 ${borderRadius} ${borderRadius} 0;
      }
    `;
  }
  return null;
};
