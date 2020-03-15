/*
 * React imports
 */
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
/*
 * React native import
 */
import React, {useState, useEffect} from 'react';
/*
 * Local style import
 */
import styles from './styles';
/*
 * Local layouts import
 */
import layouts from './layouts';
/*
 * Import moment library
 */
import moment from 'moment';
/**
 *
 * @param {*} props
 */
const Calendar = props => {
  const {defaultValue, mode} = props;
  const [field, setField] = useState(null);
  const [show, setShow] = useState(false);
  /**
   *
   * @param {*} mode
   */
  const constrolImageProps = mode => {
    if (mode && typeof mode === 'string') {
      if (mode === 'date') {
        return styles.calendarPath;
      } else if (mode === 'time') {
        return styles.timePath;
      }
    } else {
      return null;
    }
  };
  /*
   *
   */
  const showMode = () => {
    setShow(true);
  };
  /*
   *
   * @param {*} event
   * @param {*} selectedDate
   */
  const onChange = (event, selectedField) => {
    const currentField = selectedField || field;
    setField(currentField);
    setShow(false);
  };
  /**
   *
   */
  useEffect(() => {
    console.log('Calendar useEffect', field);
    console.log('Calendar useEffect props.defaultValue', defaultValue);
    setField(defaultValue || new Date().getTime());
  }, []);

  const formatDate = () => {
    if (mode && typeof mode === 'string') {
      switch (mode) {
        /*
         *
         */
        case 'time':
          console.log('formatDate -', mode);
          return moment(field).format('HH:mm');
        /*
         *
         */
        case 'date':
          console.log('formatDate -', mode);
          return moment(field).format('DD/MM/YYYY');
        /*
         *
         */
        default:
          console.log('Err Calendar type -', mode);
      }
    }
  };
  /*
   *
   */
  return (
    <View style={[styles.container, layouts.container]}>
      <TouchableOpacity onPress={showMode}>
        <ImageBackground
          source={constrolImageProps(props.mode)}
          style={[styles.icon, layouts.icon]}
        />
      </TouchableOpacity>
      <View style={[styles.textView, layouts.textView]}>
        <Text style={[styles.textSetting, layouts.textSetting]}>
          {formatDate()}
        </Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={field}
          mode={mode}
          display={'default'}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Calendar;
