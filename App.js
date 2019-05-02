import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import { StackNavigator } from 'react-navigation'

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'My Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Event Form'
    })
  }
})
