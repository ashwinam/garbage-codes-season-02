# Lets Learn React

### Fragments?

In react, Components are return a single elements, if you want to return more than one elements there we use fragments.A common pattern in React is for a component to return multiple elements. `Fragments let you group a list of children without adding extra nodes to the DOM.`

### Rendering List

Suppose, You have a list of items and you want to display them in react, Here we cant use the `for...in` or `for...of` here we use functional programming like map, filter or reduce

### Conditional Rendering

In react, Suppose you want to display some values based on conditions or simply a variable inside a JSX(javascript XML) you have to use `{}`.

### Handling Events

For handling events, Inside an JSX elements we have the attribute called `onClick = {pass the function}` for click events and other handling events are also there. and using `event` argument we get a `BaseEvent` object that contains all properties.

### Managing State

If we use a variable to change the state or updating the variable it won't work. In react, variable is a local scope don't have access to the variable like its only perform read operation so, for this reasons we use hooks
`Hooks? Hook is a special kind of function that allows you to use react features in a function based components, so before hooks you can use this features in a class component. so hooks allows you to reuse stateful logic across multiple component without changing the hierarchy or using higher order components, if you use same components also they have independnt states`
So now next thing is what is state management?
`State management is nothing but a way to manage the data or state based on the events or user actions Ex:. I'm clicking a button so based on this event now my current state would be +1`
So for managing state we use useState hook?
`useState? useState hooks helps to manage state, useState function returns an array with two element 1. the current state value 2. a function to update state`

Note: Every component has different state, if i use same component also there behaviour will be different.

### Passing data via props

`Props(properties) are just the inputs/data for components using props we make the component reusable.`

1. First declare the interface for the components --> interface are just the blueprints that define the structure(a shape) of objects, functions and other data types. In simple words it just an object that tells this type of properties are accepted by the component.

2. Pass the properties from where you call this component as a attribute or properties.
   This way you can pass the props
   `<ListGroup fruits={fruits} heading={"List Of Fruits"} />`

### Passing function to props

Add interface to existing Props interface `onSelectFruit: (fruit: string) => void;` its a props property and the pass to the component.

### props vs state

![Difference between props vs state](image.png)

### passing children

Passing children to the component via props
suppose if you have very length content to pass as a text or anything there we use this interface

`interface Props {
  children: ReactNode;
}`

### Vanilla CSS

1. Create a .css file beside to component file(for best practice)
2. import it to the component

### CSS-Modules

When writing vanilla css suppose we have two files with same class name , then there is chances for name clashes, So how do we make it local scope? `Using CSS modules`

1. For making css modules add .module in a file Like: `example.module.css` here, try to use the camel casing
2. Import like this `import style from './example.module.css'`
3. in className : `style.cssSelector or style['css-selector']` its like accessing object
4. optional, if you have more classes then use `[style.cssSelector, style.cssSelector].join(' ')`

### styles components

Using styling to the same file using styled-component library

1. Install `npm i styled-components` if compilation error is there from Typescript then install typed `npm i @typed/style-components`
2. import `import style from 'style-components'`
3. Create an style component object
   Ex (11--> for this think as a backticks )
   `const List = style.ul 1 <Your Style> 1`
4. then use it as a component
   `<List><Your Elements></List>`

### Seperation of concerns

- Divide a Programme into distinct section where each section handles a specific fuctionality, rather than having everything in one place.

### inline styles

1. use it as a prop like: `style={{backgroundColor='yellow'}}` This considered as bad practice.

### Popular UI Libraries

1. Bootstrap
2. Material UI
3. Shadcn/UI
4. Chakra UI
5. Tailwind CSS

### Adding Icons

1. install package `npm i react-icons@4.7.1`
2. go to website [React Icons](https://react-icons.github.io/)
3. import `import { IoIosCalendar } from "react-icons/io";`
4. `<IoIosCalendar />`

### understanding the state hook

- React Updates state asynchronously, i.e Not immediately because every time state changed component is going to be re-render So for example: `suppose In a function we write the logic that change the 4 states on a click event, so if the upates are immediate then component will re-render 4 to 5 times, FOR THAT REASON ITS ASYNCHRONOUS.`

- State is stored outside of a component, why? because if you think the scope of a variable in a js its a blocked scoped, for that reason it stored on memory until the component is on the screen.

- Use hooks ar the top level of your component. This adheres to the React's guidelines for using hooks.

### choosing the state structure(Best Practice)

- Avoid redundant state variable
- Group related variables inside an object
  `const [person, setPerson] = useState({firstName: ''; lastName:'';})`
- Avoid deeply nested structure
