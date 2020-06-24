This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



Hook = Hooks are functions that let you 'hook into' Reacy state and lifecycle features from function components.
    -Hooks do not work inside classes-
    -Hooks let you use React without classes



* State hook - useState is a Hook called inside a functional component and add some local state to it.  

    - State will be preserved between re-renders.  

* useState returns a pair: 
    - the current state value 
    - a function that lets you update it.

        ** The function can be called from an event handler or somewhere else.  ( its similar to this.setState, except it does not merge the old and new state together )

* useState - the only argument is the intial state.  (in the exmple it is set to 0 because the counter starts from zero )
    - The initial state argumebnt is onkly used druing the first render.

* You can use State hook more than once in a single component:
    - ex:
        function ExampleWithManyStates() {
            const [age, setAge] = useState(42);
            const [fruit, setFruit] = useState('banana');
            const [todos, setTodos] = useState([{
                text: 'Learn Hooks'
            }])
        }



* Effect Hook - adds the ability to perform side effects ( data fetchingm subscriptions, or manually changing the DOM from React components before )  from a functional component.  It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes but unified into a single API