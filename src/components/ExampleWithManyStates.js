import React, { useState } from 'react'


function ExampleWithManyStates() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{
        text: 'Learn Hooks'
    }])
    return (
        <div>
            <p>Your age is {age} </p>
            
        </div>
    )
}

export default ExampleWithManyStates
