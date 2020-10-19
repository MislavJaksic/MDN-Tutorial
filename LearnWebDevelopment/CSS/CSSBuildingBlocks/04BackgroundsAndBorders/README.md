## [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

### Styling backgrounds in CSS

The `background` property is a shorthand for lots of longhand properties.  

#### Background colors

The `background-color` property extends underneath the content and padding box of the element.  

#### Background images

The `background-image` tiles small images and shows the upper left corner of large images. The image is displayed on top of the `background-color`.  

##### Controlling background-repeat

The `background-repeat` controls tiling:
* `no-repeat`: don't repeat
* `repeat-x`: repeat horizontally
* `repeat-y`: repeat vertically
* `repeat`: repeat in both directions; default

##### Sizing the background image

The `background-size` sizes the image to fit:
* `length` or
* `percentage`
* `cover`: respect aspect ratio and cover the box
* `contain`: respect aspect ratio and fit inside the box

##### Positioning the background image

The `background-position` positions the image.  

#### Gradient backgrounds

A gradient is set by `background-image`.  

See [<gradient>](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient).  
[CSS Gradient Generator](https://cssgradient.io/)  

#### Multiple background images

The `background-image` accepts multiple images. They will be stacked from right to left.  

#### Background attachment

The `background-attachment` says what happens when the page is scrolled:
* `scroll`: element's background will scroll when the page is scrolled; if the element is scrolled, the background is fixed
* `fixed`: remains in the same position of the screen
* `local`: the background is fixed to the element; when you scroll the element, the background scrolls with it

#### Using the background shorthand property

`background` is shorthand for (in no order):
* `background-attachment`
* `background-clip`
* `background-color`
* `background-image`
* `background-origin`
* `background-position`
* `background-repeat`
* `background-size`

### Borders

`border` is shorthand for (in no order):
* `border-color`
* `border-style`
* `border-width`

#### Rounded corners

The `border-radius` rounds border corners.  
