import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import CoinCard from '../../../components/CoinCard';
import moment from 'moment';
import { getMediaUrl } from '../../../utils/media';
import AppActions from '../../../redux/actions/app';

const Favorites = ({ currency, favList, allCoins, navigation, getCoin }) => {
  const allList = favList.map(key => allCoins[key]);
  const handleNavigation = code => {
    getCoin({ fsyms: code, tsyms: currency });
    navigation.navigate('CoinDetails', { code });
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.text}>Favorites</Text>
        <View style={style.list}>
          <FlatList
            data={allList}
            renderItem={({ item }) => (
              <CoinCard
                id={item.id}
                symbol={item.symbol}
                imgUrl={getMediaUrl(item.imageUrl)}
                name={item.fullName}
                createdOn={moment.unix(item.contentCreatedOn).format('MMMM Do YYYY')}
                onPress={handleNavigation}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const dispatchProps = {
  getCoin: AppActions.getCoin,
};

const stateProps = ({ app, user }) => ({
  currency: user.currency,
  favList: user.favList,
  allCoins: app.allCoins,
});

export default connect(
  stateProps,
  dispatchProps
)(Favorites);

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  content: { paddingHorizontal: 14 },
  input: {
    marginBottom: 5,
    paddingHorizontal: 5,
    height: 25,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  text: { color: 'white', marginVertical: 5 },
  list: { marginBottom: 14, borderColor: 'white', borderWidth: 1, borderBottomWidth: 1 },
});
