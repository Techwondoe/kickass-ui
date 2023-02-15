**Steps to run with storybook**

- Run `yarn build`
- Copy `index.css` from `dist` to `src/helpers`
- Run `yarn storybook`

This will allow the storybook component to be wrapped around the theme provider to get dynamic colors. You can edit your components like a normal component and test now.

You can now read and edit the files as a normal storybook component

**To test any component**

- Map the component in `extend-colors-storybook`, then create the corresponding storybook wrapper in `stories/`
