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
  ${({ theme, originalEditable, readOnly, bordered }) => css`
    --border-radius: ${theme.alias.fields.shape.borderRadius};
    --inner-border-radius: calc(var(--border-radius) - 1px);

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

        .overflow-guard {
          ${bordered &&
          css`
            //  -1 fills the gap between the internal border and external border
            border-radius: var(--inner-border-radius) 0px 0px
              var(--inner-border-radius);
          `}
        }
      }

      // Right side of the diff editor
      .editor.modified {
        box-shadow: none;

        border-left-width: ${theme.alias.fields.shape.borderSize.base};
        border-left-style: solid;
        border-left-color: ${readOnly
          ? theme.alias.fields.color.background.base.readonly
          : theme.alias.fields.color.border.base.enabled};

        .scrollbar {
          right: 1px !important;
        }

        .overflow-guard {
          ${bordered &&
          css`
            //  -1 fills the gap between the internal border and external border
            border-radius: 0px var(--inner-border-radius)
              var(--inner-border-radius) 0px;
          `}
        }
      }

      // Hide diff viewport slider but keep the area clickable
      .diffViewport {
        opacity: 0 !important;
      }
    }
  `}
`;
