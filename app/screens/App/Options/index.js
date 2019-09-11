import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SafeAreaView, Text, StyleSheet, Picker } from 'react-native';
import CoinCard from '../../../components/CoinCard';
import moment from 'moment';
import { getMediaUrl } from '../../../utils/media';
import { changeCurrency } from '../../../redux/actions';

const Options = ({ currency, currencyList, favList, allCoins, ...rest }) => {
  const allList = favList.map(key => allCoins[key]);
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
                onDelete={'delete'}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={[style.content, { height: 200, flexDirection: 'row' }]}>
          <Text style={{ color: 'white' }}>Select Currency: </Text>
          <Picker
            selectedValue={currency}
            style={{ height: 50, width: 100 }}
            onValueChange={value => rest.changeCurrency(value)}>
            {currencyList.map((value, index) => (
              <Picker.Item key={index} label={value} value={value} color="white" />
            ))}
          </Picker>
        </View>
      </View>
    </SafeAreaView>
  );
};

const dispatchProps = {
  changeCurrency,
};

const stateProps = ({ app, user }) => ({
  currency: user.currency,
  currencyList: app.currencyList,
  favList: user.favList,
  allCoins: app.allCoins,
});

export default connect(
  stateProps,
  dispatchProps
)(Options);

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  content: { paddingHorizontal: 14 },
  text: { color: 'white', marginVertical: 5 },
  list: { marginBottom: 14, borderColor: 'white', borderWidth: 1, borderBottomWidth: 1 },
});
