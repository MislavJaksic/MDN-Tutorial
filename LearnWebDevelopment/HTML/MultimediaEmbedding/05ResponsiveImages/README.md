## [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### Why responsive images?

`Art Direction`: how are you going to crop the image to fit the screen?  
`Resolution Switching`: at what resolution do you switch to a smaller image size?  

### How do you create responsive images?

See `index.html`.  

#### Resolution switching: Different sizes

Attributes:
* `srcset`: defines a set of images
* `sizes`: conditions for choosing a different image

#### Resolution switching: Same size, different resolutions

There is an alternative syntax.  

#### Art direction

Don't rescale an image, switch it for another image.  

#### Why can't we just do this using CSS or JavaScript?

Because browsers preload images and JavaScript and CSS would lag behind.  
