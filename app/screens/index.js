import React, { useEffect } from 'react';
import RootNavigator from './rootNavigation';
import { createAppContainer } from 'react-navigation';
import NavigationService from '../services/NavigationService';
import AppActions from '../redux/actions/app';
import { connect } from 'react-redux';
import LoaderScreen from './Loader';

const AppNavigator = createAppContainer(RootNavigator);

const AppContainer = props => {
  const { getPopular, getAll } = props;
  useEffect(() => {
    getAll();
  }, [getAll]);

  useEffect(() => {
    getPopular({ fsyms: props.popular, tsyms: props.currency });
  }, [getPopular, props.currency, props.popular]);

  return props.loadingAll || props.loadingPopular ? (
    <LoaderScreen />
  ) : (
    <AppNavigator ref={NavigationService.setTopLevelNavigator} />
  );
};

const dispatchProps = {
  getAll: AppActions.getAllCoins,
  getPopular: AppActions.getCoins,
};

const stateProps = ({ app, user }) => ({
  loadingAll: app.loadingAll,
  loadingPopular: app.loadingPopular,
  currency: user.currency,
  popular: app.popular,
});

export default connect(
  stateProps,
  dispatchProps
)(AppContainer);
