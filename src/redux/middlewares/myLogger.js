import rootReducer from "../rootReducer";
// Create Middleware function
const myLogger = (store) => (next) => (action) => {
  console.log(`Store : ${JSON.stringify(store.getState())}`);
  console.log(`Action: ${JSON.stringify(action)}`);
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`upcomingState: ${JSON.stringify(upcomingState)}`);

  // pass action
  return next(action);
};

export default myLogger;
