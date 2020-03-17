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

const date = new Date(2015, 9, 8, 12, 45).getTime();

const getDate = date => {
  console.log(new Date(date).toString('yyyy-MM-dd'));
};
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Calendar getDate={getDate} /*defaultDate={date}*/ />
    </View>
  );
};

export default App;
