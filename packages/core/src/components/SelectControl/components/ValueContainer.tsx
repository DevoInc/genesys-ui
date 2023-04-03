import * as React from 'react';
import {
  components,
  ValueContainerProps as RSValueContainerProps,
} from 'react-select';
import { arrayMove } from '@dnd-kit/sortable';

import { SortableList } from '.';
import { DragEndEvent } from '@dnd-kit/core';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ValueContainerProps extends RSValueContainerProps {}

export const ValueContainer: React.FC<ValueContainerProps> = ({
  children,
  ...props
}) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [containerClass, setContainerClass] =
    React.useState<React.AllHTMLAttributes<HTMLDivElement>['className']>();

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const newContainerClass = [
        `${props.selectProps.classNamePrefix}__value-wrapper`,
      ];
      const scrollClass =
        container.scrollHeight > container.clientHeight
          ? `${props.selectProps.classNamePrefix}__value-wrapper--has-scroll`
          : '';

      newContainerClass.push(scrollClass);
      setContainerClass(newContainerClass.join(' '));
    }
  }, [containerRef, props.selectProps.classNamePrefix]);

  if (
    props.selectProps.sortable &&
    props.selectProps.isMulti &&
    Array.isArray(children[0])
  ) {
    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const pp = props.getValue().map((e: SelectOption) => e.value);
        const oldIndex = pp.indexOf(active.id);
        const newIndex = pp.indexOf(over.id);

        const newItems = arrayMove(pp, oldIndex, newIndex);
        props.setValue(newItems, 'select-option');
      }
    };

    return (
      <div ref={containerRef} className={containerClass}>
        <components.ValueContainer {...props}>
          {[
            <SortableList
              key={0}
              items={children[0]}
              onSortEnd={handleDragEnd}
            />,
            children[1],
          ]}
        </components.ValueContainer>
      </div>
    );
  } else {
    return (
      <div ref={containerRef} className={containerClass}>
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      </div>
    );
  }
};
