import ApiActions from '../../services/ApiActions';
import { createRequestTypes } from '../../utils/actionHelper';

const AppActionType = {
  GET_DATA: '@app/GET_DATA',
};

export const AppActionTypes = createRequestTypes(AppActionType.GET_DATA);

const AppActions = {
  getList: filter =>
    ApiActions.get({
      resource: 'data/top/totalvolfull',
      action: AppActionType.GET_DATA,
      filter,
    }),
};

export default AppActions;
