import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoRow = props => (
  <View style={style.row}>
    <Text style={style.label}>{props.label}</Text>
    <Text>{props.text}</Text>
  </View>
);

export default InfoRow;

const style = StyleSheet.create({
  row: {
    height: 25,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  label: {
    width: 200,
  },
});
