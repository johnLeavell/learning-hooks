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