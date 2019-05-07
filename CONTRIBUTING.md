# Contributing

## Local Development

1. Fork or clone this repo
1. Install dependencies (`yarn install`)
1. Use Flowtype
1. Use Prettier and SassLint linters
1. Use Editorconfig
1. Start the development watch process (`yarn dev`)
    - Starts storybook server
    - Rebuild distributable on changes
    - Run Jest tests on changes
1. Modify whatever you need

If you want to work on this library while consuming it in another project you can use `yarn link` like so:

1. Link this project `yarn link`
1. Start development watch process `yarn dev`
1. Use the link in your project `yarn link @ebth/design-system`
    - Run this in your project's folder
    - If you use Flowtype you may [lose typing hints](https://github.com/facebook/flow/issues/4015).

## Code Style and Linting

We use a variety of linters for configuring your IDE/Editor and for each language. Below is a breakdown of the tools we use and what their purpose is:

-   Editorconfig: Configures your text editor or IDE to use the correct indendation and line ending settings
    -   [How to configure for Atom](https://atom.io/packages/editorconfig)
    -   [How to configure for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
-   Prettier: Automatically fixes code style in JS and Markdown files
    -   [How to configure for Atom](https://atom.io/packages/prettier-atom)
    -   [How to configure for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   Sass Lint: Lints SCSS/SASS files to ensure code formatting
    -   [How to configure for Atom](https://atom.io/packages/linter-sass-lint)
    -   [How to configure for VSCode](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)
-   Flowtype: Not really a linter perse, but will ensure JS typings are correct
    -   [How to configure for Atom](https://atom.io/packages/flow-ide)
    -   [How to configure for VSCode](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

## Testing

### Javascript Testing

You can run the Jest tests via `yarn test`. These tests will run automatically on file changes when using `yarn dev` or when using `yarn test:watch`.

### Visual Regression Testing

We use a tool called [Loki](https://loki.js.org/) which builds on top of [Storybook](https://storybook.js.org/). Loki will go through each story in our Storybook docs (either from a storybook server or from the static site) and take a screenshot. Later on it will compare those screenshots to the current state of things to identify diffs. The concepts are pretty simple, Loki uses a `reference` folder to store the current 'approved' screenshots, after you make changes you can create new screenshots of the current state. Those screenshots will be stored in the `current` directory. When running the visual regression test command it will simply compare the `current` to the `references` and generate a new image for any that do not look the same, those generated images will be placed in the `difference` directory.

Steps to run tests:

1. Start storybook server or build storybook docs
    - Start development watch process: `yarn dev`
    - or start server: `yarn storybook:watch`
    - or build static site: `yarn storybook:build`
1. Compare the current state to the last approved state:
    - If using the Storybook server (or `yarn dev`): `yarn test:visual`
    - If using a built storybook static site: `yarn test:visual-static`

Approving visual changes:

1. Run your visual regression tests (see steps above)
1. Review diffs and ensure everything is looking correct
1. Approve the changes
    - `yarn loki:approve`

Rebuilding current visual regression images:

You shouldn't have to run these commands unless doing a substantial overhaul to the documentation or changing Loki configuration.

1. Start storybook server or build storybook docs
    - Start development watch process: `yarn dev`
    - or start server: `yarn storybook:watch`
    - or build static site: `yarn storybook:build`
1. Generate images from the current state:
    - If using the Storybook server (or `yarn dev`): `yarn loki:build`
    - If using a built storybook static site: `yarn loki:build-static`
