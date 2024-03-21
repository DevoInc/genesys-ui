import type { DOMAttributes } from 'react';

/** ---------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * Common declarations for html event handlers
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- */

/** ---------------------------------------------
 * Events for field components
 * - Input
 * - Select
 * - Textare
 * --------------------------------------------- */
export interface IFieldEventAttrs<T = Element> {
  /** A function that is called when the element is changed */
  onChange?: DOMAttributes<T>['onChange'];
}

/** ---------------------------------------------
 * Events for container components
 * - Flex
 * - Box
 * - ...
 * --------------------------------------------- */
export interface IContainerEventAttrs<T = Element> {
  /** A function that is called when the element is clicked */
  onClick?: DOMAttributes<T>['onClick'];
  /** A function that is called when the right mouse button is clicked on the element */
  onContextMenu?: DOMAttributes<T>['onContextMenu'];
  /** A function that is called when the element is changed */
  onChange?: DOMAttributes<T>['onChange'];
  /** A function that is called when the user copies the content of the element */
  onCopy?: DOMAttributes<T>['onCopy'];
  /** A function that is called when the user cuts the content of the element */
  onCut?: DOMAttributes<T>['onCut'];
  /** A function that is called when the element is double-clicked */
  onDoubleClick?: DOMAttributes<T>['onDoubleClick'];
  /** A function that is called when a key is pressed down while the element is in focus */
  onKeyDown?: DOMAttributes<T>['onKeyDown'];
  /** A function that is called when a key is released while the element is in focus */
  onKeyUp?: DOMAttributes<T>['onKeyUp'];
  /** A function that is called when the user pastes content into the element */
  onPaste?: DOMAttributes<T>['onPaste'];
  /** A function that is called when the element's content is scrolled */
  onScroll?: DOMAttributes<T>['onScroll'];
  /** A function that is called when the mouse wheel is scrolled while the element is in focus */
  onWheel?: DOMAttributes<T>['onWheel'];
}

/** ---------------------------------------------
 * Focus events
 * --------------------------------------------- */
export interface IFocusEventAttrs<T = Element> {
  /** A function that is called when the element loses focus */
  onBlur?: DOMAttributes<T>['onBlur'];
  /** A function that is called when the element gains focus */
  onFocus?: DOMAttributes<T>['onFocus'];
}

/** ---------------------------------------------
 * Mouse events
 * --------------------------------------------- */
export interface IMouseEventAttrs<T = Element> {
  /** A function that is called when the element is clicked */
  onClick?: DOMAttributes<T>['onClick'];
  /** A function that is called when the mouse button is pressed on the element */
  onMouseDown?: DOMAttributes<T>['onMouseDown'];
  /** A function that is called when the mouse pointer leaves the element */
  onMouseLeave?: DOMAttributes<T>['onMouseLeave'];
  /** A function that is called when the mouse pointer moves over the element */
  onMouseMove?: DOMAttributes<T>['onMouseMove'];
  /** A function that is called when the mouse pointer moves out of the element */
  onMouseOut?: DOMAttributes<T>['onMouseOut'];
  /** A function that is called when the mouse pointer moves over the element */
  onMouseOver?: DOMAttributes<T>['onMouseOver'];
  /** A function that is called when the mouse button is released on the element */
  onMouseUp?: DOMAttributes<T>['onMouseUp'];
}

/** ---------------------------------------------
 * Trigger events
 * --------------------------------------------- */
export interface ITriggerEventAttrs<T = Element> {
  /** A function that is called when the element is clicked */
  onClick?: DOMAttributes<T>['onClick'];
  /** A function that is called when the element is changed */
  onChange?: DOMAttributes<T>['onChange'];
}

/** ---------------------------------------------
 * Drag & Drop events
 * --------------------------------------------- */
export interface IDragDropEventAttrs<T = Element> {
  /** A function that is called when an element or text selection is being dragged */
  onDrag?: DOMAttributes<T>['onDrag'];
  /** A function that is called when an element or text selection is dragged into a valid drop target */
  onDragEnter?: DOMAttributes<T>['onDragEnter'];
  /** A function that is called when an element or text selection is dragged out of a valid drop target */
  onDragLeave?: DOMAttributes<T>['onDragLeave'];
  /** A function that is called when an element or text selection is being dragged over a valid drop target */
  onDragOver?: DOMAttributes<T>['onDragOver'];
  /** A function that is called when the user starts to drag an element or text selection */
  onDragStart?: DOMAttributes<T>['onDragStart'];
  /** A function that is called when the user releases the dragged element or text selection */
  onDragEnd?: DOMAttributes<T>['onDragEnd'];
  /** A function that is called when an element or text selection is dropped on a valid drop target */
  onDrop?: DOMAttributes<T>['onDrop'];
}

/** ---------------------------------------------
 * Audio & Video events
 * --------------------------------------------- */
export interface IAudioVideoEventAttrs<
  T = HTMLVideoElement | HTMLAudioElement,
> {
  /** A function that is called when the audio/video is stopped before it finishes playing */
  onAbort: DOMAttributes<T>['onAbort'];
  /** A function that is called when the browser can start playing the audio/video */
  onCanPlay: DOMAttributes<T>['onCanPlay'];
  /** A function that is called when the browser estimates it can play through the audio/video without interruption */
  onCanPlayThrough: DOMAttributes<T>['onCanPlayThrough'];
  /** A function that is called when the duration of the audio/video changes */
  onDurationChange: DOMAttributes<T>['onDurationChange'];
  /** A function that is called when the audio/video has become empty */
  onEmptied: DOMAttributes<T>['onEmptied'];
  /** A function that is called when the audio/video has ended */
  onEnded: DOMAttributes<T>['onEnded'];
  /** A function that is called when an error occurs while loading the audio/video */
  onError: DOMAttributes<T>['onError'];
  /** A function that is called when the browser has loaded the current frame of the audio/video */
  onLoadedData: DOMAttributes<T>['onLoadedData'];
  /** A function that is called when the browser has loaded meta data for the audio/video */
  onLoadedMetadata: DOMAttributes<T>['onLoadedMetadata'];
  /** A function that is called when the browser starts looking for the audio/video */
  onLoadStart: DOMAttributes<T>['onLoadStart'];
  /** A function that is called when the audio/video is paused */
  onPause: DOMAttributes<T>['onPause'];
  /** A function that is called when the audio/video starts to play */
  onPlay: DOMAttributes<T>['onPlay'];
  /** A function that is called when the audio/video starts to play after having been paused */
  onPlaying: DOMAttributes<T>['onPlaying'];
  /** A function that is called when the browser is downloading the audio/video */
  onProgress: DOMAttributes<T>['onProgress'];
  /** A function that is called when the playing speed of the audio/video changes */
  onRateChange: DOMAttributes<T>['onRateChange'];
  /** A function that is called when the user has finished moving/skipping to a new position in the audio/video */
  onSeeked: DOMAttributes<T>['onSeeked'];
  /** A function that is called when the user starts moving/skipping to a new position in the audio/video */
  onSeeking: DOMAttributes<T>['onSeeking'];
  /** A function that is called when the browser is unable to fetch the audio/video data for any reason */
  onStalled: DOMAttributes<T>['onStalled'];
  /** A function that is called when the browser stops fetching the audio/video data */
  onSuspend: DOMAttributes<T>['onSuspend'];
  /** A function that is called when the current time of the audio/video has changed */
  onTimeUpdate: DOMAttributes<T>['onTimeUpdate'];
  /** A function that is called when the volume of the audio/video changes */
  onVolumeChange: DOMAttributes<T>['onVolumeChange'];
  /** A function that is called when the audio/video stops because it needs to buffer the next frame */
  onWaiting: DOMAttributes<T>['onWaiting'];
}

/** ---------------------------------------------
 * Image events
 * --------------------------------------------- */
export interface IImageEventAttrs<T = HTMLImageElement> {
  /** A function that is called when the image is stopped before it finishes loading */
  onAbort?: DOMAttributes<T>['onAbort'];
  /**  A function that is called when an error occurs while loading the image  */
  onError?: DOMAttributes<T>['onError'];
  /** A function that is called when the image has finished loading */
  onLoad?: DOMAttributes<T>['onLoad'];
}

/** ---------------------------------------------
 * Text box events: input and textarea
 * --------------------------------------------- */
export interface ITextBoxEventAttrs<
  T = HTMLInputElement | HTMLTextAreaElement,
> {
  /** A function that is called when the element's content is selected */
  onSelect?: DOMAttributes<T>['onSelect'];
}

/** ---------------------------------------------
 * Textarea events
 * --------------------------------------------- */
export interface ITextareaEventAttrs<T = HTMLTextAreaElement> {
  /** A function that is called when the content of a textarea field changes */
  onInput?: DOMAttributes<T>['onInput'];
}

/** ---------------------------------------------
 * Input events
 * --------------------------------------------- */
export interface IInputEventAttrs<T = HTMLInputElement> {
  /** A function that is called when the value of an input field changes */
  onInput?: DOMAttributes<T>['onInput'];
  /** A function that is called when a user submits a form with an invalid input */
  onInvalid?: DOMAttributes<T>['onInvalid'];
  /** A function that is called when the input field is loaded, typically happens when the input type is image */
  onLoad?: DOMAttributes<T>['onLoad'];
}
