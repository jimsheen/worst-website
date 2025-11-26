# Asset Download Guide - Quick Start

## Using the Scraper Script

### Step 1: Find Asset URLs

#### 🎨 GIFs from GifCities

**Under Construction GIFs:**
1. Visit: https://gifcities.org/
2. Search: "under construction"
3. Click on a GIF you like
4. You'll be taken to Wayback Machine page
5. Right-click the GIF → Copy Image Address
6. **Important**: Add `im_` after the timestamp in the URL
   - Original: `https://web.archive.org/web/20010701120111/http://...`
   - Fixed: `https://web.archive.org/web/20010701120111im_/http://...`

**Example URLs already in script:**
```
https://web.archive.org/web/20010701120111im_/http://www.geocities.com:80/sunsetstrip/garage/7630/under.gif
https://web.archive.org/web/20010604162646im_/http://www.geocities.com:80/Tokyo/6225/construction.gif
```

**Other GIF searches on GifCities:**
- Sparkles: https://gifcities.org/search?q=sparkles&offset=0&page_size=200
- Flames: https://gifcities.org/search?q=flames&offset=0&page_size=200
- Email: https://gifcities.org/search?q=email+envelope&offset=0&page_size=200
- New badge: https://gifcities.org/search?q=new+badge&offset=0&page_size=200
- Hot badge: https://gifcities.org/search?q=hot&offset=0&page_size=200
- Dividers: https://gifcities.org/search?q=divider&offset=0&page_size=200

---

#### 🎵 MIDI Files from Archive.org

1. Visit: https://archive.org/details/themagicofmidiv1
2. Click "SHOW ALL" to see file list
3. Find an annoying-sounding MIDI
4. Right-click → Copy Link Address
5. Example URL format:
   ```
   https://archive.org/download/themagicofmidiv1/[filename].mid
   ```

**Recommended searches within the collection:**
- Look for short, looping MIDIs
- Avoid classical music (too pleasant)
- Try 8-bit game music or simple melodies

---

#### 🖼️ Clippy from GIPHY

1. Visit: https://giphy.com/explore/clippy
2. Find a good animated Clippy
3. Click the GIF
4. Click "Share" → "Copy GIF Link"
5. OR click download and use local file

**Direct Clippy links:**
- https://giphy.com/gifs/Windows-windows-clippy-microsoft-Yh9FyWkUSletEfxLIO
- https://giphy.com/gifs/clippy-UB6yOX25qeRgY

**For GIPHY downloads:**
- Click "Download" button
- Choose size (Medium is fine)
- Manually save to `assets/images/clippy.gif`

---

### Step 2: Add URLs to Script

Open `scripts/download-assets.js` and add your URLs:

```javascript
const ASSETS = {
  gifs: [
    // Under Construction (3 examples already added)
    { url: 'https://web.archive.org/web/20010701120111im_/http://...', name: 'under-construction-1.gif' },

    // ADD MORE HERE:
    { url: 'YOUR_SPARKLE_URL_HERE', name: 'bg-sparkles.gif' },
    { url: 'YOUR_FLAME_URL_HERE', name: 'bg-flames.gif' },
    { url: 'YOUR_EMAIL_URL_HERE', name: 'email-spinning.gif' },
    { url: 'YOUR_NEW_BADGE_URL_HERE', name: 'new-badge.gif' },
    { url: 'YOUR_HOT_BADGE_URL_HERE', name: 'hot-badge.gif' },
    { url: 'YOUR_DIVIDER_URL_HERE', name: 'divider-rainbow.gif' },
  ],

  sounds: [
    // ADD MIDI URLS HERE:
    { url: 'https://archive.org/download/themagicofmidiv1/FILENAME.mid', name: 'background-music.mid' },
  ],

  images: [
    // Clippy - manually download from GIPHY or add URL
    { url: 'CLIPPY_GIF_URL', name: 'clippy.gif' }
  ]
};
```

---

### Step 3: Run the Scraper

```bash
# Make script executable
chmod +x scripts/download-assets.js

# Run the scraper
node scripts/download-assets.js
```

**What it does:**
- Downloads each asset from the URLs
- Saves to appropriate folders (assets/gifs, assets/sounds, assets/images)
- Shows progress and errors
- Adds 1-second delay between downloads (respectful to servers)

---

## Quick Asset Checklist

### Essential GIFs (Priority 1)
- [ ] 2-3 Under Construction GIFs ✅ (already in script)
- [ ] 1-2 Background tiles (sparkles/flames/stars)
- [ ] 1 Spinning email envelope
- [ ] 1 "New!" badge
- [ ] 1 "Hot!" badge
- [ ] 2-3 Animated dividers
- [ ] 1 Clippy GIF

### Essential Audio (Priority 1)
- [ ] 1 Background MIDI file (annoying)

### Optional Assets (Priority 2)
- [ ] Award badges
- [ ] Visitor counter digits (0-9)
- [ ] Web ring badges
- [ ] Netscape Navigator badge

---

## Alternative: Manual Downloads

If scraper doesn't work:

1. **For GIFs**: Right-click → Save Image As → Save to `assets/gifs/`
2. **For MIDIs**: Right-click → Save Link As → Save to `assets/sounds/`
3. **For Clippy**: Download from GIPHY → Save to `assets/images/`

---

## Creating Custom Assets

### BSOD Image (Required)
Since this needs to be custom, create it manually:

**Option 1: Screenshot**
- Google "Windows 95 blue screen of death"
- Find high-res image
- Save as `assets/images/bsod.png`

**Option 2: Create in Figma/Photoshop**
- Background: #0000AA (Windows blue)
- Font: Courier New, white, 16px
- Text content from `docs/feature-spec.md`

### Big Red Button (Optional)
If you can't find a good red button GIF:
- Use CSS animation instead (already in technical spec)
- Or create a simple pulsating red rectangle GIF

### Windows 95 Icons (Optional)
- Google "Windows 95 warning icon PNG"
- Google "Windows 95 error icon PNG"
- Save as transparent PNGs to `assets/images/`

---

## Recommended Asset URLs (Pre-Selected)

Here are some direct URLs to get you started quickly:

### Under Construction (Already in script)
```
✅ https://web.archive.org/web/20010701120111im_/http://www.geocities.com:80/sunsetstrip/garage/7630/under.gif
✅ https://web.archive.org/web/20010604162646im_/http://www.geocities.com:80/Tokyo/6225/construction.gif
✅ https://web.archive.org/web/20091027124451im_/http://geocities.com/benwan3000/images/gif/construction.gif
```

### Find More on GifCities
Just search and copy the image URLs (remember to add `im_` after timestamp!)

---

## Troubleshooting

**Script fails with 404 errors:**
- Archive.org URLs sometimes break
- Try searching GifCities again for fresh URLs
- Add `im_` after timestamp: `/web/20010701120111im_/`

**Downloads are slow:**
- Script has 1-second delay between downloads (by design)
- Archive.org may be slow - be patient

**Can't find good assets:**
- Use docs/asset-sources.md for alternative sources
- Create placeholders and replace later
- Some assets can be CSS-only (buttons, etc.)

---

## Next Steps After Download

1. ✅ Run scraper script
2. ✅ Verify files in assets/ folders
3. ✅ Create any missing custom assets (BSOD, etc.)
4. ✅ Move to Phase 3: Build HTML structure

---

**Quick Command Reference:**

```bash
# Run scraper
node scripts/download-assets.js

# Check downloaded assets
ls -la assets/gifs/
ls -la assets/sounds/
ls -la assets/images/

# Create BSOD placeholder
touch assets/images/bsod.png
```

---

**Need Help?**
- Check `docs/asset-sources.md` for detailed source info
- GifCities search: https://gifcities.org/
- MIDI archive: https://archive.org/details/themagicofmidiv1
