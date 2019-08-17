import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const actionTypes = {
  increment: 'increment',
  decrement: 'decrement'
}

const stateReducers = {
  [actionTypes.increment]: state => ({
    ...state,
    count: state.count + 1
  }),
  [actionTypes.decrement]: state => ({
    ...state,
    count: state.count - 1
  })
}

const counterReducer = (state, action) => {
  const stateReducer = stateReducers[action.type]
  if (!stateReducer) {
    throw new Error(`[counterReducer] - Unknown action type: ${action.type}`)
  }
  return stateReducer(state, action)
}

const useCounter = initialCount => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialCount })

  const increment = () =>
    dispatch({
      type: actionTypes.increment
    })

  const decrement = () =>
    dispatch({
      type: actionTypes.decrement
    })

  return { value: state.count, increment, decrement }
}

const App = () => {
  const { value, increment, decrement } = useCounter(0)

  return (
    <div className="app-container">
      <span>Count: {value}</span>
      <div className="action-buttons-container">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
