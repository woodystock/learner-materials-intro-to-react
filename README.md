# Introduction to React

Welcome to the wonderful world of React!

![React Atom](./public/react-catom.png)

## How to Get Started

Fork this repo to your Github and then clone the forked version of this repo

To install the dependencies run:

### `yarn install`

Make sure you're in the right directory!

To start the app:

### `yarn start`

Runs the app in the development mode.

The app should open in your browser and you should see some beautiful cat cards - yay, more cats!

If the page doesn't open automatically, you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits 👍
You will also see any lint errors in the console ✅

Meow lets get started!

## File System ~~Overmew~~ Overview 

This project was created with `npx create-react-app`. This command (followed by the name of your project) builds a React App for you. Neat!

If you are unfamiliar with the React file structure, you can find a break down [here](./file-structure.md) 🔨 

Feel free to skip ahead to [Activity 1]() if you're happy with what does what!

# What is React?

React is a JavaScript library for building interactive User Interfaces 📚


# What is a Component?

A Component is one of the core building blocks of React. Components are independent and reusable bits of code. 

Components come in two types, Class components and Function components.


Every application you will develop in React will be made up of pieces called components. To put it simply, React components are functions that return pieces of JSX. These pieces tell the browser what should be rendered on the screen.

An example Functional component might look like this:

```
function Button () {
    return (
        <button>Success!</button>
    )
}

export default Button;
```

- Note how the function name "Button" has a capital "B", this is a naming convention in React

- If we were returning more than one element we would need to wrap our component in a <div></div> or fragment <></>

- Notice how we export out Button at the end. This is so we can import out function and use it elsewhere in our application

- Components can refer to other components in their output by importing them 

If we wanted to use our Button component in our App.js file we could import it and call it like this:


```
import './App.css';
import Button from './components/button'

function App() {
  return (
    <>
        <Button/>
    </>
  );
}

export default App;
```

- Notice how we import out Button at the top of our file then return it as if it were an HTML element







