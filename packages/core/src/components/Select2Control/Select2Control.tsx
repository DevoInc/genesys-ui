import * as React from 'react';
import { get } from 'lodash';

import {
  ClearIndicator,
  DropdownIndicator,
  Menu,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  SelectContainer,
  SingleValue,
  ValueContainer,
} from './components';
import { StyledSelect2Control, StyledCreatableSelect } from './styled';
import { wrapperOnChange, findValue } from './utils';
import {
  CustomSelectProps,
  SingleOption,
  OptionGroup,
  Value,
} from './declarations';

const attrs = (props: Select2ControlProps) => {
  const defaultComponents = {
    SelectContainer,
    DropdownIndicator,
    ClearIndicator,
    Menu,
    Option,
    SingleValue,
    MultiValueContainer,
    MultiValueLabel,
    MultiValueRemove,
    ValueContainer,
  };
  const componentsSelect = { ...defaultComponents, ...props.components };

  const customHeight = {
    sm: 27,
    md: 32,
    lg: 38,
  };

  const defaultStyles = {
    menuPortal: (base) => ({
      ...base,
      zIndex: props.menuAppendToBody ? 10000 : '',
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: props.maxMenuHeight
        ? props.selectAllBtn
          ? `calc(${props.maxMenuHeight}px - ${customHeight[props.size]}px)`
          : props.maxMenuHeight
        : props.selectAllBtn
        ? `calc(200px - ${customHeight[props.size]}px)`
        : '200px',
      minHeight:
        props.minMenuHeight && props.selectAllBtn
          ? `calc(${props.minMenuHeight}px - ${customHeight[props.size]}px)`
          : props.minMenuHeight,
    }),
    multiValueRemove: () => '',
  };
  const stylesSelect = { ...defaultStyles, ...props.styles };

  const thereAreFixedOptions =
    Array.isArray(props.value) && props.value.some(({ fixed }: any) => fixed);
  const onChange =
    thereAreFixedOptions &&
    wrapperOnChange({ onChange: props.onChange, value: props.value });

  const isClearable =
    props.isClearable === undefined &&
    thereAreFixedOptions &&
    Array.isArray(props.value)
      ? props.value.some(({ fixed }: any) => !fixed)
      : props.isClearable;

  return {
    // menuPlacement: 'auto',
    minMenuHeight: 0,
    size: 'sm',
    ...props,
    ...(onChange && { onChange }),
    isClearable,
    value: findValue(props.value, (props as any).options, props.isMulti),
    styles: stylesSelect,
    menuPortalTarget: props.menuAppendToBody
      ? document.body
      : props.menuPortalTarget,
    // To avoid closing of dropdown menu when the scroll is within itself
    closeMenuOnScroll: (ev) =>
      (props.menuAppendToBody || props.closeMenuOnScroll) &&
      // Only return true when an open menu is detected, otherwise
      // react-select will be constantly changing the state and re-rendering
      // all the selects, even the closed ones.
      ev != null &&
      get(ev, 'srcElement.classList') != null &&
      ev.srcElement.getElementsByClassName(
        `${props.classNamePrefix}__control--menu-is-open`
      ).length &&
      !ev.srcElement.classList.contains(`${props.classNamePrefix}__menu-list`),
    components: componentsSelect,
  };
};

export interface Select2ControlProps extends CustomSelectProps {
  // React Select - Properties

  /** HTML ID of an element containing an error message related to the input**/
  'aria-errormessage'?: React.AriaAttributes['aria-errormessage'];
  /** Indicate if the value entered in the field is invalid **/
  'aria-invalid'?: React.AriaAttributes['aria-invalid'];
  /** Aria label (for assistive tech) */
  'aria-label'?: React.AriaAttributes['aria-label'];
  /** HTML ID of an element that should be used as the label (for assistive tech) */
  'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
  /** Used to set the priority with which screen reader should treat updates to live regions. The possible settings are: off, polite (default) or assertive */
  'aria-live'?: React.AriaAttributes['aria-live'];
  /** Customise the messages used by the aria-live component */
  ariaLiveMessages?: {
    guidance?: (props: any) => string;
    onChange?: (props: any) => string;
    onFilter?: (props: any) => string;
    onFocus?: (props: any) => string;
  };
  /** Focus the control when it is mounted */
  autoFocus?: boolean;
  /** Remove the currently focused option when the user presses backspace when Select isClearable or isMulti */
  backspaceRemovesValue?: boolean;
  /** Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
  blurInputOnSelect?: boolean;
  /** When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
  captureMenuScroll?: boolean;
  /** Sets a className attribute on the outer component */
  className?: string;
  /**
   * If provided, all inner components will be given a prefixed className attribute.
   *
   * This is useful when styling via CSS classes instead of the Styles API approach.
   */
  classNamePrefix?: string | null;
  /**
   * Provide classNames based on state for each inner component
   */
  classNames?: { [key: string]: (props: any) => string };
  /** Close the select menu when the user selects an option */
  closeMenuOnSelect?: boolean;
  /**
   * If `true`, close the select menu when the user scrolls the document/body.
   *
   * If a function, takes a standard javascript `ScrollEvent` you return a boolean:
   *
   * `true` => The menu closes
   *
   * `false` => The menu stays open
   *
   * This is useful when you have a scrollable modal and want to portal the menu out,
   * but want to avoid graphical issues.
   */
  closeMenuOnScroll?: boolean | ((event: Event) => boolean);
  /**
   * This complex object includes all the compositional components that are used
   * in `react-select`. If you wish to overwrite a component, pass in an object
   * with the appropriate namespace.
   *
   * If you only wish to restyle a component, we recommend using the `styles` prop
   * instead. For a list of the components that can be passed in, and the shape
   * that will be passed to them, see [the components docs](/components)
   */
  components?: any;
  /** Whether the value of the select, e.g. SingleValue, should be displayed in the control. */
  controlShouldRenderValue?: boolean;
  /** Delimiter used to join multiple values into a single HTML Input value */
  delimiter?: string;
  /** Clear all values when the user presses escape AND the menu is closed */
  escapeClearsValue?: boolean;
  /** Custom method to filter whether an option should be displayed in the menu */
  filterOption?: ((option: any, inputValue: string) => boolean) | null;
  /**
   * Formats group labels in the menu as React components
   *
   * An example can be found in the [Replacing builtins](/advanced#replacing-builtins) documentation.
   */
  formatGroupLabel?: (group: any) => React.ReactNode;
  /** Formats option labels in the menu and control as React components */
  formatOptionLabel?: (
    data: any,
    formatOptionLabelMeta: any
  ) => React.ReactNode;
  /**
   * Resolves option data to a string to be displayed as the label by components
   *
   * Note: Failure to resolve to a string type can interfere with filtering and
   * screen reader support.
   */
  getOptionLabel?: (option: any) => string;
  /** Resolves option data to a string to compare options and specify value attributes */
  getOptionValue?: (option: any) => string;
  /** Hide the selected option from the menu */
  hideSelectedOptions?: boolean;
  /** The id to set on the SelectContainer component. */
  id: string;
  /** The value of the search input */
  inputValue?: string;
  /** The id of the search input */
  inputId?: string;
  /** Define an id prefix for the select components e.g. {your-id}-value */
  instanceId?: number | string;
  /** Is the select value clearable */
  isClearable?: boolean;
  /** Is the select disabled */
  disabled?: boolean;
  /** Is the select in a state of loading (async) */
  loading?: boolean;
  /**
   * Override the built-in logic to detect whether an option is disabled
   *
   * An example can be found in the [Replacing builtins](/advanced#replacing-builtins) documentation.
   */
  optionDisabled?: (option: any, selectValue: any) => boolean;
  /** Override the built-in logic to detect whether an option is selected */
  optionSelected?: (option: any, selectValue: any) => boolean;
  /** Support multiple selected options */
  isMulti?: boolean;
  /** Is the select direction right-to-left */
  isRtl?: boolean;
  /** Whether to enable search functionality */
  searchable?: boolean;
  /** Async: Text to display when loading options */
  loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
  /** Minimum height of the menu before flipping */
  minMenuHeight?: number;
  /** Maximum height of the menu before scrolling */
  maxMenuHeight?: number;
  /** Whether the menu is open */
  menuIsOpen?: boolean;
  /**
   * Default placement of the menu in relation to the control. 'auto' will flip
   * when there isn't enough space below the control.
   */
  menuPlacement?: 'auto' | 'bottom' | 'top';
  /** The CSS position value of the menu, when "fixed" extra layout management is required */
  menuPosition?: 'absolute' | 'fixed';
  /**
   * Whether the menu should use a portal, and where it should attach
   *
   * An example can be found in the [Portaling](/advanced#portaling) documentation
   */
  menuPortalTarget?: HTMLElement | null;
  /** Whether to block scroll events when the menu is open */
  menuShouldBlockScroll?: boolean;
  /** Whether the menu should be scrolled into view when it opens */
  menuShouldScrollIntoView?: boolean;
  /** Name of the HTML Input (optional - without this, no input will be rendered) */
  name?: string;
  /** Text to display when there are no options */
  noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
  /** Handle blur events on the control */
  onBlur?: (event: any) => void;
  /** Handle change events on the select */
  onChange?: (newValue: any, actionMeta: any) => void;
  /** Handle focus events on the control */
  onFocus?: (event: any) => void;
  /** Handle change events on the input */
  onInputChange?: (newValue: string, actionMeta: any) => void;
  /** Handle key down events on the select */
  onKeyDown?: (event: any) => void;
  /** Handle the menu opening */
  onMenuOpen?: () => void;
  /** Handle the menu closing */
  onMenuClose?: () => void;
  /** Fired when the user scrolls to the top of the menu */
  onMenuScrollToTop?: (event: WheelEvent | TouchEvent) => void;
  /** Fired when the user scrolls to the bottom of the menu */
  onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void;
  /** Allows control of whether the menu is opened when the Select is focused */
  openMenuOnFocus?: boolean;
  /** Allows control of whether the menu is opened when the Select is clicked */
  openMenuOnClick?: boolean;
  /** Array of options that populate the select menu */
  options?: (SingleOption | OptionGroup)[];
  /** Number of options to jump in menu when page{up|down} keys are used */
  pageSize?: number;
  /** Placeholder for the select value */
  placeholder?: React.ReactNode;
  /** Status to relay to screen readers */
  screenReaderStatus?: (obj: { count: number }) => string;
  /**
   * Style modifier methods
   *
   * A basic example can be found at the bottom of the [Replacing builtins](/advanced#replacing-builtins) documentation.
   */
  styles?: React.CSSProperties;
  /** Sets the tabIndex attribute on the input */
  tabIndex?: number;
  /** Select the currently focused option when the user presses tab */
  tabSelectsValue?: boolean;
  /** Remove all non-essential styles */
  unstyled?: boolean;
  /** The value of the select; reflected by the selected option */
  value?: Value;
  /** Sets the form attribute on the input */
  form?: string;
  /** Marks the value-holding input as required for form validation */
  hasRequiredMark?: boolean;
  /** Style modifier methods */

  // Custom properties
  /** HTML required prop */
  required?: boolean;
  /** Allow the user to edit values */
  creatable?: boolean;
  /** If it's set to true then the portal for dropdown menu is appended
   * to body*/
  menuAppendToBody?: boolean;
  'data-tip'?: string;
}

export const Select2Control: React.FC<Select2ControlProps> = (props) => {
  return props.creatable ? (
    <StyledCreatableSelect {...attrs(props)} />
  ) : (
    <StyledSelect2Control {...attrs(props)} />
  );
};
