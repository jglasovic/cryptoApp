import ApiActions from '../../services/ApiActions';
import { createRequestTypes } from '../../utils/actionHelper';

const AppActionType = {
  GET_COINS: '@app/GET_COINS',
  GET_ALL_COINS: '@app/GET_ALL_COINS',
  GET_COIN: '@app/GET_COIN',
};

export const getAllCoinsTypes = createRequestTypes(AppActionType.GET_ALL_COINS);
export const getCoinsTypes = createRequestTypes(AppActionType.GET_COINS);
export const getCoinTypes = createRequestTypes(AppActionType.GET_COIN);

const AppActions = {
  getAllCoins: () =>
    ApiActions.get({
      resource: 'data/all/coinlist',
      action: AppActionType.GET_ALL_COINS,
    }),
  getCoins: filter =>
    ApiActions.get({
      resource: 'data/pricemultifull',
      action: AppActionType.GET_COINS,
      filter,
    }),
  getCoin: filter =>
    ApiActions.get({
      resource: 'data/pricemultifull',
      action: AppActionType.GET_COIN,
      filter,
    }),
};

export default AppActions;
