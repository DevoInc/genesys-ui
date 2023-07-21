/**
 * Function that passes a series of arguments to each onClick action.
 *
 * The structure of cellActions is defined by the Action component.
 *
 * @param {object} cellActions
 * @param {object} args Arguments passed to onClick action.
 * @return {object[]} Array of cellAction objects with the passed arguments.
 */
export const passArgInOnClickAction = (cellActions, args) =>
  cellActions.map((action) => {
    const newAction = { ...action };
    if (newAction.onClick) {
      newAction.onClick = () => {
        action.onClick({ ...args });
      };
    }
    if (newAction.items) {
      newAction.items = passArgInOnClickAction(newAction.items, {
        ...args,
      });
    }
    return newAction;
  });
