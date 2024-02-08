# Color picker

* [npm package](https://www.npmjs.com/package/react-color)
* [Official library docs](http://casesandberg.github.io/react-color/)
* [Storybook](http://area51.devo.internal/coco/master/storybook-static/?path=/story/public-molecules-colorpicker)

Example: use component in `react/organisms/PropsPanel/types/Color.jsx`.

The component consists of two main parts, Field and Picker.

There are two ways to use the component with or without liveUpdate.

- liveUpdate: the component will always show the color for every instant click in the field. One of the points to emphasize is that it is not allowed to drag the color picker, it only responds to clicks.

- without liveUpdate: field will render the chosen color only in case the picker is closed, that way we avoid constant renderings of the component. In this case it is allowed to drag the picker to see the progression of the selected color directly in the picker.
