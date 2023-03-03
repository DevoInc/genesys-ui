import 'styled-components';
import { Brand } from '@devoinc/genesys-brand-devo';

declare module 'styled-components' {
  export interface DefaultTheme {
    tokens: Brand;
  }
}
