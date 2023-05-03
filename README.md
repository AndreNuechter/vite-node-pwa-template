# VITE and NodeJS based app template

## Getting started

Replace some strings (see below), add two png icons (see below), run `npm i` and then `npm run dev`.

### Strings to replace

- #TITLE# - printable name of the app
- #DESCRIPTION# - short description of the app
- #THEME_COLOR# - (manifest) theme color (used in titlebar)
- #BG_COLOR# - manifest background color (used in pwa splash screen)
- #ORIENTATION# - manifest orientation, https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
- #NAME# - hyphenated name of the app used as repo name
- #AUTHOR# - responsible git user

### Icons to add

Place them public/images.
The one needs to be called images/icons-192.png and the other icons-512.png.

They should both be a square of 192 or 512 pixels tall respectively.

Both are needed for the manifest.
The smaller one is also used as favicon.
