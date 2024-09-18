import 'styled-components';
import type { Brand } from '@devoinc/genesys-tokens-types';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export interface DefaultTheme extends Brand {}
}
