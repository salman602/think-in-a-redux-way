import { DECREMENT, INCREMENT } from "./actionsIdentifier";

const initialState = {
  value: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
