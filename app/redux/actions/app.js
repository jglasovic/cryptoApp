import ApiActions from '../../services/ApiActions';
import { createRequestTypes } from '../../utils/actionHelper';

const AppActionType = {
  GET_COINS: '@app/GET_COINS',
  GET_ALL_COINS: '@app/GET_ALL_COINS',
};

export const getAllCoinsTypes = createRequestTypes(AppActionType.GET_ALL_COINS);
export const getCoinsTypes = createRequestTypes(AppActionType.GET_COINS);

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
};

export default AppActions;
