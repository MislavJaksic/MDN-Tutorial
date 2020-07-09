## [Video and audio content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

### Video and audio on the web

See `index.html`.  

### Using multiple source formats to improve compatibility

MP3, MP4 and WebM are called `Container Format`s.  
`Codec` stands for `COde/DECode`, a way of compressing or encrypting.  
Audio tracks are encoded using an `Audio Codec`.  
Video tracks are encoded using a `Video Codec`.

`MIME type`, media type or content type describes the `Codec`.  

### Other <video> features

 Features:
* `autoplay`: avoid
* `loop`: avoid
* `muted`: no sound
* `poster`: URL of an image, a thumbnail
* `preload`: `none`, `auto` or `metadata`

#### Restarting media playback

```
const mediaElem = document.getElementById("my-media-element");
mediaElem.load();
```

#### Detecting track addition and removal

```
const mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}
```

### Displaying video text tracks

You can add subtitles using the WebVTT format.  
