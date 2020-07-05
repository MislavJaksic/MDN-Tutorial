## [Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

### What is HTML?

HTML (`Hypertext Markup Language`) is a markup language.  
HTML is made up of `Element`s.  
HTML `Element` `Tag`s enclose `Content`.  


### Anatomy of an HTML element

```
<tag att="Attribute-Value">Content</tag>
```

`<tag att="Attribute-Value">Content</tag>` is an HTML `Element`.  
`<tag>` and `</tag>` are an opening and closing `Tag`s.  
`att="Attribute-Value"` are the `Attribute` name and value.  

#### Nesting elements

```
<tag-1><tag-2>Content</tag-2></tag-1>
```

#### Block and Inline elements

`Block Element`s:
* form a visible block
* appears on a new line after the previous content
* example: `<p>`

`Inline Element`s:
* inside `Block Element`
* will not cause a new line
* example: `<em>`

#### Empty or Void elements

HTML `Element`s without `Content` and a closing `Tag`.  

```
<img src="Image-Url">
```

### Attributes

```
<a href="Url-Link" title="Title-Name" target="_blank">Content</a>
```

`href`, `title` and `target` are `Attribute`s.  

`Attribute`s are extra information in HTML `Element`s.  

#### Boolean attributes

```
<input disabled="disabled">
OR
<input disabled>  <!-- shorthand syntax -->
```

`Boolean Attribute`s only have one value.  

#### Omitting quotes around attribute values

Don't. Always quotes values.  

#### Single or double quotes?

Pick one and stick with it.  
MDN prefers double quotes.  

### Anatomy of an HTML document

Each HTML `Element` has a purpose.  
See `index.html`.  

#### Whitespace in HTML

Doesn't matter.  

### Entity references: Including special characters in HTML

`<`, `>`,`"`,`'` and `&` are special characters in HTML.  
`&lt;`, `&gt;`, `&quot;`, `&apos;` and  `&amp;` are replacement characters.  

### HTML comments

```
<!-- Html comment -->
```
