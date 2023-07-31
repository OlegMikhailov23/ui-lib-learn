# UI Lib Learn with Server Style

![Version](https://img.shields.io/npm/v/ui-lib-learn-with-server-style.svg?style=flat)
![License](https://img.shields.io/npm/l/ui-lib-learn-with-server-style.svg?style=flat)

## Description

UI Lib Learn with Server Style is a library for building user interfaces with React. This library provides a set of reusable components and styles that can be easily integrated into React-based projects. It also includes server-side rendering (SSR) support, making it suitable for both client-side and server-side rendering applications.

## Installation

To install UI Lib Learn with Server Style, you can use npm or yarn:

```bash
npm install ui-lib-learn-with-server-style
```

or

```bash
yarn add ui-lib-learn-with-server-style
```

## Usage

Once installed, you can import and use the components from UI Lib Learn with Server Style in your React project like this:

```jsx
import React from 'react';
import { Button, Card, Modal } from 'ui-lib-learn-with-server-style';

function MyComponent() {
  return (
    <Card>
      <h2>Hello, UI Lib Learn with Server Style!</h2>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Modal isOpen={true}>This is a modal</Modal>
    </Card>
  );
}

export default MyComponent;
```

Please ensure that you have installed the required peer dependencies: React and React DOM, as they are not included in the package.

## Development

To build the library, use the following commands:

- For development build:

```bash
npm run build:packdev
```

- For production build:

```bash
npm run build:packprod
```

The built files will be located in the `dist` directory.

## Storybook

To view the library components and test them in isolation, you can use Storybook:

- Start the Storybook development server:

```bash
npm run storybook
```

- Build the Storybook static files:

```bash
npm run build-storybook
```

## Publishing

To publish a new version of the library to npm, use the following command:

```bash
npm run publish
```

This will build the production version and publish it to the npm registry.

## Scripts

- `prebuild`: Cleans the `dist` directory before each build.
- `build`: Uses Rollup to bundle the library.
- `build:packdev`: Builds the library for development (non-minified) using the `development` environment.
- `build:packprod`: Builds the library for production (minified) using the `production` environment.
- `build:watch`: Watches for changes and automatically rebuilds the library.
- `publish`: Builds the production version and publishes it to npm.
- `test`: Placeholder script for running tests (no tests are specified in this project).
- `storybook`: Starts the Storybook development server.
- `build-storybook`: Builds the Storybook static files.

## License

UI Lib Learn with Server Style is licensed under the ISC License.

## Author

UI Lib Learn with Server Style is developed by Mikhaylov Oleg. You can contact the author at dkfolkin@gmail.com.

## Dependencies

- **@babel/preset-env**: ^7.22.9
- **@babel/preset-react**: ^7.22.5
- **@babel/preset-typescript**: ^7.22.5
- **@rollup/plugin-commonjs**: ^25.0.3
- **@rollup/plugin-node-resolve**: ^15.1.0
- **@rollup/plugin-terser**: ^0.4.3
- **@rollup/plugin-typescript**: ^11.1.2
- **@storybook/addon-essentials**: ^7.1.1
- **@storybook/addon-interactions**: ^7.1.1
- **@storybook/addon-links**: ^7.1.1
- **@storybook/addon-onboarding**: ^1.0.8
- **@storybook/blocks**: ^7.1.1
- **@storybook/react**: ^7.1.1
- **@storybook/react-webpack5**: ^7.1.1
- **@storybook/testing-library**: ^0.2.0
- **@types/react**: ^18.2.15
- **@types/styled-components**: ^5.1.26
- **cross-env**: ^7.0.3
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **rimraf**: ^5.0.1
- **rollup**: ^3.26.3
- **rollup-plugin-peer-deps-external**: ^2.2.4
- **rollup-plugin-visualizer**: ^5.9.2
- **storybook**: ^7.1.1
- **styled-components**: ^5.3.6
- **typescript**: ^5.1.6

## Files

- `dist`: Contains the built files after running the build script.
- `README.md`: The documentation file.

Feel free to use, modify, and distribute this library according to the terms of the ISC License. If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the project's GitHub repository. Happy coding!
