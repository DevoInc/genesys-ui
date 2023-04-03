import 'styled-components';
import { Brand } from '@devoinc/genesys-brand-devo';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Brand {}
}
