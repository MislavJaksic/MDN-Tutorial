## [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

### Styling backgrounds in CSS

The CSS `background` property is a shorthand.  

#### Background colors

The background-color property defines the background color on any element in CSS. The property accepts any valid <color>. A background-color extends underneath the content and padding box of the element.

In the example below, we have used various color values to add a background color to the box, a heading, and a <span> element.

Play around with these, using any available <color> value.

#### Background images

The background-image property enables the display of an image in the background of an element. In the example below, we have two boxes — one has a background image which is larger than the box, the other has a small image of a star.

This example demonstrates two things about background images. By default, the large image is not scaled down to fit the box, so we only see a small corner of it, whereas the small image is tiled to fill the box. In this case, the actual image is just a single star.

If you specify a background color in addition to a background image then the image displays on top of the color. Try adding a background-color property to the example above to see that in action.
Controlling background-repeat

The background-repeat property is used to control the tiling behavior of images. The available values are:

    no-repeat — stop the background from repeating altogether.
    repeat-x — repeat horizontally.
    repeat-y — repeat vertically.
    repeat — the default; repeat in both directions.

Try these values out in the example below. We have set the value to no-repeat so you will only see one star. Try out the different values — repeat-x and repeat-y — to see what their effects are.

Sizing the background image

In the example above, we have a large image that has ended up being cropped as it is larger than the element it is a background of. In this case we could use the background-size property, which can take length or percentage values, to size the image to fit inside the background.

You can also use keywords:

    cover — the browser will make the image just large enough so that it completely covers the box area while still retaining its aspect ratio. In this case, part of the image is likely to end up outside the box.
    contain — the browser will make the image the right size to fit inside the box. In this case, you may end up with gaps on either side or on the top and bottom of the image, if the aspect ratio of the image is different from that of the box.

In the example below I have used the larger image from the example above and used length units to size it inside the box. You can see this has distorted the image.

Try the following.

    Change the length units used to modify the size of the background.
    Remove the length units and see what happens when you use background-size: cover or background-size: contain.
    If your image is smaller than the box, you can change the value of background-repeat to repeat the image.

Positioning the background image

The background-position property allows you to choose the position in which the background image appears on the box it is applied to. This uses a coordinate system in which the top-left-hand corner of the box is (0,0), and the box is positioned along the horizontal (x) and vertical (y) axes.

Note: The default background-position value is (0,0).

The most common background-position values take two individual values — a horizontal value followed by a vertical value.

You can use keywords such as top and right (look up the others on the background-position page):

.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}

And Lengths, and percentages:

.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}

You can also mix keyword values with lengths or percentages, for example:

.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}

Finally, you can also use a 4-value syntax in order to indicate a distance from certain edges of the box — the length unit, in this case, is an offset from the value that precedes it. So in the CSS below we are positioning the background 20px from the top and 10px from the right:

.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}

Use the example below to play around with these values and move the star around inside the box.

Note: background-position is a shorthand for background-position-x and background-position-y, which allow you to set the different axis position values individually.
Gradient backgrounds

A gradient — when used for a background — acts just like an image and is also set by using the background-image property.

You can read more about the different types of gradients and things you can do with them on the MDN page for the <gradient> data type. A fun way to play with gradients is to use one of the many CSS Gradient Generators available on the web, such as this one. You can create a gradient then copy and paste out the source code that generates it.

Try some different gradients in the example below. In the two boxes respectively, we have a linear gradient that is stretched over the whole box, and a radial gradient with a set size, which therefore repeats.

Multiple background images

It is also possible to have multiple background images — you specify multiple background-image values in a single property value, separating each one with a comma.

When you do this you may end up with background images overlapping each other. The backgrounds will layer with the last listed background image at the bottom of the stack, and each previous image stacking on top of the one that follows it in the code.

Note: Gradients can be happily mixed with regular background images.

The other background-* properties can also have comma-separated values in the same way as background-image:

background-image: url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;

Each value of the different properties will match up to the values in the same position in the other properties. Above, for example, image1's background-repeat value will be no-repeat. However, what happens when different properties have different numbers of values? The answer is that the smaller numbers of values will cycle — in the above example there are four background images but only two background-position values. The first two position values will be applied to the first two images, then they will cycle back around again — image3 will be given the first position value, and image4 will be given the second position value.

Let's play. In the example below I have included two images. To demonstrate the stacking order, try switching which background image comes first in the list. Or play with the other properties to change the position, size, or repeat values.

Background attachment

Another option we have available for backgrounds is specifying how they scroll when the content scrolls. This is controlled using the background-attachment property, which can take the following values:

    scroll: It causes the element's background to scroll when the page is scrolled. If the element content is scrolled, the background does not move. In effect, the background is fixed to the same position on the page, so it scrolls as the page scrolls.
    fixed: It causes an element's background to be fixed to the viewport so that it doesn't scroll when the page or element content is scrolled. It will always remain in the same position on the screen.
    local: This value was added later on (it is only supported in Internet Explorer 9+, whereas the others are supported in IE4+) because the scroll value is rather confusing and doesn't really do what you want in many cases. The local value fixes the background to the element it is set on, so when you scroll the element, the background scrolls with it.

The background-attachment property only has an effect when there is content to scroll, so we've made a demo to demonstrate the differences between the three values — have a look at background-attachment.html (also see the source code here).
Using the background shorthand property

As I mentioned at the beginning of this lesson, you will often see backgrounds specified using the background property. This shorthand lets you set all of the different properties at once.

If using multiple backgrounds, you need to specify all of the properties for the first background, then add your next background after a comma. In the example below we have a gradient with a size and position, then an image background with no-repeat and a position, then a color.

There are a few rules that need to be followed when writing background image shorthand values, for example:

    A background-color may only be specified after the final comma.
    The value of background-size may only be included immediately after background-position, separated with the '/' character, like this: center/80%.

Take a look at the MDN page for background to see all of the considerations.

Accessibility considerations with backgrounds

When placing text on top of a background image or color, you should take care that you have enough contrast for the text to be legible for your visitors. If specifying an image, and text will be placed on top of that image, you should also specify a background-color that will allow the text to be legible if the image does not load.

Screen readers cannot parse background images, therefore they should be purely decoration; any important content should be part of the HTML page and not contained in a background.
Borders

When learning about the Box Model, we discovered how borders affect the size of our box. In this lesson we will look at how to use borders creatively. Typically when we add borders to an element with CSS we use a shorthand property that sets the color, width, and style of the border in one line of CSS.

We can set a border for all four sides of a box with border:

.box {
  border: 1px solid black;
}

Or we can target one edge of the box, for example:

.box {
  border-top: 1px solid black;
}

The individual properties for these shorthands would be:

.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}

And for the longhands:

.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}

Note: These top, right, bottom, and left border properties also have mapped logical properties that relate to the writing mode of the document (e.g. left-to-right or right-to-left text, or top-to-bottom). We'll be exploring these in the next lesson, which covers handling different text directions.

There are a variety of styles that you can use for borders. In the example below we have used a different border style for the four sides of my box. Play with the border style, width, and color to see how borders work.

Rounded corners

Rounding corners on a box is achieved by using the border-radius property and associated longhands which relate to each corner of the box. Two lengths or percentages may be used as a value, the first value defining the horizontal radius, and the second the vertical radius. In a lot of cases, you will only pass in one value, which will be used for both.

For example, to make all four corners of a box have a 10px radius:

.box {
  border-radius: 10px;
}

Or to make the top right corner have a horizontal radius of 1em, and a vertical radius of 10%:

.box {
  border-top-right-radius: 1em 10%;
}

We have set all four corners in the example below and then changed the values for the top right corner to make it different. You can play with the values to change the corners. Take a look at the property page for border-radius to see the available syntax options.
