import { NavigationActions, StackActions } from 'react-navigation';

class NavigationService {
  navigator;
  lastRequestedAction = null;

  setTopLevelNavigator = navigatorRef => {
    this.navigator = navigatorRef;
    this.executeCachedActions();
  };

  // region - Params -
  getParams = () => {
    const activeRoute = this.getActiveRoute();
    if (!activeRoute) {
      // TODO: handle this case in a better way
      return {};
    }
    // TODO: handle this case in a better way
    return activeRoute.params || {};
  };

  getParam = (key, fallback) => {
    const param = this.getParams()[key];
    if (typeof param === 'undefined' && fallback) {
      return fallback;
    }
    return param;
  };

  setParams = params => {
    const activeRoute = this.getActiveRoute();
    if (!activeRoute) {
      // TODO: handle this case in a better way
      return;
    }
    this.dispatch(NavigationActions.setParams({ params, key: activeRoute.key }));
  };
  // endregion

  // region - Actions -
  navigate(routeName, params) {
    const navigateAction = NavigationActions.navigate({ routeName, params });
    this.dispatch(navigateAction);
  }

  push(routeName, params) {
    const pushAction = StackActions.push({ routeName, params });
    this.dispatch(pushAction);
  }

  popToTop(options = {}) {
    const popToTopAction = StackActions.popToTop(options);
    this.dispatch(popToTopAction);
  }

  goBack() {
    // TODO: do we really need this goBack?
    const goBackAction = NavigationActions.back();
    this.dispatch(goBackAction);
  }
  // endregion

  // region - State -
  getActiveRoute = () => {
    if (!this.navigator || !this.navigator.state.nav) {
      return null;
    }
    return this.getRoute(this.navigator.state.nav);
  };
  // endregion

  // region - Internal -
  dispatch = action => {
    // TODO: dispatch should not be . Fix it
    if (this.navigator) {
      this.navigator.dispatch(action);
      this.lastRequestedAction = null;
    } else {
      this.cacheActionForDelayedExecution(action);
    }
  };

  getRoute = state => {
    const route = state.routes[state.index];
    if (route.routes) {
      // Dive into nested navigators
      return this.getRoute(route);
    }
    return route;
  };
  // endregion

  // region - Cache Actions -
  cacheActionForDelayedExecution = action => {
    this.lastRequestedAction = action;
  };

  executeCachedActions = () => {
    if (this.lastRequestedAction) {
      this.dispatch(this.lastRequestedAction);
    }
  };
  // endregion
}

export default new NavigationService();
