# 0001-client-side-video-editing.md

## Context
We need a way to perform video editing (specifically trimming and simple filtering/renaming) inside a zero-dependency web application. Importing heavy libraries like `ffmpeg.wasm` requires special cross-origin server headers (COOP/COEP) and adds megabytes of assets, which makes deployment on generic servers or local folder servers hard. 

## Decision
We will implement video editing using the built-in HTML5 Canvas and MediaRecorder APIs. The original video will play on a hidden `<video>` element, be drawn onto a `<canvas>` element frame-by-frame starting at the user's selected `startTime`, and captured using `canvas.captureStream()`. For audio, we will use the Web Audio API (`MediaElementAudioSourceNode` and `MediaStreamAudioDestinationNode`) to capture and trim the audio track, mixing it back into the recording stream.

## Consequences
- **Pros**: Zero external dependencies, extremely small footprint, runs on any basic HTTP server.
- **Cons**: Trimming is performed in real-time or playback-rate bound (though we can increase video playback rate slightly, normal speed is most reliable for matching audio). The user must wait while the video is processed.
