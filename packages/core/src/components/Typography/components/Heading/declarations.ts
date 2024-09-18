import { ITypography } from '../../declarations';

export interface ITypographyHeading
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['headingSize'];
}

export interface ITypographyHeadingStyled {
  $colorScheme?: ITypography['colorScheme'];
  $gutterBottom?: ITypography['gutterBottom'];
  $textAlign?: ITypography['textAlign'];
  $truncateLine?: ITypography['truncateLine'];
  $size?: ITypographyHeading['size'];
}
