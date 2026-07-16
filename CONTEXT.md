# AuraRecord Context

AuraRecord is a web-based high-definition screen recorder. This context outlines the terms, concepts, and ubiquitous language used to discuss and implementation of the recorder's functions and subsystems.

## Language

**Recording**:
A captured video file packaged as a WebM Blob along with metadata stored in the local database.
_Avoid_: Video file, capture file, movie

**Gallery**:
The user interface display and database collection representing all saved Recordings in IndexedDB.
_Avoid_: Archive, library, database list

**Trimming**:
The process of cutting the start and/or end of a Recording to keep only the selected timeframe.
_Avoid_: Cropping (use for dimensions), slicing, splitting

**Dimension Cropping**:
Resizing the visual viewport of the video (e.g. 16:9, 1:1, or manual crop area).
_Avoid_: Resizing, trimming

**Exporting**:
Generating the final edited video file and either replacing the existing Recording in the Gallery or saving as a new one.
_Avoid_: Rendering, exporting to disc (use download instead)
