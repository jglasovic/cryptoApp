import { createAction } from '../../utils/actionHelper';

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const changeCurrency = createAction(CHANGE_CURRENCY);

export const ADD_TO_FAV_LIST = 'ADD_TO_FAV_LIST';
export const addToFavList = createAction(ADD_TO_FAV_LIST);

export const REMOVE_FROM_FAV_LIST = 'REMOVE_FROM_FAV_LIST';
export const removeFromFavList = createAction(REMOVE_FROM_FAV_LIST);
