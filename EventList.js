import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import EventCard from './EventCard'
import ActionButton from 'react-native-action-button'
import { Events } from './data'

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#f3f3f3'
	}
})

class EventList extends Component {
	state = {events: []}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				events: this.state.events.map(evt => ({
					...evt,
					timer: Date.now()
				}))
			})
		}, 1000)
		const events = Events.map(e => ({
			...e,
			date: new Date(e.date)
		}))
		this.setState({ events })
	}

	handleAddEvent = () => {
		this.props.navigation.navigate('form')
	}

	render() {
		return [
			<FlatList
				data={this.state.events}
				renderItem={({item}) => <EventCard event={item} />}
				keyExtractor={item => item.id}
				style={styles.list}
			/>,
			<ActionButton
				key='fab'
				onPress={this.handleAddEvent}
				buttonColor="rgba(231, 76, 60, 1)"
			/>
		]
	}

}

export default EventList