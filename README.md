# Kickass UI

> A React Tailwind Component Library

[![NPM](https://img.shields.io/npm/v/moduts.svg)](https://www.npmjs.com/package/kickass-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation
### KICKASS-UI

 Kickass-UI is available as an [npm package](https://www.npmjs.com/package/kickass-ui).

**npm:**

```sh
npm install kickass-ui
```

**yarn:**

```sh
yarn add kickass-ui
```

## Getting started with Kickass-UI Component

To get started, you need to import the compiled CSS styles from the <b>kickass-ui library</b>.

```javascript
import 'kickass-ui/dist/index.css';
```

You would also require to wrap your parent app component with `ThemeProvider`.

```jsx
import { ThemeProvider } from 'kickass-ui';
```

Here is an example of a basic app using Kickass-UI Component's `Typography` component:

```jsx
import * as React from 'react';
import { Button } from 'kickass-ui';
import 'kickass-ui/dist/index.css';

function App() {
  return (
     <ThemeProvider>
      <Typography size={'sm'} className="text-primary-600">
        Kickass UI Example project
      </Typography>
    </ThemeProvider>
  );
}
```
## Using Custom Colors and font sizes
By default, the component library uses the following [color schema.](./src/theme.json)

The component library also uses the following [fonts.](./src/font.json)

However, you can define your custom color schema and fonts by using the  `ThemeProvider` context. 

Here is an example of implementing a custom theme using the `extendTheme` method:

```jsx
import * as React from 'react';
import { extendTheme, ThemeProvider, Typography } from 'kickass-ui';

const customTheme = extendTheme(base, {
  ...base,
  font: {
    ...base.font,
    display: {
      ...base.font.display,
      sm: {
        size: '10px',
        lineHeight: '10px',
        letterSpacing: '10px',
      },
    },
  },
  color: {
    ...base.color,
    primary: {
      ...(base.color.primary as Record<ColorShade, string>),
      '600': 'red',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider>
      <Typography size={'sm'} className="text-primary-600">
        Kickass UI Example project
      </Typography>
    </ThemeProvider>
  )
}
```

You can also apply a theme manually at any time using the `applyTheme` callback. `applyTheme` accepts the same props as `extendTheme`.

## Theme Props

|  Component |  Use |
|---|---|
| `extendTheme` | Create a theme object extending another theme object `( base or dark or custom )`  |
| `applyTheme`  | Manually apply theme  |
| `<ThemeProvider/>`  | Theme context to automatically apply custom theme. Pass props `customTheme`  |

## Using Custom Classes

By default, all the components accept props `className` which will allow you to pass custom tailwind CSS to these components. Some components even allow multiple custom-style props.

You can also apply custom styles using predefined custom tailwind classes. We have defined some custom classes for components like `Buttons, IconBadge & Badge`. You can refer to our [kickAssPlugin.js](./src/plugins/kickAssPlugin.js);

All our components are based on 6 sizes ie `['xs', 'sm', 'md', 'lg', 'xl', '2xl']`

To pass your custom plugin, paste the following in your project's `tailwind.config.js`

```javascript
const { customPlugin } = require('/path-to-custom-plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  plugins: [..., customPlugin],
};

```

## Component list

You can refer to the following component list and prop definitions to use the library

| Components         | Props                                    |
|--------------------|------------------------------------------|
| AmountInput        | [AmountInput Props](./src/components/atoms/AmountInput/AmountInput.types.ts) |
| Avatar             | [Props](./src/components/atoms/index.ts) |
| Badge              | [Props](./src/components/atoms/index.ts) |
| Button             | [Props](./src/components/atoms/index.ts) |
| ButtonGroup        | [Props](./src/components/atoms/index.ts) |
| ButtonWrapper      | [Props](./src/components/atoms/index.ts) |
| Calendar           | [Props](./src/components/atoms/index.ts) |
| Card               | [Props](./src/components/atoms/index.ts) |
| Checkbox           | [Props](./src/components/atoms/index.ts) |
| ColorPicker        | [Props](./src/components/atoms/index.ts) |
| CopyInput          | [Props](./src/components/atoms/index.ts) |
| DatePicker         | [Props](./src/components/atoms/index.ts) |
| DatePickerDropdown | [Props](./src/components/atoms/index.ts) |
| DirectionMetric    | [Props](./src/components/atoms/index.ts) |
| Divider            | [Props](./src/components/atoms/index.ts) |
| Dropdown           | [Props](./src/components/atoms/index.ts) |
| EpicSection        | [Props](./src/components/atoms/index.ts) |
| Forms              | [Props](./src/components/atoms/index.ts) |
| Icon               | [Props](./src/components/atoms/index.ts) |
| IconBadge          | [Props](./src/components/atoms/index.ts) |
| IconButton         | [Props](./src/components/atoms/index.ts) |
| IconButtonGroup    | [Props](./src/components/atoms/index.ts) |
| Logo               | [Props](./src/components/atoms/index.ts) |
| MailInput          | [Props](./src/components/atoms/index.ts) |
| MultiSearchInput   | [Props](./src/components/atoms/index.ts) |
| Pagination         | [Props](./src/components/atoms/index.ts) |
| PasswordInput      | [Props](./src/components/atoms/index.ts) |
| PhoneInput         | [Props](./src/components/atoms/index.ts) |
| PorgressBar        | [Props](./src/components/atoms/index.ts) |
| Radio              | [Props](./src/components/atoms/index.ts) |
| SearchInput        | [Props](./src/components/atoms/index.ts) |
| SelectInput        | [Props](./src/components/atoms/index.ts) |
| Sidebar            | [Props](./src/components/atoms/index.ts) |
| SideInput          | [Props](./src/components/atoms/index.ts) |
| Slider             | [Props](./src/components/atoms/index.ts) |
| Table              | [Props](./src/components/atoms/index.ts) |
| Tag                | [Props](./src/components/atoms/index.ts) |
| TextField          | [Props](./src/components/atoms/index.ts) |
| TextInput          | [Props](./src/components/atoms/index.ts) |
| toggle             | [Props](./src/components/atoms/index.ts) |
| Typography         | [Props](./src/components/atoms/index.ts) |
| Upload             | [Props](./src/components/atoms/index.ts) |
| UploadItem         | [Props](./src/components/atoms/index.ts) |
| UserProfile        | [Props](./src/components/atoms/index.ts) |
| Wrapper            | [Props](./src/components/atoms/index.ts) |