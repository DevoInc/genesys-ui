/**
 * Get the css translation of the Badge based in circular shape of its Button
 * parent and if the Badge has text content
 *
 * @param props - IObject with the params
 * @param props.hasCircularParent - If the Button is circular
 * @param props.size - Badge size
 * @param props.tokens - Badge tokens
 * @param props.text - Badge text
 * @return value of translation
 */
export const getTranslate = ({ hasCircularParent, size, tokens, text }) => {
  const contentType = text ? 'hasContent' : 'isEmpty';
  const xOffset = `calc(-${tokens.size.square[contentType][size]} / 2)`;
  const yOffset = hasCircularParent && !text ? '-25%' : '-50%';

  return `${xOffset}, ${yOffset}`;
};
