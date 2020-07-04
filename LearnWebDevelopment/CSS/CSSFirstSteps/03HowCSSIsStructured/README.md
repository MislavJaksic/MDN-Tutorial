## [How CSS is structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)

### Applying CSS to HTML

Application:
* external (in `*.css` and linked with `<link>`)
* internal (in `<html>``<head>``<style>`)
* inline (as HTML element attributes `style`): avoid!

### Selectors

When CSS rules conflict then:
* `Cascade`: later rules override previous rules
* `Specificity`: more specific selectors override less specific selectors

### Properties and values

```
/* ruleset: all declaration blocks */
/* rule: selector plus declaration block */
h1,h2 {  /* selector selects element */
    color: red;  /* declaration: a property and a value */
    font-size: 5em;  /* another declaration */
}  /* declaration block */
```

#### Functions

CSS functions exist:
* `calc()`
* `rotate()`
* ...

### @rules

CSS `@rules` (`at-rules`):
* `@import`
* `@media`
* ...

### Shorthands

Shorthand properties omit property names and just specify values.  

```
padding: 10px 15px 15px 5px;
OR
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```
