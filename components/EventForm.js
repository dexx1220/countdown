import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { formatDate } from '../common/api'

const styles = StyleSheet.create({
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10
  }
})

class EventForm extends Component {
  state = { title: '', date: '' }
  handleAddPress = () => {
    this.props.navigation.navigate('list')
  }

  handleChangeTitle = (value) => {
    this.setState({title: value})
  }

  handleDatePress = () => {
    this.setState({ showDatePicker: true })
  }

  handleDatePicked = (date) => {
    this.setState({date})
    this.handleDatePickerHide()
  }

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder='Event Title'
            spellCheck={false}
            onChangeText={this.handleChangeTitle}
            value={this.state.title}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder='Event date'
            spellCheck={false}
            value={formatDate(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode='datetime'
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )

  }
}

export default EventForm