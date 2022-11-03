# react-tailwind-components

> A React Component Library

[![NPM](https://img.shields.io/npm/v/moduts.svg)](https://www.npmjs.com/package/react-tailwind-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation
### react-tailwind-components

React tailwind components is available as an [npm package](https://www.npmjs.com/package/react-tailwind-components).

**npm:**

```sh
npm install react-tailwind-components
```

**yarn:**

```sh
yarn add react-tailwind-components
```

## Getting started with React Tailwind Component

Here is an example of a basic app using React Tailwind Component's `Button` component:

```jsx
import * as React from 'react';
import { Button } from 'react-tailwind-components';
import 'react-tailwind-components/dist/index.css';

function App() {
  return (
    <Button variant="outlined" color="success" onClick={() => {}}>
      Hello World
    </Button>
  );
}
```

<!-- todo add codesandbox link once npm package is out -->
<!-- In the interactive demo below, try changing the code and see how it affects the output.
(Hint: change `variant` to `"outlined"` and `color` to `"secondary"`.
For more options, see the [`Button` component page](https://mui.com/material-ui/react-button/) in our docs.)

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/material-ui-u9sy1h) -->


## Using Custom themes

By default the component library uses the following color theme configuration

```javascript
export const base = {
  contrast: {
    danger: '#fff',
    info: '#fff',
    onSurface: '#fff',
    primary: '#fff',
    secondary: '#fff',
    success: '#000',
    surface: '#000',
    warning: '#fff',
  },
  custom: {
    danger: '#fff',
    info: '#fff',
    onSurface: '#fff',
    primary: '#fff',
    secondary: '#fff',
    success: '#000',
    surface: '#000',
    warning: '#fff',
  },
  danger: '#ff4e4e',
  info: '#5F9DF7',
  onSurface: '#000',
  primary: '#4d89ff',
  secondary: '#999999',
  success: '#4dff4d',
  surface: '#fff',
  warning: '#ff965f',
};
```

However, you can define your custom theme by using the  `ThemeProvider` context. 

Here is an example of implementing custom theme using `extendTheme` method:

```jsx
import * as React from 'react';
import { extendTheme, ThemeProvider, Typography } from 'react-tailwind-components';

const customTheme = extendTheme(base, {
  primary: 'pink',
  secondary: 'green',
  contrast: {
    ...base.contrast,
    primary: 'red',
  },
});

const App = () => {
  return (
    <ThemeProvider customTheme={customTheme}>
        <Typography color="primary" variant="h1">
          This is a sample theme
        </Typography>
    </ThemeProvider>
  )
}
```

## Theme Props

|  Component |  Use |
|---|---|
| `extendTheme` | Create a theme object extending another theme object `( base or dark or custom )`  |
| `applyTheme`  | Manually apply theme  |
| `<ThemeProvider/>`  | Theme context to automatically apply custom theme. Pass props `customTheme`  |
| `themes (base or dark)` | Themes defined in codebase |
| `ColorCodes` | Enum with the colorcodes, refer [ColorCodes](./src/constants/types.ts) |

## Component list

### Atoms

| Component  | Props |
|------------|-------|
| Button     |  [Button Props](./src/components/atoms/Button/Button.types.ts)         |
| Avatar     |  [Avatar Props](./src/components/atoms/Forms/Avatar/Avatar.types.ts)     |
| Badge      |  [Badge Props](./src/components/atoms/Forms/Badge/Badge.tsx)     |
| Checkbox   |  [Checkbox Props](./src/components/atoms/Forms/Checkbox/Checkbox.types.ts)      |
| Radio      |  [Radio Props](./src/components/atoms/Forms/Radio/Radio.tsx)     |
| SelectMenu |  [SelectMenu Props](./src/components/atoms/Forms/SelectMenu/SelectMenu.tsx)     |
| TextArea   |  [TextArea Props](./src/components/atoms/Forms/TextArea/TextArea.types.ts)      |
| Toggle     | [Toggle Props](./src/components/atoms/Forms/Toggle/Toggle.tsx)      |
| Slider     | [Slider Props](./src/components/atoms/Slider/Slider.types.ts)
| TextField   | [TextField Props](./src/components/atoms/TextField/TextField.types.tsx)      |
| Typography   | [Typography Props](./src/components/atoms/Typography/Typography.types.ts)      |
