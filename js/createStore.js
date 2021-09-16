function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    case 'DECREASE_COUNT':
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer) // createStore takes the reducer as an argument
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');
let button2 = document.getElementById('button2');

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
button2.addEventListener('click', () => {
  store.dispatch({ type: 'DECREASE_COUNT' });
});
