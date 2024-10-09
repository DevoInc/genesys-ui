import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  linkMixin,
  scrollbars,
  disabledMixin,
  getSpacingPropCss,
} from '@devoinc/genesys-ui';

import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import {
  fallCssKeyFrame,
  shakeCssKeyFrame,
  spinCssKeyFrame,
} from './keyframes';

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

export const StyledUploadFiles = styled(FilePond)<StyledUploadFilesProps>`
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
    const buttonTokens = theme.cmp.button;
    const borderWidth = cmpTokens.shape.border;
    const borderRadius = cmpTokens.shape.borderRadius;
    const evalFillSvgColor = colorTokens.body.base.replace('#', '%23');
    const bgImage = `url("data:image/svg+xml,%3Csvg aria-hidden='true' aria-label='GIDragDrop' stroke='currentColor' fill='${evalFillSvgColor}' stroke-width='0' data-name='GIDragDrop' data-tags='' viewBox='0 0 32 32' role='img' width='32px' height='32px' xmlns='http://www.w3.org/2000/svg' style='color: inherit; pointer-events: none; position: relative;'%3E%3Ctitle%3EGIDragDrop%3C/title%3E%3Cpath d='M15.506 5.503h-10.141c-0.278 0-0.506 0.225-0.506 0.506 0 0.278 0.225 0.506 0.506 0.506h10.141c0.278 0 0.506-0.225 0.506-0.506s-0.228-0.506-0.506-0.506z'%3E%3C/path%3E%3Cpath d='M15.506 8.531h-10.141c-0.278 0-0.506 0.225-0.506 0.506 0 0.278 0.225 0.506 0.506 0.506h10.141c0.278 0 0.506-0.225 0.506-0.506 0-0.278-0.228-0.506-0.506-0.506z'%3E%3C/path%3E%3Cpath d='M16.012 12.069c0-0.278-0.225-0.506-0.506-0.506h-10.141c-0.278 0-0.506 0.225-0.506 0.506 0 0.278 0.225 0.506 0.506 0.506h10.141c0.278-0.003 0.506-0.228 0.506-0.506z'%3E%3C/path%3E%3Cpath d='M5.366 14.594c-0.278 0-0.506 0.225-0.506 0.506 0 0.278 0.225 0.506 0.506 0.506h5.634c0.278 0 0.506-0.225 0.506-0.506 0-0.278-0.225-0.506-0.506-0.506h-5.634z'%3E%3C/path%3E%3Cpath d='M25.128 25.434c0.097 0 0.194-0.019 0.303-0.028 0-2.334 0.003-4.641-0.003-6.947 0-0.353-0.253-0.572-0.581-0.569-0.334 0.003-0.556 0.219-0.559 0.587-0.009 1.281-0.006 2.563-0.006 3.844 0 0.337 0 0.675 0 1.063-0.097-0.044-0.125-0.047-0.141-0.066-1.256-1.256-2.516-2.509-3.762-3.772l-0.956-0.956c0 0-0.259-0.247-0.344-0.331-2.7-2.7-0.697-0.697-3.397-3.397-0.441-0.441-0.747-0.5-1.034-0.206-0.284 0.291-0.219 0.588 0.228 1.034 4.306 4.306 3.906 3.906 8.212 8.213 0.1 0.1 0.191 0.206 0.347 0.378-0.259 0-0.409 0-0.559 0-1.447 0-2.891-0.003-4.337 0.003-0.516 0.003-0.809 0.422-0.594 0.831 0.141 0.272 0.394 0.322 0.678 0.319 2.169-0.003 4.337 0 6.506 0z'%3E%3C/path%3E%3Cpath d='M15.297 20.153c0.009-0.363-0.266-0.584-0.728-0.587-0.063 0-0.128 0-0.191 0-3.753 0-7.509 0.003-11.262 0-1.225 0-1.956-0.738-1.959-1.972-0.003-4.844-0.003-9.691 0-14.534 0-1.153 0.753-1.903 1.909-1.903 4.2 0 8.403 0 12.603 0v3.388c0 0.278 0.225 0.506 0.506 0.506h3.391c0.003 4.191 0 8.381-0.006 12.572 0 0.009 0 0.016 0 0.025l1.134 0.225c0.003-0.044 0.006-0.091 0.006-0.134 0.022-4.381 0.019-8.762 0.016-13.144 0-0.016 0.003-0.031 0.003-0.050 0-0.016 0-0.034-0.003-0.050 0-0.269 0-0.538 0-0.806v-0.597c0-0.356-0.219-0.575-0.353-0.706l-2.078-2.050c-0.109-0.106-0.313-0.325-0.675-0.325h-0.928c-0.144 0-0.288 0-0.428 0-0.025-0.003-0.053-0.006-0.081-0.006s-0.053 0.003-0.078 0.006c-4.369-0.013-8.738-0.009-13.106 0-1.731 0.003-2.975 1.25-2.978 2.981-0.013 4.909-0.013 9.816 0 14.725 0.003 1.762 1.278 2.997 3.044 3 2.587 0.003 5.175 0 7.762 0 0.147 0 0.294 0 0.453 0 0.006 0.125 0.016 0.197 0.016 0.272 0 0.622-0.006 1.244 0.003 1.866 0.006 0.353 0.234 0.591 0.553 0.603 0.325 0.012 0.566-0.216 0.591-0.559 0.009-0.153 0.003-0.303 0.003-0.456 0-0.566 0-1.131 0-1.722 0.753 0 1.45 0.003 2.147 0 0.441-0.006 0.706-0.219 0.716-0.566zM19.563 3.159v0.553h0.003c0 0.109 0 0.219 0 0.328h-2.884v-2.884c0.172 0 0.344 0 0.516 0v0h0.319l2.047 2.003z'%3E%3C/path%3E%3Cpath d='M31.475 14.797c0.359-0.028 0.534-0.278 0.509-0.916-0.038-0.606-0.35-1.266-0.913-1.803-0.319-0.303-0.656-0.319-0.903-0.059-0.244 0.253-0.212 0.588 0.103 0.897 0.341 0.334 0.531 0.731 0.572 1.203 0.038 0.475 0.256 0.706 0.631 0.678z'%3E%3C/path%3E%3Cpath d='M12.425 29c-0.019-0.328-0.247-0.478-0.506-0.512-0.369-0.006-0.631 0.231-0.631 0.572 0 0.913 0.359 1.672 1.059 2.256 0.253 0.212 0.575 0.169 0.784-0.059 0.2-0.219 0.213-0.572-0.022-0.788-0.431-0.403-0.65-0.884-0.684-1.469z'%3E%3C/path%3E%3Cpath d='M22.478 12.428c0.341 0.012 0.684 0.003 1.025 0.003 0 0 0 0 0 0.003 0.166 0 0.328 0 0.494 0 0.178 0 0.356 0.006 0.531-0.003 0.347-0.019 0.591-0.256 0.587-0.569 0-0.313-0.244-0.569-0.587-0.575-0.684-0.012-1.366-0.009-2.050 0-0.347 0.006-0.584 0.256-0.584 0.572 0 0.322 0.231 0.556 0.584 0.569z'%3E%3C/path%3E%3Cpath d='M31.994 25.559c0-0.341 0.009-0.684-0.003-1.025-0.012-0.353-0.256-0.587-0.572-0.581s-0.566 0.244-0.572 0.587c-0.012 0.684-0.012 1.366 0.003 2.050 0.006 0.341 0.269 0.587 0.575 0.584 0.313-0.003 0.553-0.244 0.566-0.591 0.016-0.344 0.006-0.684 0.003-1.025 0 0 0 0 0 0z'%3E%3C/path%3E%3Cpath d='M16.672 30.85c-0.328-0.009-0.659-0.003-0.988-0.003-0.341 0-0.684-0.009-1.025 0.003-0.35 0.012-0.591 0.244-0.6 0.559-0.009 0.334 0.228 0.578 0.603 0.584 0.672 0.009 1.341 0.009 2.013 0 0.353-0.006 0.594-0.241 0.603-0.553 0.009-0.325-0.244-0.581-0.606-0.591z'%3E%3C/path%3E%3Cpath d='M30.847 22.431c0.009 0.372 0.253 0.622 0.581 0.619 0.316-0.003 0.556-0.241 0.563-0.594 0.013-0.684 0.013-1.366 0-2.050-0.006-0.344-0.262-0.584-0.575-0.581s-0.556 0.247-0.569 0.594c-0.012 0.328-0.003 0.659-0.003 0.988 0.003 0.344-0.006 0.684 0.003 1.025z'%3E%3C/path%3E%3Cpath d='M31.434 15.709c-0.325-0.006-0.578 0.244-0.584 0.612-0.009 0.669-0.009 1.341 0 2.009 0.006 0.35 0.244 0.584 0.563 0.591 0.325 0.006 0.563-0.216 0.578-0.569 0.012-0.328 0.003-0.656 0.003-0.988 0 0 0 0 0.003 0 0-0.341 0.006-0.684-0.003-1.025-0.009-0.381-0.234-0.628-0.559-0.631z'%3E%3C/path%3E%3Cpath d='M31.984 28.569c-0.047-0.325-0.256-0.484-0.575-0.481-0.347 0.003-0.566 0.253-0.556 0.666 0.012 0.519-0.075 1-0.397 1.428-0.241 0.319-0.197 0.669 0.078 0.869 0.269 0.194 0.616 0.122 0.856-0.194 0.409-0.541 0.625-1.15 0.597-1.831 0-0.156 0.016-0.309-0.003-0.456z'%3E%3C/path%3E%3Cpath d='M27.581 12.431c0.353 0 0.709 0.009 1.063-0.003 0.35-0.012 0.587-0.25 0.591-0.563 0.003-0.316-0.234-0.572-0.578-0.578-0.681-0.012-1.366-0.012-2.047 0-0.353 0.006-0.581 0.244-0.584 0.566-0.003 0.331 0.216 0.559 0.572 0.575 0.325 0.012 0.656 0.003 0.984 0.003z'%3E%3C/path%3E%3Cpath d='M20.766 30.847c-0.656-0.006-1.316-0.009-1.972 0-0.375 0.006-0.609 0.244-0.603 0.584 0.006 0.331 0.222 0.547 0.587 0.563 0.341 0.012 0.684 0.003 1.025 0.003 0 0 0 0 0 0 0.328 0 0.659 0.009 0.988-0.003 0.372-0.012 0.619-0.253 0.613-0.581-0.012-0.328-0.259-0.559-0.637-0.566z'%3E%3C/path%3E%3Cpath d='M24.928 30.85c-0.681-0.012-1.366-0.012-2.047 0-0.35 0.006-0.572 0.25-0.569 0.578 0 0.328 0.219 0.55 0.581 0.563 0.341 0.013 0.681 0.003 1.025 0.003 0 0 0 0.003 0 0.003 0.328 0 0.656 0.006 0.988-0.003 0.375-0.009 0.616-0.244 0.613-0.578-0.009-0.319-0.238-0.559-0.591-0.566z'%3E%3C/path%3E%3Cpath d='M12.431 24.953c-0.012-0.356-0.234-0.578-0.563-0.584-0.325-0.003-0.572 0.219-0.578 0.569-0.012 0.681-0.012 1.366 0 2.047 0.006 0.356 0.238 0.578 0.566 0.584 0.328 0.003 0.563-0.216 0.575-0.569 0.012-0.341 0.003-0.681 0.003-1.025-0.003-0.337 0.006-0.678-0.003-1.022z'%3E%3C/path%3E%3Cpath d='M29.034 30.847c-0.669-0.009-1.341-0.009-2.009 0-0.372 0.006-0.606 0.253-0.597 0.591 0.009 0.325 0.231 0.541 0.594 0.55 0.328 0.009 0.656 0.003 0.984 0.003 0.341 0 0.681 0.009 1.025-0.003 0.369-0.012 0.587-0.222 0.594-0.55 0.009-0.337-0.222-0.584-0.591-0.591z'%3E%3C/path%3E%3C/svg%3E")`;

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
    min-height: ${showLabelIcon ? `calc(${minHeight} + 3.2rem)` : minHeight};
    // max-height limited in case of a great number of files upload
    max-height: ${maxHeight || '27rem'};
    height: ${height};
    background-color: ${cmpTokens.color.background};
      ${
        showLabelIcon &&
        css`
          background-image: ${bgImage};
          background-repeat: no-repeat;
          background-clip: border-box;
          background-position: center 1.4rem;
        `
      }

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
    &--credits {
      display: none;
    }
    
    /* Assistant - FilePond */

    &--assistant {
      position: absolute;
      overflow: hidden;
      height: 0.1rem;
      width: 0.1rem;
      padding: 0;
      border: 0;
      clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
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

    ${
      disabled &&
      css`
        ${disabledMixin(theme)};
      `
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
        padding: ${showLabelIcon ? `${getSpacingPropCss(theme)('layout-md')} 0 1em 0` : '1em 0'} ;
        margin: 0;
        font-size: ${aliasTokens.typo.fontSize.body.md};
        line-height: ${aliasTokens.typo.lineHeight.body.md};
        font-weight: normal;
        text-align: center;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        padding-top: ${showLabelIcon ? getSpacingPropCss(theme)('layout-md') : null};
      }
    }

    /* Label - FilePond */

    &--label-action {
      ${linkMixin({ theme: theme, linkTokens })};
      ${
        disabled &&
        css`
          cursor: not-allowed;

          &:hover,
          &:focus,
          &:active {
            text-decoration: none;
          }
        `
      }
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
      line-height: inherit;
      background-color: ${buttonTokens.color.background.blendBase.enabled};
      background-image: none;
      outline: none;
      border: none;
      border-radius: ${buttonTokens.shape.borderRadius.full};
      will-change: transform, opacity;
      transition: background-color ease-in-out ${
        buttonTokens.mutation.transitionDuration
      };
      color: ${buttonTokens.color.text.blendBase.enabled};
      cursor: pointer;

      &.filepond--action-remove-item i {
        font-size: 0.9em;
      }

      &:hover,
      &:focus {
        background-color: ${buttonTokens.color.background.blendBase.hovered};
        color: ${buttonTokens.color.text.blendBase.hovered};
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
        font-size: 0.9em;
        line-height: 1.2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        color: ${colorTokens.heading.base};
      }

      .filepond--file-info-sub {
        font-size: 0.75em;
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
        font-size: 0.9em;
        line-height: 1.2;
        color: ${colorTokens.heading.base};
      }

      .filepond--file-status-sub {
        font-size: 0.75em;
        opacity: 1;
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
        height: 0.1rem;
        width: 0.1rem;
        padding: 0;
        border: 0;
        clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
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
      color: ${aliasTokens.color.text.body.base};
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

        span {
          line-height: 1;
        }
      }

      .filepond--progress-indicator {
        position: absolute;
        top: 0.74em;
        right: 0.7em;
        font-size: 0.9em;
        color: ${colorTokens.feedback.secondary.base};
        transform: scale(1.5);
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
        box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
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
        overflow-x: hidden;
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
      ${scrollbars({
        $cornerColor: cmpTokens.color.background,
        theme,
      })};
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
          height: 0.2rem;
          left: 0;
          right: 0;
          bottom: -0.1rem;
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
          height: 0.2rem;
          left: 0;
          right: 0;
          top: -0.1rem;
          background-color: inherit;
        }
      }

      &-center {
        height: 10rem !important;
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
      width: 1.625em;
      height: 1.625em;
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
        animation: ${fallCssKeyFrame} 0.5s 0.125s linear both;
      }

      ~ .filepond--file-info .filepond--file-info-sub,
      ~ .filepond--file-status .filepond--file-status-sub {
        opacity: 1;
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
    animation: ${shakeCssKeyFrame} 0.65s linear both;
  }

  /* Progress Indicator - Data - FilePond */

  [data-filepond-item-state*='busy'] .filepond--progress-indicator svg {
    animation: ${spinCssKeyFrame} 0.8s linear infinite;
  }

  /* Item Panel - Data - FilePond */

  .filepond--item-panel {
    background-color: ${bgSurface};
  }

  [data-filepond-item-state*='complete'] {
    .filepond--item-panel {
      background-color: ${bgTokens.success.weaker};
    }
    .filepond--file-info .filepond--file-info-main,
    .filepond--file-status .filepond--file-status-main {
      color: ${colorTokens.feedback.success.strong}
    }

    .filepond--file-info .filepond--file-info-sub,
    .filepond--file-status .filepond--file-status-sub {
      color: ${colorTokens.feedback.success.base}
    }
  }

  [data-filepond-item-state*='invalid'],
  [data-filepond-item-state*='error'] {
    .filepond--item-panel {
      background-color: ${bgTokens.error.weak};
    }
    .filepond--file-info .filepond--file-info-main,
    .filepond--file-status .filepond--file-status-main {
      color: ${colorTokens.feedback.error.strong}
    }

    .filepond--file-info .filepond--file-info-sub,
    .filepond--file-status .filepond--file-status-sub {
      color: ${colorTokens.feedback.error.base}
    }
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
    min-height: 7rem;
    max-height: 9rem;
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
      opacity: 1 !important;
      color: ${
        theme.meta.scheme === 'dark'
          ? aliasTokens.color.background.surface.blend.dark.stronger
          : aliasTokens.color.background.surface.blend.light.strongest
      };
    }

    &-success {
      mix-blend-mode: normal;
      color: ${aliasTokens.color.background.feedback.error.stronger};
    }

    &-failure {
      mix-blend-mode: normal;
      color: ${aliasTokens.color.background.feedback.error.weak};
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
    background: ${bgSurface};

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
      background-color: ${bgSurface};
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
