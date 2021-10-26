## Activity 1

By now you should have installed your dependencies and have your React app running in the browser

The creator of this React App clearly has fantastic flare and style (if not a slightly unhealthy obsession with cats). However, if we take a look a closer look at the App.js file we can see they've got all their code in one long return... 

That isn't very modular!

## Create a Components file

To turn this sorry App.js file into something more React-y, we need to strip out some of that code and turn the different elements into re-usable components.

In the `src` directory:

- create a `components` folder 

This will contain our components

Note: There are no strict rules on how to structure a project in React, the way we're going to structure this app is just one common way of doing it

## Navbar to fab-bar! 

In your new `src` directory create a new file called `Navbar.js`

Type this code out into the file:

```function Navbar() {
    return (
        <>

        </>
    )
}

export default Navbar;
```

In `App.js` copy the navbar (lines 7 - 14) then paste them into our `Navbar.js` file between the two fragments `<> </>`

Save `Navbar.js`

At the top of `App.js` write `import Navbar from './components/Navbar.js'`

Save `App.js`



