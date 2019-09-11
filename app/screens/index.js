import React, { useEffect } from 'react';
import RootNavigator from './rootNavigator';
import { createAppContainer } from 'react-navigation';
import NavigationService from '../services/NavigationService';
import AppActions from '../redux/actions/app';
import { connect } from 'react-redux';
import LoaderScreen from './Loader';

const AppNavigator = createAppContainer(RootNavigator);

const AppContainer = props => {
  const { getAll } = props;
  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.loadingAll ? <LoaderScreen /> : <AppNavigator ref={NavigationService.setTopLevelNavigator} />;
};

const dispatchProps = {
  getAll: AppActions.getAllCoins,
};

const stateProps = ({ app }) => ({
  loadingAll: app.loadingAll,
});

export default connect(
  stateProps,
  dispatchProps
)(AppContainer);
