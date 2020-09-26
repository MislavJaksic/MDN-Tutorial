## [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

### Block and inline boxes

Boxes:
* `block`: breaks into a new line; fills its container; width and height are respected; padding, margin and border push away other elements
* `inline`: there is no new line; width and height aren't respected; horizontal (but not vertical) padding, margin and border push away other elements

Defined by `display` property.  

### Aside: Inner and outer display types

Display:
* `inner`: how the elements inside the box are laid out; normal, `flex`, `grid`, ...
* `outer`: `block` or `inline` boxes


### What is the CSS box model?

#### Parts of a box

Each `block` box has a:
* Content box: where content is displayed
* Padding box: space around the content
* Border box: a solid line just outside the padding
* Margin box: space around the outside of the border

<p align="center">
  <img width="500" src="images/box-model.png" alt="CSS box model"></a>
</p>

### The standard CSS box model

```
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

### The alternative CSS box model

You can switch to the alternative box model.

```
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

### Playing with box models

Use the browser Development Tools to view the box model.  

### Margins, padding, and borders

You can the top, right, bottom and left setting of each one.  

See `styles/style.css`.  
