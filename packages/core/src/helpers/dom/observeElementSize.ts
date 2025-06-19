export const observeElementSize = (
  elem: HTMLElement,
  cb: (width: number, height: number) => void,
) => {
  if (!elem) return;

  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      cb(entry.contentRect.width, entry.contentRect.height);
    }
  });

  observer.observe(elem);

  return () => observer.disconnect();
};
