import 'styled-components';
import type { Brand } from '@devoinc/genesys-brand-devo';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Brand {}
}
