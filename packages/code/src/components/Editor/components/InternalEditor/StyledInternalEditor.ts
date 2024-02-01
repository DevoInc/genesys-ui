import type * as monaco from 'monaco-editor-core';
import { type StyledOverloadCssProps } from '@devoinc/genesys-ui';
import styled, { css } from 'styled-components';

export interface StyledInternalEditorProps extends StyledOverloadCssProps {
  $height: string | number;
  $width: string | number;
  readOnly?: boolean;
  bordered?: boolean;
  minimap?: boolean;
  lineNumbers?: monaco.editor.IStandaloneEditorConstructionOptions['lineNumbers'];
}

export const StyledInternalEditor = styled.div<StyledInternalEditorProps>`
  ${({
  $height,
  lineNumbers = true,
  readOnly,
  $width,
  theme,
  bordered,
  minimap,
}) => css`
    // Variables - Smart Editor - Style

    --read-only-bg-color: ${theme.alias.fields.color.background.base.readonly};
    --border-radius: ${theme.alias.fields.shape.borderRadius};
    --line-numbers-spacing: ${theme.alias.space.cmp.xs};
    --scrollbar-size: ${theme.alias.scrollbars.size.square.md};

    // Default - Smart Editor - Style

    height: ${$height};
    width: ${$width};

    .monaco-editor {
      // Readonly - Smart Editor -Style

      ${readOnly &&
      `.monaco-editor-background {
          background-color: var(--read-only-bg-color);
        }`}

      // Bordered - Smart Editor -Style
      
      ${bordered &&
      css`
        border-radius: var(--border-radius);
      `}
      .overflow-guard {
        ${bordered &&
        css`
          // -1 fills the gap between the internal border and external border
          border-radius: calc(var(--border-radius) - 1px);
        `}
      }

      // Base font color. Applies to non tokenized text - Smart Editor - Style

      .mtk1 {
        color: ${theme.alias.color.text.body.stronger};
      }

      // Cannot edit on read-only mode - Smart Editor - Style
      // overflowingContentWidgets className

      .monaco-editor-overlaymessage {
        .message {
          box-shadow: ${theme.alias.elevation.boxShadow.depth.activated};
          border-radius: ${theme.alias.shape.borderRadius.elevated};
          border-color: ${theme.alias.color.border.elevation
            .activated} !important;
          padding: ${theme.alias.space.cmp.xs} ${theme.alias.space.cmp.sm};
          background-color: ${theme.alias.color.background.surface.base
            .base} !important;
          font-size: ${theme.alias.typo.fontSize.body.sm};
          font-family: ${theme.alias.typo.fontFamily.body.fontFaceName};
          color: ${theme.alias.color.text.body.stronger};
        }

        .anchor {
          border: unset;
        }
      }

      // Error label - Smart Editor - Style
      // Hide the label of the editor id in the error widget (LXCP-497)

      .peekview-title .filename {
        display: none;
      }

      // Line numbers - Smart Editor - Style

      ${lineNumbers &&
      css`
        .margin {
          background-color: ${theme.alias.color.background.feedback.neutral
            .weak};
        }

        .lines-content.monaco-editor-background {
          padding-left: var(--line-numbers-spacing);
        }

        .current-line.current-line-both {
          margin-left: calc(-1 * var(--line-numbers-spacing));
        }
      `}
      // Scrollbar - Smart Editor - Style
      .monaco-scrollable-element {
        .scrollbar {
          background-color: ${theme.alias.scrollbars.track.color.backdrop};

          .slider {
            background-color: ${theme.alias.scrollbars.thumb.color.backdrop
              .base};
            border-radius: ${theme.alias.scrollbars.thumb.shape.borderRadius};

            &:hover {
              background-color: ${theme.alias.scrollbars.thumb.color.backdrop
                .hovered};
            }
          }

          &.horizontal {
            height: var(--scrollbar-size) !important;

            .slider {
              height: var(--scrollbar-size) !important;
            }
          }

          &.vertical {
            width: var(--scrollbar-size) !important;

            .slider {
              width: var(--scrollbar-size) !important;
            }
          }
        }
      }

      // Suggest Widget - Smart Editor - Style

      .suggest-widget {
        //border-radius: ${theme.alias.shape.borderRadius.elevated};
        box-shadow: ${theme.alias.elevation.boxShadow.depth.activated};
        z-index: ${theme.alias.elevation.zIndex.depth.activated};
      }

      // Minimap - Smart Editor - Style

      .minimap {
        transform: translateX(0.6rem);
      }

      // Decorations overview ruler - Smart Editor - Style

      .decorationsOverviewRuler {
        width: var(--scrollbar-size) !important;
        border-left: ${minimap &&
        `1px solid ${theme.alias.color.border.separator.base.weak}`};
      }
    }
  `}
`;
