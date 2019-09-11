import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SafeAreaView, Text, TextInput } from 'react-native';
import CoinCard from '../../components/CoinCard';
import moment from 'moment';

const List = ({ currency, popularCoins, allCoins }) => {
  const [searchText, handleSearch] = useState('');
  const popularList = Object.keys(popularCoins).map(key => ({ ...popularCoins[key][currency], ...allCoins[key] }));
  const allList = Object.keys(allCoins)
    .map(key => allCoins[key])
    .filter(coin => coin.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ paddingHorizontal: 14 }}>
        <Text style={{ color: 'white' }}>Popular</Text>
        <View style={{ marginBottom: 14, marginTop: 5, borderColor: 'white', borderWidth: 1, borderBottomWidth: 0 }}>
          {popularList.map(coin => (
            <CoinCard
              key={coin.id}
              imgUrl={`https://www.cryptocompare.com/${coin.imageUrl}`}
              name={coin.fullName}
              price={coin.PRICE}
            />
          ))}
        </View>
        <Text style={{ color: 'white' }}>All Coins</Text>
        <TextInput
          style={{
            marginVertical: 5,
            paddingHorizontal: 5,
            height: 25,
            borderColor: 'white',
            borderWidth: 1,
            color: 'white',
          }}
          onChangeText={handleSearch}
          value={searchText}
          placeholder={'Search'}
          placeholderTextColor="white"
        />
        <View style={{ marginBottom: 30, borderColor: 'white', borderWidth: 1 }}>
          <FlatList
            data={allList}
            renderItem={({ item }) => (
              <CoinCard
                imgUrl={`https://www.cryptocompare.com/${item.imageUrl}`}
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
