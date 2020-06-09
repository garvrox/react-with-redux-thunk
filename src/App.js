import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import * as actionCreator from './actions/actions'

function App({ count = 0, history = [], onUp, onDown, onDelete, onReset, loading }) {
  console.log('loading----', loading)
  return (
    <div className="App">
      <h1>I am redux application....</h1>
      <div>
        <label>Visitor Counter :</label>
        <span>{count}</span>
      </div>
      {loading === true && <div>Loading...</div>}
      <div>
        <button onClick={() => { onUp() }}>Add</button>
        <button onClick={() => { onDown() } }>Remove</button>
        <button onClick={() => { onReset() }}>Reset</button>
      </div>
      <hr/>
      <div>History :</div>
      <ul>
        {
          history.map(({ count, id }, index) => {
            return <li className="list-item" key={id} onClick={() => { onDelete(id) }}>{count}</li>
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    history: state.history,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => dispatch(actionCreator.onUp(1)),
    onDown: () => dispatch(actionCreator.onDown(1)),
    onDelete: (id) => dispatch(actionCreator.onDelete(id)),
    onReset: () => dispatch(actionCreator.onReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
