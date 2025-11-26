#!/usr/bin/env node

/**
 * Asset Scraper for The Worst Website Ever
 * Downloads GIFs and MIDI files from Archive.org sources
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Asset URLs to download
const ASSETS = {
  gifs: [
    // Under Construction
    { url: 'https://web.archive.org/web/20010701120111im_/http://www.geocities.com:80/sunsetstrip/garage/7630/under.gif', name: 'under-construction-1.gif' },
    { url: 'https://web.archive.org/web/20010604162646im_/http://www.geocities.com:80/Tokyo/6225/construction.gif', name: 'under-construction-2.gif' },
    { url: 'https://web.archive.org/web/20091027124451im_/http://geocities.com/benwan3000/images/gif/construction.gif', name: 'under-construction-3.gif' },

    // Sparkles/Stars backgrounds - Real URLs from GifCities
    { url: 'https://web.archive.org/web/20040810234021im_/http://www.geocities.com/lkvy/movingstars.gif', name: 'bg-sparkles.gif' },
    { url: 'https://web.archive.org/web/20000929010532im_/http://share.geocities.com:80/Nashville/Opry/7603/img/dust2.gif', name: 'bg-stars.gif' },
    { url: 'https://web.archive.org/web/20091027011744im_/http://www.geocities.com/babysmilez23/Backgrounds/rainbowBG.gif', name: 'bg-rainbow-sparkles.gif' }
  ],

  sounds: [
    // MIDI files from Archive.org - The Magic of MIDI V1 collection
    { url: 'https://archive.org/download/themagicofmidiv1/sample2.mid', name: 'background-music.mid' }
  ],

  images: [
    // Clippy from GIPHY
    { url: 'https://media.giphy.com/media/Yh9FyWkUSletEfxLIO/giphy.gif', name: 'clippy.gif' }
  ]
};

// Directory setup
const BASE_DIR = path.join(__dirname, '..');
const ASSETS_DIR = {
  gifs: path.join(BASE_DIR, 'assets', 'gifs'),
  sounds: path.join(BASE_DIR, 'assets', 'sounds'),
  images: path.join(BASE_DIR, 'assets', 'images')
};

// Ensure directories exist
Object.values(ASSETS_DIR).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Download a file from URL
 */
function downloadFile(url, destination) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    console.log(`Downloading: ${url}`);
    console.log(`  → ${destination}`);

    const file = fs.createWriteStream(destination);

    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        console.log(`  Redirected to: ${redirectUrl}`);
        file.close();
        fs.unlinkSync(destination);
        downloadFile(redirectUrl, destination).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`  ✓ Downloaded successfully`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {});
      reject(err);
    });

    file.on('error', (err) => {
      fs.unlink(destination, () => {});
      reject(err);
    });
  });
}

/**
 * Download all assets
 */
async function downloadAllAssets() {
  console.log('🎨 Starting asset download...\n');

  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const [category, assets] of Object.entries(ASSETS)) {
    if (assets.length === 0) {
      console.log(`\n📂 ${category.toUpperCase()}: No assets defined (add URLs to script)\n`);
      continue;
    }

    console.log(`\n📂 ${category.toUpperCase()}:`);
    console.log(`   ${assets.length} assets to download\n`);

    for (const asset of assets) {
      const destination = path.join(ASSETS_DIR[category], asset.name);

      try {
        await downloadFile(asset.url, destination);
        totalDownloaded++;

        // Delay between downloads to be respectful
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (err) {
        console.error(`  ✗ Failed: ${err.message}`);
        totalFailed++;
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Download complete!`);
  console.log(`   ${totalDownloaded} assets downloaded`);
  console.log(`   ${totalFailed} failed`);
  console.log('='.repeat(50) + '\n');

  if (totalDownloaded === 0) {
    console.log('⚠️  No assets were downloaded.');
    console.log('   Add asset URLs to the ASSETS object in this script.\n');
    console.log('   Sources:');
    console.log('   - GifCities: https://gifcities.org/');
    console.log('   - MIDI Archive: https://archive.org/details/themagicofmidiv1');
    console.log('   - Clippy: https://giphy.com/explore/clippy\n');
  }
}

// Run the downloader
downloadAllAssets().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
