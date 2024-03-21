// global constants
import {
  TBodyColorScheme,
  TUIColorScheme,
  TUIStrongColorScheme,
  TUIWeakColorScheme,
  TCommonSpacing,
  TCmpSpacing,
} from '../../declarations';

// GUTTER BOTTOM - PROP VALUES - CONSTANTS ---------------------------------- //

export type GutterBottom = TCommonSpacing | TCmpSpacing;

// HEADING_TYPE - PROP VALUES - CONSTANTS ----------------------------------- //

export type HeadingType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hero-sm'
  | 'hero-md'
  | 'hero-lg'
  | 'overline-sm'
  | 'overline-md'
  | 'overline-lg';

// LIST STYLE - PROP VALUES - CONSTANTS ------------------------------------- //

export type ListStyle = 'none' | 'ordered' | 'unordered';

// TYPO_CATEGORIES - CONSTANTS ---------------------------------------------- //

export type TypoCategories =
  | 'action'
  | 'body'
  | 'overline'
  | 'heading'
  | 'hero'
  | 'lead'
  | 'mono';

// TYPO_COLOR_SCHEME - PROP VALUES - CONSTANTS ------------------------------ //

export type TypoColorScheme =
  | TBodyColorScheme
  | TUIColorScheme
  | TUIStrongColorScheme
  | TUIWeakColorScheme;
