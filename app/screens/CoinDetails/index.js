import React from 'react';
import { connect } from 'react-redux';
import LoaderScreen from '../Loader';
import { addToFavList, removeFromFavList } from '../../redux/actions';
import CoinDetailsCard from '../../components/CoinDetailsCard';

const CoinDetails = props => {
  const code = props.navigation.getParam('code');
  const handleChange = value => {
    if (value) {
      props.addToFavList(code);
    } else {
      props.removeFromFavList(code);
    }
  };
  const isInFavList = props.favList.includes(code);
  // console.log(props.selectedCoin[code], props.loadingSelectedCoin || !props.selectedCoin[code]);
  return props.loadingSelectedCoin || !props.selectedCoin[code] ? (
    <LoaderScreen />
  ) : (
    <CoinDetailsCard
      {...props.selectedCoin[code][props.currency]}
      {...props.allCoins[code]}
      inFav={isInFavList}
      onChange={handleChange}
    />
  );
};

const dispatchProps = {
  addToFavList,
  removeFromFavList,
};

const stateProps = ({ app, user }) => {
  return {
    currency: user.currency,
    selectedCoin: app.selectedCoin,
    allCoins: app.allCoins,
    loadingSelectedCoin: app.loadingSelectedCoin,
    favList: user.favList,
  };
};

export default connect(
  stateProps,
  dispatchProps
)(CoinDetails);
