import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import EventCard from './EventCard'
import ActionButton from 'react-native-action-button'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#f3f3f3'
	}
})

class EventList extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		getEvents()
		const { events } = this.props

		if (events.length > 0) {
			setInterval(() => {
				this.setState({
					events: events.map(evt => ({
						...evt,
						timer: Date.now()
					}))
				})
			}, 1000)
		}
	}

	handleAddEvent = () => {
		this.props.navigation.navigate('form')
	}

	render() {
		const { events } = this.props
		return null
		// return [
		// 	<FlatList
		// 		data={events}
		// 		renderItem={({item}) => <EventCard event={item} />}
		// 		keyExtractor={item => item.id}
		// 		style={styles.list}
		// 	/>,
		// 	<ActionButton
		// 		key='fab'
		// 		onPress={this.handleAddEvent}
		// 		buttonColor="rgba(231, 76, 60, 1)"
		// 	/>
		// ]
	}

}

const mapStateToProps = state => {
	return {
		events: state.events
	}
}

export default connect(
	mapStateToProps,
	{ getEvents }
)(EventList)