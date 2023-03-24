import styled, { css } from 'styled-components';
import ReactSelect, { MultiValue } from 'react-select';
import {
  getFieldState,
  getFieldStatus,
  getFieldControlTypo,
} from '../../Field';
import { hasStatus } from '../../../utils/validations';
import { scrollbars } from '../../../styled/mixins/scrollbars';
import { flexMixin } from '../../../styled/mixins';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSelectControlProps extends ReactSelect {}

export const StyledSelectControl = styled(ReactSelect).attrs(
  ({ className, classNamePrefix }) => ({
    classNamePrefix: classNamePrefix || 'react-select',
    className: className || 'react-select__container',
  })
)`
  ${({
    addonToLeft,
    addonToRight,
    classNamePrefix,
    isDisabled,
    hideSelectedOptions,
    isClearable,
    isMulti,
    menuIsOpen,
    readOnly,
    size,
    sortable,
    status,
    theme,
    value,
    options,
  }) => {
    const state = getFieldState({ readOnly });
    const statusEval = getFieldStatus(status);
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    const fieldTokens = aliasTokens.fields;
    const fieldTransitionDuration = fieldTokens.mutation.transitionDuration;
    const selectTokens = theme.cmp.select;
    const defaultHorPadding = fieldTokens.space.padding.hor[size];
    const scrollSpacing = selectTokens.space.padding.scroll;
    const scrollOffset = spacingTokens.cmp.xxs;
    const indicatorWidth = selectTokens.indicator.size.width[size];
    const hasDropdownIndicator = menuIsOpen
      ? 0
      : (isMulti &&
          hideSelectedOptions &&
          (value && (value as MultiValue<SelectOption>).length) !==
            (options && options.length)) ||
        !isMulti ||
        !hideSelectedOptions
      ? 1
      : 0;
    const hasClearIndicator = isClearable === false ? 0 : 1;
    const sortableSpacing = sortable ? scrollSpacing : '0rem';

    return css`
      .${classNamePrefix} {
        // CONTROL ///////////////////////////////////////////////////////////
        &__control {
          flex-wrap: nowrap;
          flex: 1 1 100%;
          transition: border ${fieldTransitionDuration} ease-in-out,
            box-shadow ${fieldTransitionDuration} ease-in-out;
          border-width: ${fieldTokens.shape.borderSize.base};
          border-style: solid;
          border-color: ${fieldTokens.color.border[statusEval][state]};
          border-radius: ${fieldTokens.shape.borderRadius};
          min-height: ${fieldTokens.size.height[size]};
          background-color: ${fieldTokens.color.background[statusEval][state]};
          ${getFieldControlTypo({ theme, size })};

          // WITH ADDON
          ${addonToLeft &&
          css`
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            ${!hasStatus(status) &&
            css`
              border-left-width: 0;
            `}
          `}

          ${addonToRight &&
          css`
            z-index: 1;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            ${!hasStatus(status) &&
            css`
              border-right-width: 0;
            `}
          `}

            // MOUSE STATES
            ${!isDisabled &&
          !readOnly &&
          css`
            cursor: pointer;
            &:hover {
              border-color: ${fieldTokens.color.border[statusEval].hovered};
              color: ${fieldTokens.color.text[statusEval].hovered};
            }

            &:focus,
            &--is-focused {
              box-shadow: ${fieldTokens.elevation.boxShadow[statusEval]
                .focused};
              border-color: ${fieldTokens.color.border[statusEval].focused};
              color: ${fieldTokens.color.text[statusEval].focused};
            }
          `}

            // MENU OPEN
            &--menu-is-open {
            .${classNamePrefix}__dropdown-indicator i:last-child {
              transform: rotate(180deg);
            }
          }
        }
        ////////////////////////////////////////////////////////// END CONTROL

        // VALUE WRAPPER & VALUE CONTAINER ///////////////////////////////////
        &__value-wrapper {
          flex: 1;

          // MULTIPLE
          ${isMulti &&
          css`
            max-height: ${selectTokens.size.maxHeight.isMultiple[size]};
            overflow-y: auto;
          `};

          // SCROLLBAR
          ${scrollbars({ theme })};

          // MULTIPLE
          .${classNamePrefix}__value-container.${classNamePrefix}__value-container--is-multi {
            padding-right: calc(
              ${indicatorWidth} * ${hasDropdownIndicator} + ${defaultHorPadding}
            );

            // when select is sortable, an inline styles div without class name is rendered
            > [style] {
              padding: 0 !important;
            }

            // MULTIPLE & HAS VALUE
            &.${classNamePrefix}__value-container--has-value {
              padding-right: calc(
                ${indicatorWidth} * ${hasDropdownIndicator} + ${sortableSpacing} +
                  ${indicatorWidth} * ${hasClearIndicator} +
                  ${defaultHorPadding}
              );
            }
          }

          // MULTIPLE & HAS SCROLL
          &--has-scroll {
            margin: ${scrollOffset};
            .${classNamePrefix}__value-container.${classNamePrefix}__value-container--is-multi {
              padding-left: calc(${defaultHorPadding} - ${scrollOffset});
              padding-right: calc(
                ${indicatorWidth} * ${hasDropdownIndicator} + ${scrollSpacing} +
                  ${defaultHorPadding}
              );

              // MULTIPLE & HAS SCROLL & HAS VALUE
              &.${classNamePrefix}__value-container--has-value {
                padding-right: calc(
                  ${indicatorWidth} * ${hasDropdownIndicator} +
                    ${indicatorWidth} * ${hasClearIndicator} + ${scrollSpacing} +
                    ${sortableSpacing} + ${defaultHorPadding} + ${scrollOffset}
                );
              }
            }

            // MULTIPLE & HAS SCROLL INDICATORS
            & + .${classNamePrefix}__indicators {
              right: calc(${scrollSpacing} + ${scrollOffset});
            }
          }
        }
        ////////////////////////////////// END VALUE WRAPPER & VALUE CONTAINER

        // VALUE CONTAINER ///////////////////////////////////////////////////
        &__value-container {
          padding: 0 0 0 ${defaultHorPadding};

          > div:last-child {
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
          }

          .${classNamePrefix} {
            &__input input {
              height: auto;

              &:focus {
                box-shadow: none;
                outline: none;
              }
            }

            &__placeholder {
              color: ${fieldTokens.color.text[statusEval].placeholder};
              text-align: left;
            }

            &__single-value {
              ${flexMixin({ dis: 'flex', ai: 'center' })};
              margin: 0;
              color: ${fieldTokens.color.text[statusEval][state]};

              i {
                margin-right: ${selectTokens.valueIcon.space.marginRight[size]};
                font-size: ${selectTokens.valueIcon.size.square[size]};
                color: ${fieldTokens.color.text[statusEval][state]};
              }
            }
          }
        }
        ////////////////////////////////////////////////// END VALUE CONTAINER

        // INDICATORS ////////////////////////////////////////////////////////
        &__indicators {
          .${classNamePrefix} {
            &__indicator {
              align-items: center;
              justify-content: center;
              min-width: ${indicatorWidth};
              padding: ${selectTokens.indicator.space.padding};

              > i {
                &:last-child {
                  transition: ${selectTokens.indicator.mutation
                    .transitionDuration};
                  font-weight: bold;
                  color: ${fieldTokens.color.text[statusEval][state]};
                }

                & + i {
                  margin-left: ${spacingTokens.cmp.xxs};
                }
              }
            }

            &__dropdown-indicator {
              display: ${menuIsOpen && 'none'};

              i {
                transition: transform 0.4s;
              }
            }

            &__indicator-separator {
              display: none;
            }

            &__status-icon {
              font-size: 1.6rem;
            }
          }

          // MULTIPLE
          ${isMulti &&
          css`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
          `};
        }
        /////////////////////////////////////////////////////// END INDICATORS

        // DISABLED //////////////////////////////////////////////////////////
        &--is-disabled {
          cursor: unset;
        }

        &__control--is-disabled {
          cursor: not-allowed;
        }
        ///////////////////////////////////////////////////////// END DISABLED
      }
    `;
  }}
`;
