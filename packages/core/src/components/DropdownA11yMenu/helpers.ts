import { KeyboardEventsAction, KeyboardEventsMove } from './declarations';

export const actionItemByKeyBoard = (event: any, action: any) => {
  const { key } = event;
  const enter: KeyboardEventsAction = 'Enter';
  const space: KeyboardEventsAction = ' ';
  if (key === enter || key === space) {
    event.preventDefault();
    action(event);
  }
};

export const navigateBetweenSubMenuByKeyBoard = (
  event: any,
  action: any,
  expanded: any,
  ref: any
) => {
  const { key } = event;
  const enter: KeyboardEventsAction = 'Enter';
  const space: KeyboardEventsAction = ' ';
  const left: KeyboardEventsMove = 'ArrowLeft';
  const right: KeyboardEventsMove = 'ArrowRight';

  event.preventDefault();
  switch (key) {
    case right: {
      action(true);
      if (!expanded) event.stopPropagation();
      break;
    }
    case left: {
      action(false);
      if (expanded) event.stopPropagation();
      break;
    }
  }

  if ((key === enter || key === space) && event.target === ref.current) {
    event.stopPropagation();
  }
};

export const killEvent = (event: any) => {
  const { key, type } = event;
  const enter: KeyboardEventsAction = 'Enter';
  const space: KeyboardEventsAction = ' ';
  if (type === 'click' || key === enter || key === space) {
    event.stopPropagation();
  }
};

export const navigateBetweenMenuItemByKeyboard = (event: any, action: any) => {
  const { key } = event;
  const up: KeyboardEventsMove = 'ArrowUp';
  const down: KeyboardEventsMove = 'ArrowDown';
  if (key === up || key === down) {
    event.stopPropagation();
    event.preventDefault();
  }
  action(key);
};
