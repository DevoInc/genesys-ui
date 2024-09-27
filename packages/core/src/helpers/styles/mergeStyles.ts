import { css, CSSProp } from 'styled-components';

export const mergeStyles = (...styles: CSSProp[]) => css`
  ${styles.filter((x) => !!x)}
`;
