import 'styled-components';
import { Brand } from '@devoinc/genesys-brand-devo';

// Include own theme interface in styled-components declarations.
declare module 'styled-components' {
  export interface DefaultTheme extends Brand {}
}
