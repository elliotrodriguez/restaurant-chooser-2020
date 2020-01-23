import React from 'react';
import {Text, View} from 'react-native';

const Screen = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>{props.title}</Text>
  </View>
);

export default Screen;
