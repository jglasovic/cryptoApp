import _ from 'lodash';
import { CHANGE_CURRENCY, ADD_TO_FAV_LIST, REMOVE_FROM_FAV_LIST } from '../actions/user';

const initialState = {
  currency: 'USD',
  favList: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return { ...state, currency: action.payload };
    }
    case ADD_TO_FAV_LIST: {
      return { ...state, favList: [...state.favList, action.payload] };
    }
    case REMOVE_FROM_FAV_LIST: {
      const favList = [..._.remove(state.favList, el => el === action.payload)];
      return { ...state, favList };
    }

    default:
      return state;
  }
};

export default appReducer;
