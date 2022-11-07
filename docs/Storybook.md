# Storybook

> Guidelines for using Storybook:

## Creating Stories

Create one story for each meaningful variation of a component, plus one story with knobs that allows the component to be tested. Knobs should be added only if the component requires dynamic prop for renders.

For example, The Button component is a good example of this:

- Button with Knobs
- Button with custom style
- Button with default style

Stories should be created in the folder `src/stories`.

## Avoiding Nested Stories

Similar to [our approach to testing](./TESTING.md), every component does not need a story.

For example:

```
SearchBar/
  SearchBar.tsx
  SearchBar.stories.tsx // defined in src/stories
  SearchBarButton/
    SearchBarButton.tsx
```

One storybook file in `SearchBar.stories.tsx` will usually be sufficient to visually test the component system, without additional stories for `SearchBarButton` alone.

An exception to this would be complex child components like the SmartModule components on the homepage, which will probably benefit from their own stories.

## Using Stories with Tailwind CSS 

A common helper function has been created to help with the theme definitions in storybook.

```
src/helpers/extend-colors-storybook.tsx
```

All the atom and molecule components are to be mapped and passed accordingly. The function `ComponentWithColors` is wrapped around the theme provider maps the component with the desired props. A custom them can also be passed to this component. 

```javascript
export interface ComponentWithColorProps {
  componentName: ComponentName;
  componentProps: ComponentProps;
  customTheme?: Theme;
}
```



## Running storybook

- Build the component library

```
yarn build
```

- Run the script to copy over the newly created styles to helpers directory

```
yarn storybook-css
```

- Run the following command on your terminal

```
yarn storybook
```
 