import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import AppActions from '../../redux/actions/app';

const List = props => {
  useEffect(() => {
    props.getList({ limit: 100, tsym: 'USD' });
  }, [props]);
  console.log(props);
  return <View style={{ flex: 1, backgroundColor: 'yellow' }} />;
};

const mdtp = {
  getList: AppActions.getList,
};

export default connect(
  null,
  mdtp
)(List);
