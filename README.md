# Loaders

Automatic downloaders for various webpages and applications.

## Requisites

| | [Node.js](https://nodejs.org/) | [Python](https://www.python.org/) | [Wget](https://www.gnu.org/software/wget/) |
| :-: | :-: | :-: | :-: |
| [Abstruct Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Abstruct%20Downloader.py) | | ✕ ([requests](https://requests.readthedocs.io/en/master/)) | |
| [Archillect Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Archillect%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Backdrops Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Backdrops%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Behang Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Behang%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Calm Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Calm%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Deezer Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Deezer%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios)) | | |
| [Earth View Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Earth%20View%20Downloader.js) | ✕ ([inquirer](https://github.com/SBoudrias/Inquirer.js), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Emoji Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Emoji%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Facets Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Facets%20Downloader.js) | ✕ ([sanitize-filename](https://github.com/parshap/node-sanitize-filename), [sqlite3](https://github.com/mapbox/node-sqlite3)) | | ✕ |
| [Heritage Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Heritage%20Downloader.js) | ✕ ([adm-zip](https://github.com/cthackers/adm-zip), [axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [Wallpaperboard Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/Wallpaperboard%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |
| [yiff.party Downloader](https://github.com/TheLastZombie/loaders/blob/master/loaders/yiff.party%20Downloader.js) | ✕ ([axios](https://github.com/axios/axios), [sanitize-filename](https://github.com/parshap/node-sanitize-filename)) | | ✕ |

## Installation

```
git clone https://github.com/TheLastZombie/loaders
cd loaders
npm install
pip install -r requirements.txt
```

## Loaders

<details><summary>Abstruct Downloader</summary><br>
<p>Downloads all wallpapers from the <a href="http://abstruct.co">Abstruct</a> collection by Hampus Olsson.

```
Abstruct Downloader

Importing modules...
Creating directory...

Loading categories...
8 categories found.

Creating BLEND directory...
Loading amount of pages...
4 pages found.

Loading page 1...
14 images found.

Downloading Crystallization...
```

</p>
</details>

<details><summary>Archillect Downloader</summary><br>
<p>Downloads all images collected by <a href="http://archillect.com/">Archillect</a>, the synthetic intelligence.

```
Archillect Downloader

Importing dependencies...
Creating download directory...
Retrieving latest image ID...

Downloading 1/250000 (1)...
```

</p>
</details>

<details><summary>Backdrops Downloader</summary><br>
<p>Downloads all wallpapers from <a href="https://backdrops.io/">Backdrops</a> via their semi-public API.

```
Backdrops Downloader

Importing dependencies...
Creating download directory...
Getting wallpaper list...

Downloading 1/2747 (76500)...
```

</p>
</details>

<details><summary>Behang Downloader</summary><br>
<p>Downloads all wallpapers from <a href="https://knokfirst.com/behang/">Behang</a> via their semi-public API.

```
Behang Downloader

Importing dependencies...
Creating download directory...
Getting wallpaper list...

Downloading category 1/38 (Colorgasm)...
Downloading image 1/8 (Colorgasm1)...
```

</p>
</details>

<details><summary>Calm Downloader</summary><br>
<p>Downloads all scenes including photo, video and audio assets from <a href="https://www.calm.com/meditate">Calm</a>.

```
Calm Downloader

Importing dependencies...
Creating download directory...
Retrieving scene database...

Downloading 1/39 (ZFlV8dbxPd)...
```

</p>
</details>

<details><summary>Deezer Downloader</summary><br>
<p>Downloads a specified <a href="https://www.deezer.com/de/">Deezer</a> track in the highest available format and bitrate.</p>
</details>

<details><summary>Emoji Downloader</summary><br>
<p>Downloads all available Discord emotes from <a href="https://discordemoji.com/">Discord Emoji</a>.

```
Emoji Downloader

Importing dependencies...
Creating download directory...
Retrieving emoji database...

Downloading 1/5000 (6188)...
```

</p>
</details>

<details><summary>Earth View Downloader</summary><br>
<p>Downloads all images from the <a href="https://earthview.withgoogle.com/">Earth View</a> collection by Google.

```
Earth View Downloader

Importing dependencies...
Creating download directory...

? Which host do you want to download from? earthview.withgoogle.com (watermarked)

Some images will be skipped. This is not a bug.
Not all digits within the 1003 to 7023 range are mapped to images.

Downloading 1/6021 (1003)...
```

</p>
</details>

<details><summary>Facets Downloader</summary><br>
<p>Downloads all <a href="http://www.facets.la/">Facets</a> images in all available resolutions via the app's facets.db.

```
Facets Downloader

Importing dependencies...
Creating download directory...
Importing Facets database...
Parsing imported database...

Downloading Facets 365...

Downloading 1/364 (Facets)...
```

</p>
</details>

<details><summary>Heritage Downloader</summary><br>
<p>Downloads photos, snapshots, music tracks and soundscapes for every heritage from the <a href="https://www.sony.net/united/clock/">α CLOCK</a> project.

```
Heritage Downloader

Importing dependencies...
Creating download directory...
Retrieving heritage database...

Downloading 1/50 (iguazu)...
```

</p>
</details>

<details><summary>Wallpaperboard Downloader</summary><br>
<p>Downloads all wallpapers from a <a href="https://github.com/danimahardhika/wallpaperboard">Wallpaperboard</a> source.

```
Wallpaperboard Downloader

Importing dependencies...
Creating download directory...
Getting wallpaper list...

Downloading 1/28 (Nougat Wallpaper 1)...
```

</p>
</details>

<details><summary>yiff.party Downloader</summary><br>
<p>Downloads the creators and all artist-specific JSON files from <a href="https://yiff.party/">yiff.party</a>.

```
yiff.party Downloader

Importing dependencies...
Creating download directory...
Retrieving creator database...

Downloading 1/20443 (25634849)...
```

</p>
</details>
