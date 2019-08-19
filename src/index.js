import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import createReducer from './create-reducer'
import './styles.css'

const actionTypes = {
  increment: 'increment',
  decrement: 'decrement'
}

const counterReducer = createReducer({
  [actionTypes.increment]: state => ({
    count: state.count + 1
  }),
  [actionTypes.decrement]: state => ({
    count: state.count - 1
  })
})

const intialState = { count: 0 }

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, intialState)

  const increment = () =>
    dispatch({
      type: actionTypes.increment
    })

  const decrement = () =>
    dispatch({
      type: actionTypes.decrement
    })

  return (
    <div className="app-container">
      <span>Count: {state.count}</span>
      <div className="action-buttons-container">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
