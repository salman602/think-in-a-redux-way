// Select DOM elements
const counterEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
// Initial State
const initialState = {
  value: 0,
};

// Actions Identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
// Create Reducer function
const counterReducer = (state = initialState, action) => {
  console.log(action);
  // check conditions
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

// Create Store
const store = Redux.createStore(counterReducer);
// console.log(store);

// UI render method
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
// update UI initially
render();
// Subscribe
store.subscribe(render);

// button event listener
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
