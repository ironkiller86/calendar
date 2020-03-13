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
import React, {useState} from 'react';
/*
 * Local style import
 */
import styles from './styles';
/*
 * Local layouts import
 */
import layouts from './layouts';
import moment from 'moment';

const Calendar = props => {
  const [field, setField] = useState(new Date(1598051730000));

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
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || field;
    setField(currentDate);
    setShow(false);
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
          {props.mode === 'time' && moment(field).format('HH:mm')}
          {props.mode === 'date' && moment(field).format('DD/MM/YYYY')}
        </Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          //timeZoneOffsetInMinutes={2}
          value={field}
          mode={props.mode}
          // is24Hour
          display={'default'}
          onChange={onChange}
          // style={styles.iOsPicker}
        />
      )}
    </View>

    /* <>
      <View testID="appRootView" style={styles.container}>
        <View style={styles.button}>
          <Button
            testID="datePickerButton"
            onPress={showDatepicker}
            title="Show date time picker default!"
          />
        </View>

        <View style={styles.header}>
          <Text testID="dateTimeText" style={styles.dateTimeText}>
            {mode === 'time' && moment.utc(date).format('HH:mm')}
            {mode === 'date' && moment.utc(date).format('MM/DD/YYYY')}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour
            display={display}
            onChange={onChange}
            style={styles.iOsPicker}
          />currentMode
    </>*/
  );
};

export default Calendar;
