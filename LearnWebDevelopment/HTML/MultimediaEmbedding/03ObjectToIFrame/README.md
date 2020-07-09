## [From object to iframe — other embedding technologies](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)

### Iframes in detail

`<iframe>` embeds other resources into your own.  
You can embed `YouTube` videos or `Google Map`s.  

#### Security concerns

Risks and solutions:
* clickjacking: embed an invisible `<iframe>` to steal user interaction
* embed only if necessary
* use HTTPS, use [Let's Encrypt](https://letsencrypt.org/)
* set the attribute `sandbox=""` then add permissions if necessary
* configure the `Content Security Policy` (CSP) HTTP headers

### The <embed> and <object> elements

You won't use either.  
