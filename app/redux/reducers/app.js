const initalState = {};

export const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case '': {
      return { ...state, lang: action.payload };
    }

    default:
      return state;
  }
};

export default appReducer;
