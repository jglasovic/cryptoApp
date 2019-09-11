import React from 'react';
import { View, Image, Switch, Text } from 'react-native';
import { getMediaUrl } from '../utils/media';
import moment from 'moment';
import InfoRow from './InfoRow';

const CoinDetailsCard = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
        <Image source={{ uri: getMediaUrl(props.IMAGEURL) }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15 }}>
        <InfoRow label={'Name:'} text={props.fullName} />
        <InfoRow label={'Price:'} text={props.PRICE} />
        <InfoRow label={'Created On:'} text={moment.unix(props.contentCreatedOn).format('MMMM Do YYYY')} />
        <InfoRow label={'Change in 24h:'} text={props.CHANGE24HOUR} />
        <InfoRow label={'High in 24h:'} text={props.HIGH24HOUR} />
        <InfoRow label={'Low in 24h:'} text={props.LOW24HOUR} />
        <InfoRow label={'Volume in 24h:'} text={props.VOLUME24HOURTO} />
        <InfoRow label={'Market CAP:'} text={props.MKTCAP} />
        <InfoRow label={'Last Transaction Market:'} text={props.LASTMARKET} />
        <InfoRow label={'Last Update:'} text={props.LASTUPDATE} />
      </View>
      <View style={{ alignItems: 'center', padding: 15, flexDirection: 'row' }}>
        <Text style={{ width: 200 }}>Add to favorites:</Text>
        <Switch value={props.inFav} onValueChange={props.onChange} />
      </View>
    </View>
  );
};

export default CoinDetailsCard;
