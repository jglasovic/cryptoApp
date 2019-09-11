import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const CoinCard = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContent} disabled={!props.onPress}>
        <Image source={{ uri: props.imgUrl }} resizeMode="contain" style={styles.img} />
        <View>
          <Text style={styles.text}>{props.name}</Text>
          {props.createdOn && <Text style={styles.text}>Created: {props.createdOn}</Text>}
        </View>

        {props.price && <Text style={styles.textPrice}>Price: {props.price}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  container: { height: 75, width: '100%' },
  innerContent: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 8,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  img: { height: 40, width: 40, marginRight: 15 },
  text: { color: 'white' },
  textPrice: { color: 'white', flex: 1, textAlign: 'right' },
});
