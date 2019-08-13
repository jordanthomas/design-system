# Contributing

## Local development

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

## Adding a component

1. Create a new directory for your component in `src/components`
    - The directory name should be in PascalCase
    - The directory may contain more than one exported component
1. Create your source files in the new component directory
    - Create a Javascript file per component, the file name should match the primary named export
    - Component Javascript files and their exported component functions/classes should be in PascalCase
    - Component Scss files should be the same base name as their respective component they're styling
    - Create an `index.js` file which will export your component(s)
1. Create tests for your component
    - In the component's directory create a `.test.js` file per component file
1. Create a Storybook page for your component detailing any props, styling, or configuration controls
    - In the component's directory create a `.stories.js` file per component file
1. Make your component(s) accessible to end users
    - Export your `index.js` file's exports in the main `src/index.js` file

## Code style and linting

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

### Javascript testing

You can run the [Jest](https://jestjs.io/) tests via `yarn test`. These tests will run automatically on file changes when using `yarn dev` or when using `yarn test:watch`.

### Visual regression testing

Our visual regression test suite uses a few different tools, mainly: [Loki](https://loki.js.org/), [RegViz](https://github.com/reg-viz/reg-cli/), and [Storybook](https://storybook.js.org/). Loki will take screenshots of each Storybook stories. While Loki can handle testing (diffing) images we use RegCLI instead; this allows us to generate reports as well as have tighter controls over how we diff images and how the diff'd image are generated.

The visual regression testing process operates something like the following:

1. Build a `reference` state of the Storybook docs (this is commited as a part of this repo)
1. Build a `current` state of the Storybook docs after making code changes
1. Compare the current and reference state images using RegCLI to identify differences and build a report

#### Running visual regression tests

1. Start Storybook server or build Storybook docs
    - Start development watch process: `yarn dev`
    - or start server: `yarn storybook:watch`
    - or build static site: `yarn storybook:build`
1. Build the `current` state from Storybook:
    - If using the Storybook server (or `yarn dev`): `yarn loki:build-current --configurationFilter local`
    - If using a built storybook static site: `yarn loki:build-current-static --configurationFilter local`
1. Compare the `current` to the `reference` state:
    - `yarn test:visual`

#### Approving visual changes

1. Run your visual regression tests (see steps above)
1. Review diffs and ensure everything is looking correct
1. Approve the changes
    - `yarn loki:approve`

#### Rebuilding reference images

You shouldn't have to run these commands unless doing a substantial overhaul to the documentation or changing Loki configuration. In most cases simply approving the visual changes after running the tests is sufficient.

1. Start Storybook server or build Storybook docs
    - Start development watch process: `yarn dev`
    - or start server: `yarn storybook:watch`
    - or build static site: `yarn storybook:build`
1. Generate `reference` images from the current Storybook state:
    - If using the Storybook server (or `yarn dev`): `yarn loki:build-reference --configurationFilter local`
    - If using a built storybook static site: `yarn loki:build-reference-static --configurationFilter local`
