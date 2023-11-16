import styled, { css } from 'styled-components';
import {
  StyledInternalEditor,
  type StyledInternalEditorProps,
} from '../../../Editor/components/InternalEditor/StyledInternalEditor';

export interface StyledInternalDiffEditorProps
  extends StyledInternalEditorProps {
  readonly?: boolean;
  originalEditable?: boolean;
}

export const StyledInternalDiffEditor = styled(
  StyledInternalEditor,
)<StyledInternalDiffEditorProps>`
  ${({ bordered, originalEditable, readOnly, theme }) => css`
    --border-radius: ${theme.alias.fields.shape.borderRadius};
    --inner-border-radius: calc(var(--border-radius) -0.1rem);

    .monaco-diff-editor.side-by-side {
      ${bordered && 'border-radius: var(--border-radius);'}
      // Left side of the diff editor
      .editor.original {
        box-shadow: none;

        ${!originalEditable &&
        !readOnly &&
        css`
          .monaco-editor-background {
            background-color: ${theme.alias.fields.color.background.base
              .readonly};
          }
        `}
        .monaco-editor {
          ${bordered &&
          css`
            border-radius: var(--inner-border-radius) 0 0
              var(--inner-border-radius);

            .overflow-guard {
              border-radius: var(--inner-border-radius) 0 0
                var(--inner-border-radius);

              .lines-content.monaco-editor-background {
                .view-overlays .line-delete {
                  left: calc(-1 * var(--line-numbers-spacing)) !important;
                }
              }
            }
          `}
        }
      }

      // Right side of the diff editor

      .editor.modified {
        box-shadow: none;
        border-left-width: ${theme.alias.fields.shape.borderSize.base};
        border-left-style: solid;
        border-left-color: ${theme.alias.fields.color.border.base.enabled};

        .scrollbar {
          right: 0.1rem !important;
        }

        .monaco-editor {
          border-radius: 0;

          .overflow-guard {
            border-radius: 0;

            .lines-content.monaco-editor-background {
              .view-overlays .line-insert {
                left: calc(-1 * var(--line-numbers-spacing)) !important;
              }
            }
          }
        }
      }

      // Difference area

      .diffOverview {
        border-left-width: ${theme.alias.fields.shape.borderSize.base};
        border-left-style: solid;
        border-left-color: ${theme.alias.fields.color.border.base.enabled};
        background-color: ${theme.alias.color.background.feedback.neutral
          .weaker};

        // Hide diff viewport slider but keep the area clickable

        .diffViewport {
          opacity: 0 !important;
        }
      }
    }
  `}
`;
