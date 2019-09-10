class ApiActions {
  static create(configs, requestType) {
    return async (dispatch, getState, networkClient) => {
      const actions = ApiActions.makeRequestActionTypes(configs.action);
      dispatch({ type: actions.request, requestParams: configs.params, requestBody: configs.body });
      try {
        const response = await networkClient.request(configs, requestType);
        dispatch({
          type: actions.success,
          requestParams: configs.params,
          payload: response,
        });
        return response;
      } catch (error) {
        dispatch({
          type: actions.fail,
          requestParams: configs.params,
          payload: error,
        });
        throw error;
      } finally {
        dispatch({
          type: actions.complete,
          requestParams: configs.params,
          requestBody: configs.body,
        });
      }
    };
  }

  static get(request) {
    return ApiActions.create(request, 'GET');
  }
  static put(request) {
    return ApiActions.create(request, 'PUT');
  }
  static delete(request) {
    return ApiActions.create(request, 'DELETE');
  }
  static post(request) {
    return ApiActions.create(request, 'POST');
  }

  static makeRequestActionTypes(baseAction) {
    return {
      request: `${baseAction}::REQUEST`,
      success: `${baseAction}::SUCCESS`,
      fail: `${baseAction}::FAIL`,
      complete: `${baseAction}::COMPLETE`,
    };
  }
}

export default ApiActions;
