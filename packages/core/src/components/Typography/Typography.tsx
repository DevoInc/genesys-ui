import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { getTypoVariantAndSizeFromFormat } from './utils';

import {
  Abbr,
  BlockQuote,
  Caption,
  CodeBlock,
  CodeInline,
  Deleted,
  Heading,
  Highlighted,
  Inserted,
  Italic,
  Lead,
  List,
  ListItem,
  Paragraph,
  Small,
  SrOnly,
  Strong,
  Sub,
  Sup,
  Underlined,
} from './components';

import {
  StyledTypography,
  type StyledTypographyProps,
} from './StyledTypography';

export interface TypographyProps
  extends Omit<StyledTypographyProps, 'size' | 'variant'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the typographic component */
  children?: React.ReactNode;
}

export const InternalTypography: React.FC<TypographyProps> = ({
  bold,
  colorScheme = 'base',
  format = 'body-md',
  gutterBottom,
  textAlign = 'left',
  truncateLine,
  children,
  style,
  tooltip,
  ...nativeProps
}) => {
  const variant = getTypoVariantAndSizeFromFormat(format).variant;
  const size = getTypoVariantAndSizeFromFormat(format).size;

  return (
    <StyledTypography
      {...nativeProps}
      bold={bold}
      colorScheme={colorScheme}
      css={style}
      truncateLine={truncateLine}
      gutterBottom={gutterBottom}
      size={size}
      textAlign={textAlign}
      title={tooltip}
      variant={variant}
    >
      {children}
    </StyledTypography>
  );
};

export const Typography = InternalTypography as typeof InternalTypography & {
  Abbr: typeof Abbr;
  BlockQuote: typeof BlockQuote;
  Caption: typeof Caption;
  CodeBlock: typeof CodeBlock;
  CodeInline: typeof CodeInline;
  Deleted: typeof Deleted;
  Heading: typeof Heading;
  Highlighted: typeof Highlighted;
  Inserted: typeof Inserted;
  Italic: typeof Italic;
  Lead: typeof Lead;
  List: typeof List;
  ListItem: typeof ListItem;
  Paragraph: typeof Paragraph;
  Small: typeof Small;
  SrOnly: typeof SrOnly;
  Strong: typeof Strong;
  Sub: typeof Sub;
  Sup: typeof Sup;
  Underlined: typeof Underlined;
};

Typography.Abbr = Abbr;
Typography.BlockQuote = BlockQuote;
Typography.Caption = Caption;
Typography.CodeBlock = CodeBlock;
Typography.CodeInline = CodeInline;
Typography.Deleted = Deleted;
Typography.Heading = Heading;
Typography.Highlighted = Highlighted;
Typography.Inserted = Inserted;
Typography.Italic = Italic;
Typography.Lead = Lead;
Typography.List = List;
Typography.ListItem = ListItem;
Typography.Paragraph = Paragraph;
Typography.Small = Small;
Typography.SrOnly = SrOnly;
Typography.Strong = Strong;
Typography.Sub = Sub;
Typography.Sup = Sup;
Typography.Underlined = Underlined;

InternalTypography.displayName = 'Typography';
Typography.BlockQuote.displayName = 'Typography.BlockQuote';
Typography.Heading.displayName = 'Typography.Heading';
Typography.Caption.displayName = 'Typography.Caption';
Typography.CodeBlock.displayName = 'Typography.CodeBlock';
Typography.Heading.displayName = 'Typography.Heading';
Typography.Lead.displayName = 'Typography.Lead';
Typography.List.displayName = 'Typography.List';
Typography.ListItem.displayName = 'Typography.ListItem';
Typography.Paragraph.displayName = 'Typography.Paragraph';
Typography.Abbr.displayName = 'Typography.Abbr';
Typography.CodeInline.displayName = 'Typography.CodeInline';
Typography.Deleted.displayName = 'Typography.Deleted';
Typography.Highlighted.displayName = 'Typography.Highlighted';
Typography.Inserted.displayName = 'Typography.Inserted';
Typography.Italic.displayName = 'Typography.Italic';
Typography.Small.displayName = 'Typography.Small';
Typography.SrOnly.displayName = 'Typography.SrOnly';
Typography.Strong.displayName = 'Typography.Strong';
Typography.Sub.displayName = 'Typography.Sub';
Typography.Sup.displayName = 'Typography.Sup';
Typography.Underlined.displayName = 'Typography.Underlined';
