import styled, { css } from 'styled-components';
import ReactSelect, { MultiValue } from 'react-select';

import { getFieldState, getTFieldStatus, getFieldControlTypo } from '../Field';
import { hasStatus } from '../../utils/validations';
import { scrollbars } from '../../styled/mixins/scrollbars';
import { TSelectOption } from './declarations';
import { disabledMixin, truncateTypoMixin } from '../../styled';

export const StyledSelectControl = styled(ReactSelect).attrs(
  ({ className, classNamePrefix, tooltip, ...props }) => ({
    classNamePrefix: classNamePrefix || 'react-select',
    className: className || 'react-select__container',
    title: tooltip,
    ...props,
  }),
)`
  ${({
    addonToLeft,
    addonToRight,
    classNamePrefix,
    isDisabled,
    hideSelectedOptions,
    hideStatusIcon,
    isClearable,
    isMulti,
    menuIsOpen,
    multipleSubtle,
    readOnly,
    size = 'md',
    sortable,
    status,
    theme,
    value,
    options,
  }) => {
    const state = getFieldState({ $readOnly: readOnly });
    const statusEval = getTFieldStatus(status);
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    const fieldTokens = aliasTokens.fields;
    const fieldTransitionDuration = fieldTokens.mutation.transitionDuration;
    const selectTokens = theme.cmp.select;
    const defaultHorPadding = fieldTokens.space.padding.hor[size];
    const scrollSpacing = selectTokens.space.padding.scroll;
    const scrollOffset = spacingTokens.cmp.xxs;
    const indicatorWidth = `calc(${selectTokens.indicator.size.width[size]} * ${
      hasStatus(statusEval) && !hideStatusIcon ? 2 : 1
    })`;
    const hasDropdownIndicator = menuIsOpen
      ? 0
      : (isMulti &&
            hideSelectedOptions &&
            (value && (value as MultiValue<TSelectOption>).length) !==
              (options && options.length)) ||
          !isMulti ||
          !hideSelectedOptions
        ? 1
        : 0;
    const hasClearIndicator = isClearable === false ? 0 : 1;
    const sortableSpacing = sortable ? scrollSpacing : '0rem';
    const minHeight = fieldTokens.size.height[size];

    return css`
      flex: 1 1 auto;
      min-width: 0;

      .${classNamePrefix} {
        // CONTROL ///////////////////////////////////////////////////////////
        &__control {
          flex-wrap: nowrap;
          flex: 1 1 100%;
          transition:
            border ${fieldTransitionDuration} ease-in-out,
            box-shadow ${fieldTransitionDuration} ease-in-out;
          border-width: ${fieldTokens.shape.borderSize.base};
          border-style: solid;
          border-color: ${fieldTokens.color.border[statusEval][state]};
          border-radius: ${fieldTokens.shape.borderRadius};
          min-height: ${minHeight};
          background-color: ${fieldTokens.color.background[statusEval][state]};
          ${getFieldControlTypo({ theme, $size: size })};

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
          
          // READONLY
          ${readOnly &&
          css`
            pointer-events: none;
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
            .${classNamePrefix}__dropdown-indicator *:last-child {
              transform: rotate(180deg);
              overflow: visible;
              transform-origin: center;
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
            max-height: ${multipleSubtle
              ? minHeight
              : selectTokens.size.maxHeight.isMultiple[size]};
            overflow-y: ${multipleSubtle ? 'hidden' : 'auto'};
            max-width: ${multipleSubtle && '100%'};
          `};

          // SCROLLBAR
          ${scrollbars({ theme })};

          // MULTIPLE
          .${classNamePrefix}__value-container.${classNamePrefix}__value-container--is-multi {
            padding-right: ${!multipleSubtle &&
            `calc(
              ${indicatorWidth} * ${hasDropdownIndicator} + ${defaultHorPadding}
            )`};
            max-width: ${multipleSubtle &&
            `calc(100% - (${indicatorWidth} * ${hasDropdownIndicator} + ${defaultHorPadding}))`};
            padding-top: ${multipleSubtle && '0'};
            padding-bottom: ${multipleSubtle && '0'};
            white-space: ${multipleSubtle && 'nowrap'};
            max-height: ${multipleSubtle && minHeight};

            // when select is sortable, an inline styles div without class name is rendered
            > [style] {
              padding: 0 !important;
            }

            // MULTIPLE & HAS VALUE
            &.${classNamePrefix}__value-container--has-value {
              padding-right: ${!multipleSubtle &&
              `calc(
                ${indicatorWidth} * ${hasDropdownIndicator} + ${sortableSpacing} +
                  ${indicatorWidth} * ${hasClearIndicator} +
                  ${defaultHorPadding}
              )`};
              max-width: ${multipleSubtle &&
              `calc(100% - (${indicatorWidth} * ${hasDropdownIndicator} + ${sortableSpacing} +
                  ${indicatorWidth} * ${hasClearIndicator} +
                  ${defaultHorPadding}))`};

              > div:last-child {
                display: flex;
                align-items: center;
                column-gap: ${aliasTokens.space.cmp.xxs};
              }
            }
          }

          // MULTIPLE & HAS SCROLL
          &--has-scroll {
            margin: ${!multipleSubtle && scrollOffset};

            .${classNamePrefix}__value-container.${classNamePrefix}__value-container--is-multi {
              padding-left: ${!multipleSubtle &&
              `calc(${defaultHorPadding} - ${scrollOffset})`};
              padding-right: ${!multipleSubtle &&
              `calc(
                ${indicatorWidth} * ${hasDropdownIndicator} + ${scrollSpacing} +
                  ${defaultHorPadding}
              )`};

              // MULTIPLE & HAS SCROLL & HAS VALUE
              &.${classNamePrefix}__value-container--has-value {
                padding-right: ${!multipleSubtle &&
                `calc(
                  ${indicatorWidth} * ${hasDropdownIndicator} +
                    ${indicatorWidth} * ${hasClearIndicator} + ${scrollSpacing} +
                    ${sortableSpacing} + ${defaultHorPadding} + ${scrollOffset}
                )`};
              }
            }

            // MULTIPLE & HAS SCROLL INDICATORS
            & + .${classNamePrefix}__indicators {
              right: calc(${scrollSpacing} + ${scrollOffset});
            }
          }
        }
        ////////////////////////////////// END VALUE WRAPPER & VALUE CONTAINER

        // INPUT CONTAINER ///////////////////////////////////////////////////
        &__input-container {
          overflow-y: hidden;
          color: ${fieldTokens.color.text[statusEval][state]};
          margin: 0;
          padding: 0;

          &::-webkit-scrollbar {
            display: none;
          }
        }
        ////////////////////////////////////////////////// END INPUT CONTAINER

        // VALUE CONTAINER ///////////////////////////////////////////////////
        &__value-container {
          padding: 0 0 0 ${defaultHorPadding};

          > div:last-child {
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
            display: grid;
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
              ${truncateTypoMixin()};
              color: ${fieldTokens.color.text[statusEval].placeholder};
              text-align: left;
            }

            &__single-value {
              display: flex;
              align-items: center;
              margin: 0;
              color: ${fieldTokens.color.text[statusEval][state]};
            }
          }
        }
        ////////////////////////////////////////////////// END VALUE CONTAINER

        // INDICATORS ////////////////////////////////////////////////////////
        &__indicators {
          ${readOnly &&
          css`
            display: none;
          `}

          .${classNamePrefix} {
            &__indicator {
              align-items: center;
              justify-content: center;
              min-width: ${indicatorWidth};
              padding: ${selectTokens.indicator.space.padding};
              color: ${fieldTokens.color.text[statusEval][state]};

              > * {
                &:last-child {
                  transform-origin: center;
                  transition: ${selectTokens.indicator.mutation
                    .transitionDuration};
                }

                & + span {
                  margin-left: ${spacingTokens.cmp.xxs};
                }
              }
            }

            &__dropdown-indicator {
              display: ${menuIsOpen && 'none'};
            }

            &__indicator-separator {
              display: none;
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
          ${disabledMixin(theme)};
        }
        ///////////////////////////////////////////////////////// END DISABLED
      }
    `;
  }}
`;
