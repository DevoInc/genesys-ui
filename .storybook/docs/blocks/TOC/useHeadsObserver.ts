import _ from 'lodash';
import * as React from 'react';

export const useHeadsObserver = (headings: HTMLHeadingElement[]) => {
  // List of visible headings
  const [selectedHeadings, setSelectedHeadings] = React.useState<string[]>([]);

  const isInViewport = (container, element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || container.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || container.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    console.log('handleScroll');
    setSelectedHeadings((selectedHeadingIds) => {
      let newSelectedHeadings = [...selectedHeadingIds];
      headings.forEach((heading) => {
        const viewport = document.querySelector('.sbdocs-content');
        if (isInViewport(viewport, heading)) {
          if (!selectedHeadingIds.includes(heading.id)) {
            newSelectedHeadings.push(heading.id);
          }
        } else {
          if (newSelectedHeadings.length > 1) {
            newSelectedHeadings = newSelectedHeadings.filter(
              (id) => id !== heading.id
            );
          }
        }
      });
      return newSelectedHeadings;
    });
  };

  const handleScrollDebounced = _.debounce(() => {
    handleScroll();
  }, 10);

  React.useEffect(() => {
    setSelectedHeadings([]);
    handleScroll();
  }, [headings]);

  React.useEffect(() => {
    document?.addEventListener('scroll', handleScrollDebounced);
    return () => {
      document?.removeEventListener('scroll', handleScrollDebounced);
    };
  }, [headings]);

  return { selectedHeadings };
};
