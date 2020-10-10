# boilerplate

### Turn on proxy in current terminal

Due to DNS poison, need to use proxy

#### `proxyon`

`npm i` install all the dependencies.

Show directory tree by `tree -a --filelimit 10`

```
.
├── .git [11 entries exceeds filelimit, not opening dir]
├── .gitignore
├── .sassrc
├── README.md
├── index.html
├── node_modules [526 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
└── src
    ├── css
    │   └── normalize.css
    ├── js
    │   └── index.js
    └── scss
        └── index.scss
```

### [Adding parcel to your project](https://parceljs.org/getting_started.html#adding-parcel-to-your-project)

#### `npm install parcel-bundler --save-dev`

Then, add these tasks scripts to your project, by modifying your package.json:

```json
{
  "scripts": {
    "dev": "parcel <your entry file>",
    "build": "parcel build <your entry file>"
  }
}
```

Then, you will be able to run it:

```bash

# To run in development mode
yarn dev
# or
npm run dev

# To run in production mode
yarn build
# or
npm run build

```

### [SCSS](https://parceljs.org/scss.html#scss)

#### `npm install -D sass`

It's also strongly recommended to create a `.sassrc` file and add node_modules as include path to avoid an [issue](https://github.com/parcel-bundler/parcel/issues/39#issuecomment-443061650)

```json
{
  "includePaths": ["node_modules"]
}
```
