import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import CoinCard from '../../../components/CoinCard';
import moment from 'moment';
import { getMediaUrl } from '../../../utils/media';

const List = ({ currency, popularCoins, allCoins, navigation, ...rest }) => {
  const [searchText, handleSearch] = useState('');
  const popularList = Object.keys(popularCoins).map(key => ({ ...popularCoins[key][currency], ...allCoins[key] }));
  const allList = Object.keys(allCoins)
    .map(key => allCoins[key])
    .filter(coin => coin.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

  const handleNavigation = id => {
    console.log(rest);
    navigation.navigate('CoinDetails', { id });
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.text}>Popular</Text>
        <View style={style.list}>
          {popularList.map(coin => (
            <CoinCard
              key={coin.id}
              id={coin.id}
              imgUrl={getMediaUrl(coin.imageUrl)}
              name={coin.fullName}
              price={coin.PRICE}
              onPress={handleNavigation}
            />
          ))}
        </View>
        <Text style={style.text}>All Coins</Text>
        <TextInput
          style={style.input}
          onChangeText={handleSearch}
          value={searchText}
          placeholder={'Search'}
          placeholderTextColor="white"
        />
        <View style={style.list}>
          <FlatList
            data={allList}
            renderItem={({ item }) => (
              <CoinCard
                id={item.id}
                imgUrl={getMediaUrl(item.imageUrl)}
                name={item.fullName}
                createdOn={moment.unix(item.contentCreatedOn).format('MMMM Do YYYY')}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const stateProps = ({ app, user }) => ({
  currency: user.currency,
  popularCoins: app.popularCoins,
  allCoins: app.allCoins,
});

export default connect(stateProps)(List);

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
  list: { marginBottom: 14, borderColor: 'white', borderWidth: 1, borderBottomWidth: 0 },
});
