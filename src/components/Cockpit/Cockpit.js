import React from 'react'
import design from './cockpit.module.css'

const cockpit = (props) => {
	// useEffect(() => {
	// 	console.log(``);
	// });

	const assignedDesign = []

	let btnClass = ''
	if (props.showPersons) {
		btnClass = design.red
	}

	if (props.persons.length <= 2) {
		assignedDesign.push(design.red)
	}
	if (props.persons.length <= 1) {
		assignedDesign.push(design.bold)
	}
	return (
		<div className={design.cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedDesign.join(' ')}>This is really working</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	)
}

export default cockpit
