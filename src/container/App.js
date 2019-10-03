import React, { Component } from "react";
import design from "./app.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
	constructor(props) {
		super(props);
		console.log(`Running from constructor of app.js`);
	}

	state = {
		persons: [
			{ id: "id1", name: "Mahi", age: 25 },
			{ id: "id2", name: "Sadi", age: 24 },
			{ id: "id3", name: "Rifat", age: 25 }
		],
		showPersons: false
	};

	static getDerivedStateFromProps(props, state) {
		console.log(`Running from getDerivedStateFromProps of app.js`, props);
		return state;
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;
		const updatedPersons = [...this.state.persons];
		updatedPersons[personIndex] = person;
		this.setState({
			persons: updatedPersons
		});
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		console.log(`Running from render() of app.js`);

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				></Persons>
			);
		}

		return (
			<div className={design.app}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				></Cockpit>
				{persons}
			</div>
		);
	}
}

export default App;
