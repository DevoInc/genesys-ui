export interface IParseParams {
  validFormats?: string[];
  i18n?: {
    [key: string]: string;
  };
}

export interface IParseDateParams extends IParseParams {
  i18n?: {
    invalidDate: string;
  };
}

export interface IParseRangeParams extends IParseParams {
  i18n?: {
    invertedOperators: string;
  };
}
