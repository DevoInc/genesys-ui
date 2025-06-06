import { AllHTMLAttributes, ImgHTMLAttributes } from 'react';
import type { DOMAttributes } from 'react';

/** ---------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * Common declarations of HTML attributes
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- */

/** ---------------------------------------------
 * Common declarations for all components
 * ---------------------------------------------- */
export interface IGlobalAttrs<T = Element> {
  /** A unique identifier for the element */
  id?: AllHTMLAttributes<T>['id'];
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  tooltip?: AllHTMLAttributes<T>['title'];
  /** Defines the role of an element in the context of the document, such as "button" or "navigation" */
  role?: AllHTMLAttributes<T>['role'];
}

/** ---------------------------------------------
 * Common declarations for layout components
 * - Box
 * - Flex
 * - ...
 * --------------------------------------------- */
export interface ILayoutAttrs<T = Element> {
  /** A shortcut key to activate or focus the element */
  accessKey?: AllHTMLAttributes<T>['accessKey'];
  /** A boolean value indicating whether the element should be hidden */
  hidden?: AllHTMLAttributes<T>['hidden'];
  /** An integer indicating the element's position in the tab order of the document */
  tabIndex?: AllHTMLAttributes<T>['tabIndex'];
  /** A boolean value indicating whether the element can be dragged */
  draggable?: AllHTMLAttributes<T>['draggable'];
}

/** ---------------------------------------------
 * Common declarations for text box components
 * - Textarea
 * - Input
 * --------------------------------------------- */
export interface ITextBoxAttrs<T = Element> {
  /** The MIME types that the server will accept */
  accept?: AllHTMLAttributes<T>['accept'];
  /** A string indicating whether the text field should have autocomplete on or off */
  autoComplete?: AllHTMLAttributes<T>['autoComplete'];
  /** A boolean indicating whether the text field should automatically get focus when the page loads */
  autoFocus?: AllHTMLAttributes<T>['autoFocus'];
  /** The URL to which the text field's form's data will be sent */
  formAction?: AllHTMLAttributes<T>['formAction'];
  /** The minimum number of characters the text field's value can have */
  minLength?: AllHTMLAttributes<T>['minLength'];
  /** The maximum number of characters the text field's value can have */
  maxLength?: AllHTMLAttributes<T>['maxLength'];
  /** A text hint that describes the expected value of the text field */
  placeholder?: AllHTMLAttributes<T>['placeholder'];
  /** A boolean indicating whether the text field is read-only */
  readOnly?: AllHTMLAttributes<T>['readOnly'];
}

/** ---------------------------------------------
 * Common declarations for input component
 * - Input
 * --------------------------------------------- */
export interface IInputAttrs<T = HTMLInputElement> extends ITextBoxAttrs<T> {
  /** The defaultValue property sets or returns the default value of a text field. */
  defaultValue?: AllHTMLAttributes<T>['defaultValue'];
  /** The maximum value of the input field */
  max?: AllHTMLAttributes<T>['max'];
  /** The minimum value of the input field */
  min?: AllHTMLAttributes<T>['min'];
  /** A regular expression that the input field's value is checked against */
  pattern?: AllHTMLAttributes<T>['pattern'];
  /** The legal number intervals for the input field */
  step?: AllHTMLAttributes<T>['step'];
  /** The type of input field, such as "text" or "email" */
  type?: AllHTMLAttributes<T>['type'];
  /** The current value of the input field  */
  value?: AllHTMLAttributes<T>['value'];
  /** A boolean indicating whether the input field should accept multiple values */
  multiple?: AllHTMLAttributes<T>['multiple'];
  /** The number of visible characters in the input field */
  size?: AllHTMLAttributes<T>['size'];
}

/** ---------------------------------------------
 * Common declarations for textarea component
 * - Textarea
 * --------------------------------------------- */
export interface ITextareaAttrs<T = HTMLTextAreaElement>
  extends ITextBoxAttrs<T> {
  /** The number of visible character columns in the text area */
  cols?: AllHTMLAttributes<T>['cols'];
  /** The number of visible text lines in the text area */
  rows?: AllHTMLAttributes<T>['rows'];
  /** The current value of the input field  */
  value?: AllHTMLAttributes<T>['value'];
}

/** ---------------------------------------------
 * Common declarations for select component
 * - Select
 * --------------------------------------------- */
export interface ISelectAttrs<T = HTMLSelectElement> {
  /** A string indicating whether the select field should have autocomplete on or off */
  autoComplete?: AllHTMLAttributes<T>['autoComplete'];
  /** A boolean indicating whether the select field should automatically get focus when the page loads */
  autoFocus?: AllHTMLAttributes<T>['autoFocus'];
  /** A boolean indicating whether multiple options can be selected at once */
  multiple?: AllHTMLAttributes<T>['multiple'];
  /** A string that provides a hint to the user about the expected value of the select field */
  placeholder?: AllHTMLAttributes<T>['placeholder'];
  /** A number that specifies the number of options that should be visible in the select field */
  size?: AllHTMLAttributes<T>['size'];
}

/** ---------------------------------------------
 * Common declarations for field components
 * - Input
 * - Select
 * - Switch
 * - ...
 * --------------------------------------------- */
export interface IFieldAttrs<T = Element> {
  /** A boolean indicating whether the field should be disabled or not */
  disabled?: AllHTMLAttributes<T>['disabled'];
  /** A string indicating the form the field belongs to */
  form?: AllHTMLAttributes<T>['form'];
  /** A string that specifies the name of the field */
  name?: AllHTMLAttributes<T>['name'];
  /** A boolean indicating whether the field is required to be filled out */
  required?: AllHTMLAttributes<T>['required'];
}

/** ---------------------------------------------
 * Common declarations for field components
 * - Input
 * - Select
 * - Switch
 * - ...
 * --------------------------------------------- */
export interface ICheckAttrs<T = Element> {
  /** When present, it specifies that an \<input\> element is selected (checked). */
  checked?: AllHTMLAttributes<T>['checked'];
  /** When present, it specifies that an \<input\> element should be pre-selected (checked) when the page loads. */
  defaultChecked?: AllHTMLAttributes<T>['defaultChecked'];
}

/** ---------------------------------------------
 * Common declarations for button components
 * - Button
 * - IconButton
 * --------------------------------------------- */
export interface IButtonAttrs<T = HTMLButtonElement> {
  /** A boolean indicating whether the button should automatically get focus when the page loads */
  autoFocus?: AllHTMLAttributes<T>['autoFocus'];
  /** A boolean indicating whether the button should be disabled or not */
  disabled?: AllHTMLAttributes<T>['disabled'];
  /** A string indicating the form the button belongs to */
  form?: AllHTMLAttributes<T>['form'];
  /** A string indicating the URL the form data should be sent to when the button is clicked */
  formAction?: AllHTMLAttributes<T>['formAction'];
  /** A string that specifies the name of the button */
  name?: AllHTMLAttributes<T>['name'];
  /** An integer indicating the element's position in the tab order of the document */
  tabIndex?: AllHTMLAttributes<T>['tabIndex'];
  /** A string indicating the type of button (e.g. "submit" or "reset") */
  type?: AllHTMLAttributes<T>['type'];
  /** A string that specifies the value of the button */
  value?: AllHTMLAttributes<T>['value'];
}

/** ---------------------------------------------
 * Common declarations for link component
 * - Link
 * --------------------------------------------- */
export interface ILinkAttrs<T = HTMLLinkElement> {
  /** A string that specifies the URL of the link */
  href?: AllHTMLAttributes<T>['href'];
  /** A string that specifies the file name to use for the downloaded resource when the link is clicked */
  download?: AllHTMLAttributes<T>['download'];
  /** A string that specifies the relationship between the current document and the linked document */
  rel?: AllHTMLAttributes<T>['rel'];
  /** A string that specifies where to open the linked document (e.g. "_blank" or "_self") */
  target?: AllHTMLAttributes<T>['target'];
}

/** ---------------------------------------------
 * Common declarations for audio-video components
 * --------------------------------------------- */
export interface IAudioVideoAttrs<T = HTMLAudioElement | HTMLVideoElement> {
  /** A boolean indicating whether the audio/video should automatically play when the page loads */
  autoPlay?: AllHTMLAttributes<T>['autoPlay'];
  /** A boolean indicating whether the audio/video controls should be displayed */
  controls?: AllHTMLAttributes<T>['controls'];
  /** A boolean indicating whether the audio/video should loop */
  loop?: AllHTMLAttributes<T>['loop'];
  /** A boolean indicating whether the audio/video should be muted */
  muted?: AllHTMLAttributes<T>['muted'];
  /** A string indicating how much of the audio/video should be loaded before it starts playing */
  preload?: AllHTMLAttributes<T>['preload'];
  /** A string indicating the URL of the audio/video file */
  src?: AllHTMLAttributes<T>['src'];
}

/** ---------------------------------------------
 * Common declarations for video components
 * --------------------------------------------- */
export interface IVideoAttrs<T = HTMLVideoElement> {
  /** A number that specifies the height of the video */
  height?: AllHTMLAttributes<T>['height'];
  /** A string that specifies the URL of an image to display as a placeholder before the video is played */
  poster?: AllHTMLAttributes<T>['poster'];
  /** A number that specifies the width of the video */
  width?: AllHTMLAttributes<T>['width'];
}

/** ---------------------------------------------
 * Common declarations for label components
 * --------------------------------------------- */
export interface ILabelAttrs<T = HTMLLabelElement> {
  /** A string that specifies which form element a label is bound to */
  htmlFor?: AllHTMLAttributes<T>['htmlFor'];
  /** A string indicating the form the image belongs to */
  form?: AllHTMLAttributes<T>['form'];
}

/** ---------------------------------------------
 * Common declarations for image components
 * - Thumbnail
 * - Avatar
 * --------------------------------------------- */
export interface IImageAttrs<T = HTMLImageElement> {
  /** A string that specifies an alternative text description of the image */
  alt?: AllHTMLAttributes<T>['alt'];
  /** A number that specifies the height of the image */
  height?: AllHTMLAttributes<T>['height'];
  /** Specifies whether a browser should load an image immediately or to defer loading of images until some conditions are met. */
  loading?: ImgHTMLAttributes<T>['loading'];
  /** Specifies which referrer information to use when fetching an image. */
  referrerPolicy?: ImgHTMLAttributes<T>['referrerPolicy'];
  /** A string that specifies the URL of the image */
  src?: AllHTMLAttributes<T>['src'];
  /** A string that specifies a set of URLs of different images to be used at different screen resolutions. E.g. 'elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w' */
  srcSet?: AllHTMLAttributes<T>['srcSet'];
  /** A string that specifies the name of an image map to use with the image */
  useMap?: AllHTMLAttributes<T>['useMap'];
  /** A number that specifies the width of the image */
  width?: AllHTMLAttributes<T>['width'];
}

/** ---------------------------------------------
 * Common declarations for area components
 * --------------------------------------------- */
export interface IAreaAttrs<T = HTMLAreaElement> {
  /** A string that specifies an alternative text description of the area */
  alt?: AllHTMLAttributes<T>['alt'];
  /** A string that specifies the file name to use for the downloaded resource when the area is clicked */
  download?: AllHTMLAttributes<T>['download'];
  /**  A string that specifies the URL of the linked resource */
  href?: AllHTMLAttributes<T>['href'];
  /** A string that specifies the language of the linked resource */
  hrefLang?: AllHTMLAttributes<T>['hrefLang'];
  /** A string that specifies a media query, which can be used to apply styles based on the device's screen size/resolution */
  media?: AllHTMLAttributes<T>['media'];
  /** A string that specifies the relationship between the current document and the linked resource */
  rel?: AllHTMLAttributes<T>['rel'];
  /** A string that specifies the shape of the area. It can be a rectangle, a circle, or a polygon */
  shape?: AllHTMLAttributes<T>['shape'];
  /** A string that specifies where to open the linked resource (e.g. "_blank" or "_self") */
  target?: AllHTMLAttributes<T>['target'];
}

/** ---------------------------------------------
 * Common declarations for content editable components (usually typographic components)
 * - Heading
 * - Paragraph
 * - ...
 * --------------------------------------------- */
export interface IContentEditableAttrs<T = Element> {
  /** The contenteditable global attribute is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing.*/
  contentEditable?: AllHTMLAttributes<T>['contentEditable'];
  /** A function that is called when the element is changed */
  onChange?: DOMAttributes<T>['onChange'];
}

/** ---------------------------------------------
 * Common declarations for all the components to define 'data-...' attributes
 * --------------------------------------------- */
export interface IDataAttrs {
  [key: `data-${string}`]: unknown;
}

/** ---------------------------------------------
 * Common declarations for content editable components (usually typographic components)
 * - Heading
 * - Paragraph
 * - ...
 * --------------------------------------------- */
export interface IContentEditableAttrs<T = Element> {
  /** The contenteditable global attribute is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing.*/
  contentEditable?: AllHTMLAttributes<T>['contentEditable'];
  /** A function that is called when the element is changed */
  onChange?: DOMAttributes<T>['onChange'];
}
