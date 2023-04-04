import * as React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import icons from '@devoinc/genesys-icons/dist/icon-variables';
import { linkMixin, scrollbars, disabledMixin } from '@devoinc/genesys-ui';

import { spin, fall, shake } from './keyframes';

import {
  FilePond,
  FilePondProps as FilePondAllProps,
  registerPlugin,
} from 'react-filepond';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// Register the plugins
registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginFileValidateSize);

export interface StyledUploadFilesProps {
  /** Height for the box */
  height?: React.CSSProperties['height'];
  /** Max-height for the box */
  maxHeight?: React.CSSProperties['maxHeight'];
  /** Whether to show the upload icon inside the component */
  showLabelIcon?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FilePondProps extends FilePondAllProps {}

export const StyledUploadFiles = styled((props) => (
  <FilePond {...props} />
))<StyledUploadFilesProps>`
  ${({ disabled, height, maxHeight, showLabelIcon, theme }) => {
    const aliasTokens = theme.alias;
    const typoTokens = aliasTokens.typographies.typo;
    const spacingTokens = aliasTokens.space;
    const minHeight = aliasTokens.size.height.surface.md;
    const bgTokens = aliasTokens.color.background.feedback;
    const colorTokens = aliasTokens.color.text;
    const bgSurface = aliasTokens.color.background.surface.base.base;
    const linkTokens = theme.cmp.link;
    const cmpTokens = theme.cmp.uploadFiles;
    const borderWidth = cmpTokens.shape.border;
    const borderRadius = cmpTokens.shape.borderRadius;

    return css`
  /* -----------------------------------------------------------------------------
                              ROOT -  FILEPOND
----------------------------------------------------------------------------- */

  --border-width: 2px;

  &.filepond--root {
    margin: ${borderWidth};
    /* layout*/
    box-sizing: border-box;
    position: relative;
    padding-top: 1em;
    /* base font size for whole component */
    font-size: ${typoTokens.fontSize.body.md};
    /* base line height */
    line-height: ${typoTokens.lineHeight.body.md};
    /* will increase font weight a bit on Safari */
    text-align: left;
    text-rendering: optimizeLegibility;
    direction: ltr;
    contain: layout style size;
    min-height: ${minHeight};
    // max-height limited in case of a great number of files upload
    max-height: ${maxHeight || '24rem'};
    height: ${height};
    background-color: ${cmpTokens.color.background};

    &::before {
      content: '';
      position: absolute;
      top: calc(-1 * ${borderWidth});
      left: calc(-1 * ${borderWidth});
      right: calc(-1 * ${borderWidth});
      bottom: calc(-1 * (${borderWidth}));
      border: ${borderWidth} dashed ${cmpTokens.color.border};
      border-radius: ${borderRadius};
    }

    * {
      font-size: inherit;
      box-sizing: inherit;
      line-height: inherit;
    }

    > .filepond--panel {
      z-index: 2;
    }
    
    ${
      disabled &&
      css`
        ${disabledMixin(theme)};
      `
    }
  }

  /* -----------------------------------------------------------------------------
                                   FILEPOND
----------------------------------------------------------------------------- */

  .filepond {
    /* Assistant - FilePond */

    &--assistant {
      position: absolute;
      overflow: hidden;
      height: 1px;
      width: 1px;
      padding: 0;
      border: 0;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    /* Browser - FilePond */

    &--browser {
      position: absolute;
      margin: 0;
      padding: 0;
      left: 1em;
      top: 1.75em;
      width: calc(100% - 2em);
      opacity: 0;
      font-size: 0;
      z-index: 1;
    }

    /* Credits - FilePond */

    &--credits {
      opacity: 0;
    }

    /* Drip - FilePond */

    &--drip {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      opacity: 0.3;
      pointer-events: none;
      border-radius: ${borderRadius};
      background: rgba(0, 0, 0, 0.01);
      z-index: 3;
    }

    &--drip-blob {
      position: absolute;
      transform-origin: center center;
      top: 0;
      left: 0;
      width: 8em;
      height: 8em;
      margin-left: -4em;
      margin-top: -4em;
      background-color: ${bgTokens.primary.base};
      border-radius: 50%;
      will-change: transform, opacity;
    }

    /* Drop - FilePond */

    &--drop-label {
      position: absolute;
      left: 1em;
      right: 1em;
      top: 0;
      margin: 0;
      color: ${colorTokens.body.base};
      will-change: transform, opacity;
      z-index: 5;

      label {
        display: block;
        padding: 1em 0;
        margin: 0;
        cursor: default;
        font-size: 1em;
        font-weight: normal;
        text-align: center;
        line-height: 1.5;
        cursor: ${disabled && 'not-allowed'};
        
        ${
          showLabelIcon &&
          css`
            &::before {
              content: '${icons.drag_drop}';
              position: relative;
              display: block;
              font-family: 'gi', sans-serif;
              font-size: 3rem;
              line-height: 1.5;
            }
          `
        }
      }
    }

    /* Label - FilePond */

    &--label-action {
      ${linkMixin({ theme: theme, linkTokens })};
    }

    /* File Action Button - FilePond */

    &--file-action-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 1.625em;
      height: 1.625em;
      font-size: 1em;
      font-family: inherit;
      color: ${theme.onSurface}; 
      line-height: inherit;
      background-color: ${rgba(bgSurface, 0.75)};
      background-image: none;
      outline: none;
      border: none;
      border-radius: 50%;
      will-change: transform, opacity;
      transition: background-color ease-in-out 0.3s;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }

      i {
        font-weight: bold;
      }

      &.filepond--action-remove-item i {
        font-size: 0.9em;
      }

      &:hover,
      &:focus {
        background-color: ${bgSurface};
      }
    }

    /* File Info - FilePond */

    &--file-info {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      margin: 0 ${spacingTokens.cmp.xxs} 0 0;
      min-width: 0;
      will-change: transform, opacity;
      pointer-events: none;
      user-select: none;

      * {
        margin: 0;
      }

      .filepond--file-info-main {
        font-size: 0.75em;
        line-height: 1.2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }

      .filepond--file-info-sub {
        //margin-top: 0.2em;
        font-size: 0.625em;
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
        white-space: nowrap;
      }

      .filepond--file-info-sub:empty {
        display: none;
      }
    }

    /* File Status - FilePond */

    &--file-status {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
      min-width: 2.25em;
      text-align: right;
      will-change: transform, opacity;
      pointer-events: none;
      user-select: none;

      * {
        margin: 0;
        white-space: nowrap;
      }

      .filepond--file-status-main {
        font-size: 0.75em;
        line-height: 1.2;
      }

      .filepond--file-status-sub {
        //margin-top: 0.2em;
        font-size: 0.625em;
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
      }
    }

    /* File Wrapper - FilePond */

    &--file-wrapper {
      border: none;
      margin: 0;
      padding: 0;
      min-width: 0;
      height: 100%;

      > legend {
        position: absolute;
        overflow: hidden;
        height: 1px;
        width: 1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        white-space: nowrap;
      }
    }

    /* File - FilePond */

    &--file {
      position: static;
      display: flex;
      height: 100%;
      align-items: flex-start;
      padding: 0.5625em 0.5625em;
      color: ${aliasTokens.color.text.body.inverse};
      border-radius: ${borderRadius};

      .filepond--file-status {
        margin-left: auto;
        margin-right: 2.25em;
      }

      .filepond--processing-complete-indicator {
        pointer-events: none;
        user-select: none;
        z-index: 2;
      }

      .filepond--processing-complete-indicator,
      .filepond--file-action-button {
        position: absolute;
      }

      .filepond--progress-indicator {
        position: absolute;
        top: 0.85em;
        right: 0.9em;
        font-size: 0.9em;
        color: ${colorTokens.feedback.primary.base};
      }

      .filepond--action-remove-item {
        left: 0.5625em;
      }

      .filepond--processing-complete-indicator,
      .filepond--file-action-button:not(.filepond--action-remove-item) {
        right: 0.5625em;
      }
    }

    /* Hopper - FilePond */

    &--hopper[data-hopper-state='drag-over'] > * {
      pointer-events: none;
    }

    /* Progress Indicator - FilePond */

    &--progress-indicator {
      z-index: 103;
    }

    /* File Action Button - FilePond */

    &--file-action-button {
      z-index: 102;
    }

    /* File Status - FilePond */

    &--file-status {
      z-index: 101;
    }

    /* File Info - FilePond */

    &--file-info {
      z-index: 100;
    }

    /* Item - FilePond */

    &--item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 0;
      margin: 0 0 0.5em 0;
      will-change: transform, opacity;

      > .filepond--panel {
        z-index: 1;
      }

      > .filepond--panel .filepond--panel-bottom {
        box-shadow: 0 0.0625em 0.125em -0.0625em rgba(0, 0, 0, 0.25);
      }

      > .filepond--file-wrapper {
        position: relative;
        z-index: 2;
      }
    }

    /* Item Panel - FilePond */

    &--item-panel {
      background-color: ${cmpTokens.itemPanel.color.background.base};
      border-radius: ${borderRadius};
      transition: background-color 0.25s;
    }

    /* List Scroller - FilePond */

    &--list-scroller {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-top: 1em;
      margin-bottom: 1em;
      will-change: transform;
      z-index: 6;

      &[data-state='overflow'] {
        overflow-y: scroll;
        overflow-x: visible;
        -webkit-overflow-scrolling: touch;
      }

      &[data-state='overflow'] .filepond--list {
        bottom: 0;
        right: 0;
      }

      &::-webkit-scrollbar {
        background: transparent;
      }

      &::-webkit-scrollbar:vertical {
        width: 1em;
      }

      &::-webkit-scrollbar:horizontal {
        height: 0;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 99999px;
        border: 0.3125em solid transparent;
        background-clip: content-box;
      }

      // SCROLLBAR
      ${scrollbars({ theme })}; //TODO: Fix this styles

    }

    /* List - FilePond */

    &--list {
      position: absolute;
      top: 0;
      left: 1em;
      right: 1em;
      margin: 0;
      padding: 0;
      list-style-type: none;
      will-change: transform;
    }

    /* Panel Root - FilePond */

    &--panel-root {
      border-radius: ${borderRadius};
      background-color: ${cmpTokens.color.background};
    }

    /* Panel - FilePond */

    &--panel {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      margin: 0;
      height: auto !important;
      pointer-events: none;

      &[data-scalable='true'] {
        transform-style: preserve-3d;
        background-color: transparent !important;
        border: none !important;
      }

      &[data-scalable='false'] {
        bottom: 0;
      }

      &[data-scalable='false'] > div {
        display: none;
      }

      &-top,
      &-bottom,
      &-center {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
      }

      &-top,
      &-bottom {
        height: 0.5em;
      }

      &-top {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        border-bottom: none !important;

        &::after {
          content: '';
          position: absolute;
          height: 2px;
          left: 0;
          right: 0;
          bottom: -1px;
          background-color: inherit;
        }
      }

      &-center,
      &-bottom {
        will-change: transform;
        backface-visibility: hidden;
        transform-origin: left top;
        transform: translate3d(0, 0.5em, 0);
      }

      &-bottom {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
        border-top: none !important;

        &::before {
          content: '';
          position: absolute;
          height: 2px;
          left: 0;
          right: 0;
          top: -1px;
          background-color: inherit;
        }
      }

      &-center {
        height: 100px !important;
        border-top: none !important;
        border-bottom: none !important;
        border-radius: 0 !important;

        &:not([style]) {
          visibility: hidden;
        }
      }
    }

    /* Progress Indicator - FilePond */

    &--progress-indicator {
      position: static;
      width: 1.25em;
      height: 1.25em;
      color: ${aliasTokens.color.text.body.inverse};
      margin: 0;
      pointer-events: none;
      will-change: transform, opacity;

      svg {
        width: 100%;
        height: 100%;
      }

      path {
        fill: none;
        stroke: currentColor;
      }
    }
  }

  /* -----------------------------------------------------------------------------
                                 DATA - FILEPOND
----------------------------------------------------------------------------- */

  /* File Info - Data - FilePond */

  [data-filepond-item-state='cancelled'] .filepond--file-info,
  [data-filepond-item-state*='invalid'] .filepond--file-info,
  [data-filepond-item-state*='error'] .filepond--file-info {
    margin-right: 2.25em;
  }

  /* Revert Item Processing and Files - Data - FilePond */

  [data-filepond-item-state='processing-complete'] {
    .filepond--action-revert-item-processing {
      svg {
        animation: ${fall} 0.5s 0.125s linear both;
      }

      ~ .filepond--file-info .filepond--file-info-sub,
      ~ .filepond--file-status .filepond--file-status-sub {
        opacity: 0.5;
      }
    }

    .filepond--file-info-sub,
    .filepond--file-status-sub {
      opacity: 0;
    }
  }

  /* Panel and Wrapper - Data - FilePond */

  [data-filepond-item-state*='invalid'] .filepond--panel,
  [data-filepond-item-state*='invalid'] .filepond--file-wrapper,
  [data-filepond-item-state*='error'] .filepond--panel,
  [data-filepond-item-state*='error'] .filepond--file-wrapper {
    animation: ${shake} 0.65s linear both;
  }

  /* Progress Indicator - Data - FilePond */

  [data-filepond-item-state*='busy'] .filepond--progress-indicator svg {
    animation: ${spin} 0.8s linear infinite;
  }

  /* Item Panel - Data - FilePond */

  [data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: ${bgTokens.success.strong};
  }

  [data-filepond-item-state*='invalid'] .filepond--item-panel,
  [data-filepond-item-state*='error'] .filepond--item-panel {
    background-color: ${bgTokens.error.strong};
  }

  /* -----------------------------------------------------------------------------
*                                                                              *
*                             IMAGE - FILEPOND                                 *
*                                                                              *
* --------------------------------------------------------------------------- */

  .filepond--image-preview-markup {
    position: absolute;
    left: 0;
    top: 0;
  }

  .filepond--image-preview-wrapper {
    z-index: 2;
  }

  .filepond--image-preview-overlay {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 5rem;
    max-height: 7rem;
    margin: 0;
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    svg {
      width: 100%;
      height: auto;
      color: inherit;
      max-height: inherit;
    }

    &-idle {
      mix-blend-mode: multiply;
      color: rgba(40, 40, 40, 0.85);
    }

    &-success {
      mix-blend-mode: normal;
      color: ${colorTokens.feedback.success.strong};
    }

    &-failure {
      mix-blend-mode: normal;
      color: ${colorTokens.feedback.error.strong};
    }

  }

  /* disable for Safari as mix-blend-mode causes the overflow:hidden of the parent container to not work */
  @supports (-webkit-marquee-repetition: infinite) and
    ((-o-object-fit: fill) or (object-fit: fill)) {
    .filepond--image-preview-overlay-idle {
      mix-blend-mode: normal;
    }
  }

  /* Preview Wrapper - FilePond Image */

  .filepond--image-preview-wrapper {
    /* no interaction */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* have preview fill up all available space */
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    margin: 0;

    /* radius is .05em less to prevent the panel background color from shining through */
    border-radius: ${borderRadius};
    overflow: hidden;

    /* this seems to prevent Chrome from redrawing this layer constantly */
    background: rgba(0, 0, 0, 0.01);
  }

  /* Preview - FilePond Image */


  .filepond--image-preview {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex; /* this aligns the graphic vertically if the panel is higher than the image */
    align-items: center;
    height: 100%;
    width: 100%;
    pointer-events: none;
    background: #222;

    /* will be animated */
    will-change: transform, opacity;
  }

  /* Clip - FilePond Image */

  .filepond--image-clip {
    position: relative;
    overflow: hidden;
    margin: 0 auto;

    /* transparency indicator (currently only supports grid or basic color) */

    &[data-transparency-indicator='grid'] img,
    &[data-transparency-indicator='grid'] canvas {
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%23eee'%3E%3Cpath d='M0 0 H50 V50 H0'/%3E%3Cpath d='M50 50 H100 V100 H50'/%3E%3C/svg%3E");
      background-size: 1.25em 1.25em;
    }
  }

  .filepond--image-bitmap,
  .filepond--image-vector {
    position: absolute;
    left: 0;
    top: 0;
    will-change: transform;
  }

  .filepond--root{
    &[data-style-panel-layout~='integrated'] {
      .filepond--image-preview-wrapper {
        border-radius: 0;
      }

      .filepond--image-preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &[data-style-panel-layout~='circle'] {
      .filepond--image-preview-wrapper {
        border-radius: 99999rem;
      }

      .filepond--image-preview-overlay {
        top: auto;
        bottom: 0;
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      }

      .filepond--file {
        .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {
          margin-bottom: 0.325em;
        }

        .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {
          margin-bottom: 0.325em;
        }

        &[data-align*='left'] {
          left: calc(50% - 3em);
        }

        &[data-align*='right'] {
          right: calc(50% - 3em);
        }
      }

      .filepond--progress-indicator[data-align*='bottom'] {
        &[data-align*='left'],
        &[data-align*='right'] {
          margin-bottom: calc(0.325em + 0.1875em);
        }
      }

      .filepond--progress-indicator[data-align*='bottom'][data-align*='center'] {
        margin-top: 0;
        margin-bottom: 0.1875em;
        margin-left: 0.1875em;
      }
  }
  `;
  }}
`;
