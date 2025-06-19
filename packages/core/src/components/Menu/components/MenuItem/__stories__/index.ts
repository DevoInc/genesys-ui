export const SOURCE_CODE_INTERACTIVE_WITH_CHILDREN = `
  export const MyCustomMenuItem = ({actions, ...restProps}) => {
    const innerRef = React.useRef<HTMLButtonElement>(null);
    const interactiveRef = React.useRef(null);
    useMenuItemPadding(interactiveRef, innerRef);
    return (
      <Menu.Item._Wrapper {...restProps}>
        <Menu.Item._Inner ref={innerRef}>
         {...}
        </Menu.Item._Inner>
        <Menu.Item._InteractiveWrapper ref={interactiveRef}>
          {actions}
        </Menu.Item._InteractiveWrapper>
      </Menu.Item._Wrapper>
     );
  };
`;
