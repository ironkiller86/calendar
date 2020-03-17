/*
 * React imports
 */
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
/*
 * React native import
 */
import React from 'react';
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
 */
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      date: new Date().getTime(),
      show: false,
    };
  }
  /*
   *
   */
  activePicker = mode => {
    this.setState({mode: mode, show: true});
  };
  /**
   *
   */
  componentDidMount() {
    console.log('Calendar -  componentDidMount');
    const defaultDate = this.props.defaultDate || null;
    if (defaultDate) {
      console.log('Calendar -  componentDidMount dentro if');
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({date: defaultDate});
    }
  }
  /**
   *
   */
  onChange = (event, selectedField) => {
    selectedField = new Date(selectedField).getTime();
    this.setState({
      date: selectedField,
      show: false,
    });
  };
  componentDidUpdate() {
    console.log('Calendar - componentDidUpdate');
    console.log('Calendar - componentDidUpdate', this.state);
    this.props.getDate(this.state.date);
  }
  /**
   *
   */
  render() {
    console.log('Calendar - render');
    const {mode, date, show} = this.state;
    return (
      <View style={[styles.container, layouts.container]}>
        <View style={[styles.dataTimeField, layouts.dataTimeField]}>
          <TouchableOpacity
            onPress={() => {
              this.activePicker('date');
            }}>
            <ImageBackground
              source={styles.calendarPath}
              style={[styles.icon, layouts.icon]}
            />
          </TouchableOpacity>
          <View style={[styles.textView, layouts.textView]}>
            <Text style={[styles.textSetting, layouts.textSetting]}>
              {moment(date).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
        <View style={[styles.dataTimeField, layouts.dataTimeField]}>
          <TouchableOpacity
            onPress={() => {
              this.activePicker('time');
            }}>
            <ImageBackground
              source={styles.timePath}
              style={[styles.icon, layouts.icon]}
            />
          </TouchableOpacity>
          <View style={[styles.textView, layouts.textView]}>
            <Text style={[styles.textSetting, layouts.textSetting]}>
              {moment(date).format('HH:mm')}
            </Text>
          </View>
        </View>
        {show && (
          <DateTimePicker
            locale="it-IT"
            maximumDate={new Date(2100, 10, 20)}
            minimumDate={new Date(2020, 0, 1)}
            value={date}
            mode={mode}
            display={'default'}
            onChange={this.onChange}
            is24Hour={true}
            timeZoneOffsetInMinutes={60}
          />
        )}
      </View>
    );
  }
}
/*
 *
 */
export default Calendar;
