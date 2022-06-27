export default function logger(reducer) {
  return (state, action) => {
    const prevState = state;
    console.group(action.type);
    console.log("PrevState: ", prevState);
    console.log("Action: ", action);

    const nextState = reducer(state, action);
    console.log("NextState: ", nextState);
    console.groupEnd();
    return nextState;
  };
}
