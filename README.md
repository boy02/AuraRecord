# AuraRecord - Web HD Screen Recorder

A local high-definition web screen recording tool. It supports recording the screen, application windows, or browser tabs, and can mix system audio and microphone inputs simultaneously.

## Features
- **High-Quality Audio Mixing**: Combines system audio and microphone vocal inputs seamlessly using the Web Audio API.
- **Local Storage**: Recorded videos are saved locally inside the browser's IndexedDB and support downloading in WebM format.
- **Webcam Overlay**: Toggles a webcam preview window during recording with draggable movement support.
- **Real-Time Audio Monitor**: Real-time microphone level visualizer to verify vocal recording quality.

## Run
### Method 1:
Open a terminal in the current directory and run:
  ```bash
  python -m http.server 8000
  ```
### Method 2 (Windows):
  ```run
  .\run.bat
  ```
 - Then open your browser and visit: `http://localhost:8000`.

---

## License

This project is open-source under the [MIT License](LICENSE).
