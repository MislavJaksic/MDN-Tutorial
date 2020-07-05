## [Creating hyperlinks](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

### What is a hyperlink?

Hyperlinks, a URL, point to other web resources.  

### Anatomy of a link

```
<a href="Resource-Url" title="Mouseover-Tooltip">Content</a>
```

### A quick primer on URLs and paths

Meaning:
* `../`: back
* `/`: root

#### Document fragments

Link to a specific part of the website.  

```
<a href="Resource-Url#Doc-Fragment" title="Mouseover-Tooltip">Content</a>
```

#### Absolute versus relative URLs

Absolute links specify the entire resource path.  
Relative link specify a resource path starting from the current resource.  

### Link best practices

Clear wording.  
Use relative links as much as possible.  
Signpost a resources type (video, images, ...).  
Use the `download` `Attribute`.  

### E-mail links

```
<a href="mailto:Email-Address">
```

You can even create a default subject and CC.  
