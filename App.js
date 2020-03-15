/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Calendar from './Calendar';
import {View} from 'react-native';
const time = new Date(0, 0, 0, 16, 30).getTime();
const date = new Date(2015, 9, 8, 12, 45).getTime();
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Calendar mode={'time'} /*defaultValue={time} */ />
      <Calendar mode={'date'} /* defaultValue={date} */ />
    </View>
  );
};

export default App;
