import 'styled-components';
import { Brand } from '@devoinc/genesys-brand-devo';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export interface DefaultTheme extends Brand {}
}
