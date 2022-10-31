# Code Guidelines

> This document contains code guidelines that might not be caught by the linter.

- The component library is sorted by the following within `src`:

  - `src/components` - All components
    - `src/components/atoms` - Atom components
    - `src/screens/molecules` - Molecule components
  - `src/stories` - Stories of the components defined in `src/components`.

- The dynamic theming is handled using tailwind and can be accessed from `tailwind.config.js`
  <br>

- Components are grouped by directories. Each directory will have an explicitly named component and adjacent styles, constants, and anything else specific to the component. Avoid using `index.tsx` for the component file name. Use `index.ts` for exporting components only.

```
components/
  atoms/
     Button/
        Button.tsx
```

- A naming convention for constants is all caps and snake case, and enums are encouraged over objects. eg `FOO_BAR.BAZ` Component-specific constants should go at the top of the component unless there are many, in which case they should be in an adjacent file in the component directory. If a constant is used elsewhere in the code, it should be in `src/config/constants`
  <br>

- Avoid using anonymous functions

```diff
- const foo = () => {
+ function Foo() {
  console.log('howdy')
}
```

- Try to segregate UI and functional logic. The base component should only have the UI logic, If the additional functional logic is large enough, it should be defined the corresponding `.utils.ts` file. Similarly, if the component is dependant on more than one data type then the corresponding data types should be defined within the `.constants.ts or .types.ts` file. The CSS Classnames should be defined in the corresponding `.styles.css

```
components/
  atoms/
     Button/
        Button.tsx
        Button.styles.css
        Button.constants.ts
        Button.utils.ts
```

## Styling

- Avoid inline styling unless the style is going to be dynamic, create a seperate CSS file for style definitions

- If a component has complex styling it is acceptable to compose styles within the style file. Such cases might be multiple conditional styles or overwrites.

## Props

- Destructure props within a component:

```diff
- function Component(props: Props)
+ function Component({ foo, bar, ...rest }: Props)
```

- Prop interfaces should be named `Props` unless they need to be used in another file.

```javascript
export interface PopularProps {
  woo: string;
}

interface Props {
  boo: string;
}
```

- Try to extend dependant props to avoid codebloat

```javascript
interface BaseProps {
  woo: string;
}

interface CurrentProps extends BaseProps {
  boo: string;
}
```

## Typescript notes

### Union types and enums as unique identifiers

Union types are used throughout the codebase. To illustrate how to properly assign enums as an identifier for type checking, the example from https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types will be used.

To make a field unique, the value from the enum has to be used. It cannot reference any one of the fields in the enum.

```
enum ShapeKind {
    Circle = 'Circle',
    Square = 'Square,
}
```

```diff
- interface Circle {
-   kind: ShapeKind; // oneof enum vals
-   radius: number;
- }
- interface Square {
-   kind: ShapeKind; // oneof enum vals
-   sideLength: number;
- }

if (shape.kind === ShapeKind.Circle) {
   return <-- we don't want circles to reach the code below
}

// According to the Square interface, shape.kind could still technically be Circle here

+ interface Circle {
+   kind: ShapeKind.Circle; // can only ever be "Circle"
+   radius: number;
+ }
+ interface Square {
+   kind: ShapeKind.Square; // can only ever be "Square"
+   sideLength: number;
+ }


if (shape.kind === ShapeKind.Circle) {
   return
}

// shape.kind can only ever be `ShapeKind.Square`, so Circle types will not reach this code
```

### Type checking when the unique identifier is not present

Where possible, we should use a required, unique-identifying field when using union types, but sometimes this is unavoidable. In these instances, the `in` operator can be used as a substitution. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

```diff
interface LinkProps {
  href: string;
}

interface ButtonProps {
  onClick: () => void;
}

function ButtonOrLink(props: ButtonProps | LinkProps) {
- // TS will error because `onClick` does not exist on LinkProps interface
- if (props.onClick) {
-   return <button onClick={props.onClick} />
- }

+ if ('onClick' in props) {
+   return <button onClick={props.onClick} />
+ }

  return <a href={props.href} />
}
```

## Mocks:

- The mock data that is being used in storybook components should be defined alongside the component
- Filenames follow the `[ComponentName].mock` naming pattern
- Should be stored within the `components/[atom/molecules]/component/[componentName].mock.ts`
