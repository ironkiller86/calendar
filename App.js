/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Calendar from './Calendar';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Calendar mode={'time'} />
      <Calendar mode={'date'} />
    </View>
  );
};

export default App;
