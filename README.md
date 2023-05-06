# Vite and NodeJS based PWA template

## Quickstart guide

1. Clone the repo,
2. replace some strings (see below),
3. add two png icons (see below),
4. run `npm i` and then
5. `npm run dev` to start a dev server.

### Strings to replace

- #TITLE# - printable name of the app
- #DESCRIPTION# - short description of the app
- #THEME_COLOR# - (manifest) theme color (used in titlebar)
- #BG_COLOR# - manifest background color (used in pwa splash screen)
- #ORIENTATION# - manifest orientation, https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
- #NAME# - hyphenated name of the app used as repo name
- #AUTHOR# - responsible git user

### Icons to add

To work out of the box, the icons should be PNG-files and they should be placed in `public/images`.

One needs to be called "icons-192" and the other "icons-512".

They should both be a square of 192 or 512 pixels respectively.

Both are needed for the manifest.

The smaller one is also used as favicon.

## Further topics

### Optional HTTPS during dev

The dev-server is set up to serve https using the root certificate installed in the system.
If that is undesired, the `mkcert` plugin and the server.https field should be removed from the vite.config.

### Linting

An opinionated ESLint config is included.
To check and automatically fix some issues, run `npm run lint`.

### Building for production

Run `npm run build` to build production-ready version of your app.

This build will be placed inside the `docs/` directory.

To serve the current production build locally, use `npm run preview`.

#### Deploying

The intended hosting environment is a github page.

The build output is placed inside a directory called "docs", because a github repository can be configured to serve a corresponding page from the project root or a directory called docs in the root.

The current state of your app can be build and deployed in one step using `npm run deploy`.
Note that this command does not stash current changes, which may lead to unfinished code making it into the wild, so beware!