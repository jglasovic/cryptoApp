import { getAllCoinsTypes, getCoinsTypes } from '../actions/app';

const initialState = {
  allCoins: {},
  popularCoins: {},
  currency: ['AUD', 'CAD', 'CZK', 'DKK', 'HUF', 'JPY', 'NOK', 'SEK', 'CHF', 'GBP', 'USD', 'EUR', 'PLN', 'HRK'],
  popular: ['BTC', 'ETH', 'LTC'],
  loadingAll: true,
  loadingPopular: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAllCoinsTypes.REQUEST: {
      return { ...state, loadingAll: true };
    }
    case getAllCoinsTypes.SUCCESS: {
      return { ...state, allCoins: action.payload.data, loadingAll: false };
    }

    case getCoinsTypes.REQUEST: {
      return { ...state, loadingPopular: true };
    }
    case getCoinsTypes.SUCCESS: {
      return { ...state, popularCoins: action.payload.DISPLAY, loadingPopular: false };
    }

    default:
      return state;
  }
};

export default appReducer;
