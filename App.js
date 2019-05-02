import React, { Component } from 'react'
import EventList from './components/EventList'
import EventForm from './components/EventForm'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'

const Stack = StackNavigator({
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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
  }
}
