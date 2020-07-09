## [Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)

### What are vector graphics?

Raster images are defined using a grid of pixels.  
Vector images are defined using algorithms.  

### What is SVG?

SVG is an XML-based language for describing vector images.  
Vector graphics editor: `Inkscape`, `Illustrator`.

Upsides:
* good for SEO
* can be scripted and styled
* small memory footprint

Downsides:
* complex
* slow to draw

### Adding SVG to your pages

#### The quick way: <img>

Pros:
* quick
* can be a hyperlink
* cached by the browser

Cons:
* cannot be manipulated

#### How to include SVG code inside your HTML

Pros:
* saves an HTTP request
* can assign classes and ids to SVG elements and style them
* only approach that lets you use CSS interactions
* can be a hyperlink

Cons:
* duplication is resource-intensive
* increases the size of your HTML file
* cannot cache

#### How to embed an SVG with an <iframe>

Cons:
* cannot use JavaScript, unless the origin is the same
