import { css } from 'styled-components';

export const getBorderPlacement = (position: string) => {
  const borderSize = '0.6rem';

  if (position?.includes('top')) {
    return css`
      padding-bottom: ${borderSize};

      &::before {
        bottom: 0;
        width: 100%;
        height: ${borderSize};
      }
    `;
  }
  if (position?.includes('right')) {
    return css`
      padding-left: ${borderSize};

      &::before {
        left: 0;
        width: ${borderSize};
        height: 100%;
      }
    `;
  }
  if (position?.includes('bottom')) {
    return css`
      padding-top: ${borderSize};

      &::before {
        top: 0;
        width: 100%;
        height: ${borderSize};
      }
    `;
  }
  if (position?.includes('left')) {
    return css`
      padding-right: ${borderSize};

      &::before {
        right: 0;
        width: ${borderSize};
        width: ${borderSize};
        height: 100%;
      }
    `;
  }
  return null;
};
