# Scripts Directory

## Asset Download Script

### Quick Start

```bash
# 1. Add asset URLs to download-assets.js
# 2. Run the script
node download-assets.js
```

### What it does
- Downloads GIFs, MIDI files, and images from Archive.org sources
- Saves to organized asset folders
- Handles redirects automatically
- Shows download progress

### How to use

1. **Find assets on GifCities/Archive.org** (see `docs/asset-download-guide.md`)
2. **Copy image URLs** (add `im_` after timestamp for Wayback Machine URLs)
3. **Edit `download-assets.js`** and add URLs to the `ASSETS` object
4. **Run**: `node download-assets.js`

### Example

```javascript
const ASSETS = {
  gifs: [
    {
      url: 'https://web.archive.org/web/20010701120111im_/http://www.geocities.com:80/sunsetstrip/garage/7630/under.gif',
      name: 'under-construction.gif'
    },
  ],
  // ... add more
};
```

### Requirements
- Node.js (no external packages needed - uses built-in `https`, `fs`, `path`)

### Asset Sources
- **GIFs**: https://gifcities.org/
- **MIDI**: https://archive.org/details/themagicofmidiv1
- **Clippy**: https://giphy.com/explore/clippy

See `docs/asset-download-guide.md` for detailed instructions.
