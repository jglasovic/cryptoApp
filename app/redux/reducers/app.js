import { AppActionTypes } from '../actions/app';

const initalState = {
  data: [],
  currancy: ['AUD', 'CAD', 'CZK', 'DKK', 'HUF', 'JPY', 'NOK', 'SEK', 'CHF', 'GBP', 'USD', 'EUR', 'PLN', 'HRK'],
};

export const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case AppActionTypes.SUCCESS: {
      return { ...state, data: action.payload.data };
    }

    default:
      return state;
  }
};

export default appReducer;
