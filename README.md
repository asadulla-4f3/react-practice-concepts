# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## There are different ways lifting up the common state and props from the child components to the parent components.

1.  Using HOC's
2.  Using render prop of ReactJS
3.  Using Context API in both class components and functional components

<!-- The HOC's explained -->

ReactJS HOC components - Check the HOC's folder.

            Parent Component
                    | name
                    V

    Component A     Component B     Component C
                        | name          | name
                        V               V
                    Component D     Component E
                                        | name
                                        V
                                    Component F

## ReactJS render prop.

The term "render prop" refers to a technique for `sharing code` between react components using a `prop whose value is a function`

## Using Context.

Context provides a way to `pass data through the component tree` without having to pass props down manually `at every level`.

## Remember these things for Context.

1.  Create Context
2.  Provide Context
3.  Consume Context

And there is a Context-type way where we can pass the props to particular component.

## Things to remember for Context-type -

This works only in Class Components.

You can only subscribe to a single context using contextType

If you want to consume the props in multiple components then we need to use Consumer components of Context API
