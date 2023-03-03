import * as React from 'react';
import PropTypes from 'prop-types';
// import { LinkBox } from '../../LinkBox';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuLink = (props) => {
  return (
    <div>This used to be a LinkBox</div> //TODO: fix this
    // <LinkBox
    //   {...props}
    //   title={props.title ? props.title : props.text}
    //   onChange={() => {
    //     const newSelected = !props.selected;
    //     if (props.onClick) {
    //       props.onClick(newSelected);
    //     } else if (props.selectable && props.onSelect) {
    //       props.onSelect(newSelected);
    //     }
    //   }}
    // >
    //   {props.children}
    // </LinkBox>
  );
};

MenuLink.propTypes = {
  /** To be used as content of the box.*/
  children: PropTypes.node,
  /** Component to be used for main content of the box between prependContent
   * and appendContent.*/
  mainContent: PropTypes.elementType,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  /** Function to be called when the box is selected.*/
  onSelect: PropTypes.func,
  /** Function to be called when the box is focused.*/
  onFocus: PropTypes.func,
  /** If there is an extra space to the left of the box. */
  leftSpaced: PropTypes.bool,
  /** If it's used the title with no link styles.*/
  titleQuiet: PropTypes.bool,
  /** Size to define padding, line-height, font-size... etc. of the elements.*/
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** It defines the status color schema for the box */
  status: PropTypes.oneOf([
    'success',
    'error',
    'warning',
    'help',
    'info',
    'base',
  ]),
  /** If the box is rendered with more padding, border, box-shadow... etc.*/
  boxed: PropTypes.bool,
  /** Content to be included at the right of the box.*/
  appendContent: PropTypes.node,
  /** Content to be included at the left of the box.*/
  prependContent: PropTypes.node,
  /** Icon for the box.*/
  icon: PropTypes.string,
  /** Title on heading of the box.*/
  title: PropTypes.string,
  /** OLD - Title on heading of the box.*/
  text: PropTypes.string,
  /** Extra Info on heading of the box.*/
  meta: PropTypes.string,
  /** Description text block of the box.*/
  description: PropTypes.string,
  /** Shortcut before append content and expand icon.*/
  shortCut: PropTypes.string,
  /** Content block below the title and description block.*/
  extraContent: PropTypes.node,
  /** Tooltip on box hover.*/
  tooltip: PropTypes.string,
  /** If the box expands other content and to where.*/
  expand: PropTypes.oneOf(['right', 'left', 'up', 'down']),
  /** If the expand icon is visible only on hover/focus/active state.*/
  expandIconFade: PropTypes.bool,
  /** If the box is expanding other content.*/
  expanded: PropTypes.bool,
  /** If the box is selectable: behavior as checkbox.*/
  selectable: PropTypes.bool,
  disabled: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  pressed: PropTypes.bool,
  highlighted: PropTypes.bool,
  selected: PropTypes.bool,
  activated: PropTypes.bool,
};

MenuLink.defaultProps = {
  size: 'md',
  status: 'base',
};
