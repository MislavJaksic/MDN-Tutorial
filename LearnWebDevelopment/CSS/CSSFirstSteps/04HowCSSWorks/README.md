## [How CSS works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)

### How does CSS actually work?

```
Get HTML -> Get CSS -> Create DOM Tree -> Apply CSS Style to DOM Tree -> Display Website
```

### About the DOM

A DOM (`Document Object Model`) has a tree-like structure.  
It's made up of DOM nodes.  

### A real DOM representation

```
<p>                             P
  Let's use:                    ├─ "Let's use:"
  <span>Cascading</span>        ├─ SPAN
  <span>Style</span>            |  └─ "Cascading"
  <span>Sheets</span>           ├─ SPAN
</p>                            |  └─ "Style"
                                └─ SPAN
                                   └─ "Sheets"
```
