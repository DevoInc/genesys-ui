import 'styled-components';
import { Brand } from '@devoinc/genesys-brand-devo';

// Include own theme interface in styled-components declarations.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Brand {}
}
