import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import LoaderScreen from '../Loader';

const CoinDetails = props => {
  return props.loadingSelectedCoin ? <LoaderScreen /> : <View style={{ flex: 1, backgroundColor: 'red' }} />;
};

const stateProps = ({ app, user }) => {
  return {
    currency: user.currency,
    selectedCoin: app.selectedCoin,
    loadingSelectedCoin: app.loadingSelectedCoin,
  };
};

export default connect(stateProps)(CoinDetails);
