# The Worst Website Ever - Project Plan

## Project Overview

**Name**: The Worst Website Ever
**Purpose**: Art/nostalgia piece for worst website competition
**Goal**: Create the most memorably terrible website that is fully functional underneath
**Hosting**: Vercel (static deployment)
**Timeline**: Single build phase

---

## Success Criteria

### Competition Winning Factors
1. **Memorable signature feature** - Red button with cascading error dialogs → BSOD
2. **Authentic 90s aesthetic** - GeoCities/Angelfire era accuracy
3. **Interactive chaos** - Not just static ugly, but engaging terrible
4. **Technical excellence** - Works perfectly while looking awful
5. **Nostalgic impact** - Judges remember the 90s web era

### Technical Requirements
- ✅ Fully functional on modern browsers
- ✅ Mobile responsive (terribly so)
- ✅ Fast load times (ironic for a "bad" site)
- ✅ No broken functionality (intentional "broken" is fine)
- ✅ Deployable to Vercel as static site

---

## Project Phases

### Phase 1: Planning & Documentation ⏳ IN PROGRESS
**Objective**: Complete planning before any code is written

**Deliverables**:
- [x] Research document (completed: `worst-website-research.md`)
- [ ] Project plan (this document)
- [ ] Feature specification
- [ ] Asset sources documentation
- [ ] Technical specification

**Outcome**: Clear roadmap and asset inventory

---

### Phase 2: Asset Collection
**Objective**: Gather all necessary GIFs, sounds, images

**Asset Categories**:
1. **Animated GIFs**
   - Big red button (DO NOT CLICK)
   - Under construction workers
   - Flames/fire animations
   - Sparkles/stars for background tiles
   - Animated dividers/separators
   - "New!" and "Hot!" badges
   - Spinning email envelope
   - Construction cone/warning signs

2. **Audio Files**
   - Auto-playing MIDI background music (annoying)
   - Error sound effects (optional)

3. **UI Elements**
   - Windows 95 dialog box assets
   - Blue Screen of Death mockup
   - Clippy sprite/animation
   - System icons (warning triangle, error X)

4. **Background/Decoration**
   - Tiled backgrounds (stars, sparkles)
   - Visitor counter graphics
   - "Best viewed in Netscape" badges
   - Web ring badges

**Tools**:
- Playwright MCP for automated downloads
- Manual downloads from Archive.org/GifCities
- Custom creation if needed

**Outcome**: `/assets` folder populated with all required files

---

### Phase 3: HTML Structure Build
**Objective**: Create core HTML with terrible 90s layout

**Components**:
1. **Base Structure**
   - DOCTYPE HTML 4.01 Transitional (authentic)
   - Nested `<table>` layout (3+ levels deep)
   - Grey table borders everywhere
   - Optional: `<frameset>` for multi-page navigation

2. **Typography**
   - Comic Sans MS primary font
   - Multiple font families mixed
   - `<marquee>` scrolling text (3+ instances)
   - `<center>`, `<font>` tags throughout

3. **Background**
   - Dark background (#000000)
   - Tiled animated GIF (sparkles)
   - CSS fallback for modern compatibility

**Outcome**: Structurally sound HTML that looks terrible

---

### Phase 4: Signature Feature - Red Button Chaos
**Objective**: Build the memorable interactive disaster

**Feature Flow**:
1. Prominent big red pulsating button
2. Text: "DO NOT CLICK THIS BUTTON"
3. On click → First error dialog appears
4. Dialog says "Click OK to clear error" or similar irony
5. Each OK click spawns 2-3 more dialogs
6. Dialogs positioned randomly with increasing z-index
7. After ~40-50 dialogs → BSOD takeover
8. Full-screen Blue Screen of Death overlay
9. Site "broken" until page refresh
10. sessionStorage tracks broken state

**Technical Requirements**:
- Pure JavaScript (no frameworks)
- Windows 95 authentic dialog styling
- Performance: Cap at 50 dialogs max
- Mobile responsive scaling
- BSOD full-screen overlay with authentic styling

**Outcome**: Competition-winning signature interaction

---

### Phase 5: Additional Terrible Elements
**Objective**: Layer in all the classic bad design elements

**Must-Have Features**:
- [ ] Auto-playing MIDI music (with tiny pause button)
- [ ] Clippy assistant in bottom right corner
- [ ] Visitor counter (counting down or random)
- [ ] "Under Construction" sections
- [ ] Guestbook (non-functional but authentic-looking)
- [ ] Multiple `<marquee>` elements
- [ ] "Best viewed in Netscape Navigator 4.0" badge
- [ ] Web ring badges
- [ ] Animated GIF dividers
- [ ] Comic Sans + WordArt-style headings
- [ ] Hit counter
- [ ] "Email me" spinning envelope

**Nice-to-Have Features**:
- [ ] Easter egg: Konami code to reset without refresh
- [ ] Multiple pop-up windows
- [ ] Cursor trail effect
- [ ] "Loading" animations that never complete
- [ ] Fake error messages in console

**Outcome**: Comprehensive terrible experience

---

### Phase 6: Polish & Testing
**Objective**: Ensure everything works (but looks awful)

**Testing Checklist**:
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Verify all animations work
- [ ] Check MIDI auto-play
- [ ] Test red button cascade fully
- [ ] Verify BSOD overlay
- [ ] Test refresh recovery
- [ ] Performance check (load time < 3s)
- [ ] Verify Vercel deployment

**Accessibility Considerations**:
- Add hidden accessibility features (screen reader support)
- Ensure keyboard navigation works
- Provide seizure warning if needed
- Hidden "accessible version" link (ironic)

**Outcome**: Competition-ready terrible website

---

### Phase 7: Deployment
**Objective**: Deploy to Vercel and finalize

**Steps**:
1. Create Vercel project
2. Push to Git repository
3. Deploy static site
4. Configure custom domain (optional)
5. Test live deployment
6. Submit to competition

**Outcome**: Live terrible website URL

---

## Technology Stack

### Core Technologies
- **HTML5** with deprecated tag support (`<marquee>`, `<center>`, `<font>`)
- **CSS3** (inline `<style>` tags for authentic feel)
- **Vanilla JavaScript** (inline `<script>` for interactivity)
- **Static Assets** (GIFs, MIDI, images)

### Hosting & Deployment
- **Vercel** - Static site deployment
- **Git** - Version control
- **No build process** - Pure HTML deployment

### Development Tools
- **Playwright MCP** - Asset downloads
- **VSCode** - Code editing
- **Chrome DevTools** - Testing

---

## File Structure

```
worst-website/
├── index.html              # Main terrible page
├── assets/
│   ├── gifs/              # All animated GIFs
│   │   ├── button-red.gif
│   │   ├── under-construction.gif
│   │   ├── flames.gif
│   │   ├── sparkles.gif
│   │   ├── divider-*.gif
│   │   └── ...
│   ├── sounds/            # MIDI and audio
│   │   ├── background-music.mid
│   │   └── ...
│   ├── images/            # Static images
│   │   ├── bsod.png
│   │   ├── clippy.png
│   │   ├── netscape-badge.gif
│   │   └── ...
│   └── fonts/             # Backup fonts (if needed)
├── docs/                  # Project documentation
│   ├── worst-website-research.md
│   ├── project-plan.md    # This file
│   ├── feature-spec.md
│   ├── asset-sources.md
│   └── technical-spec.md
└── README.md              # Project overview
```

---

## Risk Management

### Potential Issues

1. **Asset Availability**
   - Risk: Can't find authentic 90s GIFs/sounds
   - Mitigation: Multiple source options, create custom if needed

2. **Browser Compatibility**
   - Risk: Deprecated tags don't render properly
   - Mitigation: CSS fallbacks, modern equivalents

3. **Performance Issues**
   - Risk: Too many animations cause lag
   - Mitigation: Optimize GIFs, cap dialog count, lazy loading

4. **MIDI Auto-play Blocked**
   - Risk: Modern browsers block auto-play
   - Mitigation: User interaction trigger, visible play button

5. **Mobile Experience**
   - Risk: Doesn't translate to mobile
   - Mitigation: Responsive terrible design, scaled elements

---

## Success Metrics

### Competition Goals
- **Memorability**: Judges remember our site
- **Interactivity**: Red button feature praised
- **Authenticity**: 90s aesthetic accurate
- **Humor**: Site makes people laugh
- **Technical Merit**: Works flawlessly despite appearance

### Technical Goals
- Load time < 3 seconds
- 0 console errors (except intentional fake ones)
- Works on 95%+ modern browsers
- Mobile responsive
- Vercel deployment successful

---

## Timeline Estimate

- **Phase 1** (Planning): 2 hours ✅ (nearly complete)
- **Phase 2** (Assets): 2-3 hours
- **Phase 3** (HTML): 2 hours
- **Phase 4** (Red Button): 2-3 hours
- **Phase 5** (Elements): 3-4 hours
- **Phase 6** (Testing): 1-2 hours
- **Phase 7** (Deploy): 30 minutes

**Total**: ~12-15 hours

---

## Next Steps

1. ✅ Complete planning documents
2. 🔄 Document asset sources
3. ⏳ Collect assets using Playwright
4. ⏳ Build HTML structure
5. ⏳ Implement red button feature
6. ⏳ Add terrible elements
7. ⏳ Test and deploy

---

**Document Status**: Draft → In Progress
**Last Updated**: 2025-11-23
**Team**: BMad Agents (Party Mode)
**Owner**: Jim
