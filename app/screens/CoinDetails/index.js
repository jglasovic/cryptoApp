import React from 'react';
import { connect } from 'react-redux';
import LoaderScreen from '../Loader';
import { addToFavList, removeFromFavList } from '../../redux/actions';
import CoinDetailsCard from '../../components/CoinDetailsCard';

const CoinDetails = props => {
  const code = props.navigation.getParam('code');
  const { currency, selectedCoin, allCoins, loadingSelectedCoin, favList } = props;
  const handleChange = value => {
    if (value) {
      props.addToFavList(code);
    } else {
      props.removeFromFavList(code);
    }
  };
  const isInFavList = favList.includes(code);
  const selectedCoinData = selectedCoin && props.selectedCoin[code] && props.selectedCoin[code][currency];
  const loading = loadingSelectedCoin || !selectedCoinData;
  return loading ? (
    <LoaderScreen />
  ) : (
    <CoinDetailsCard {...selectedCoinData} {...allCoins[code]} inFav={isInFavList} onChange={handleChange} />
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
