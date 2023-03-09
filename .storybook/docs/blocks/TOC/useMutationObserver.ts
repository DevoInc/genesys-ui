import * as React from 'react';

export const useMutationObserver = (
  contentSelector: string,
  headingsSelector: string
) => {
  const observer = React.useRef<MutationObserver>();
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  // Handle mutation of headings in the DOM
  const handleMutation = React.useCallback(() => {
    const TOCEntries = [...document.querySelectorAll(headingsSelector)];
    if (
      headings.map((h) => h.id).toString() !==
      TOCEntries.map((h) => h.id).toString()
    ) {
      console.log('mutation detected', TOCEntries.map((h) => h.id).toString());
      setHeadings([...TOCEntries] as HTMLHeadingElement[]);
    }
  }, []);

  React.useEffect(() => {
    console.log('useMutationObserver', contentSelector, headingsSelector);
    observer.current = new MutationObserver(handleMutation);

    const container = document.querySelector(contentSelector);

    observer.current.observe(container as Node, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return {
    observer,
    headings,
  };
};
