import { DefaultTheme } from 'styled-components';

/**
 * Get the
 *
 * @param theme Object with all the design tokens
 * @return object with Panel component design tokens
 */
export const getPanelTokens = (theme: DefaultTheme) => theme.tokens.cmp.panel;
