import React from "react";

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>
				Hi I'm {props.name}. My age is {props.age}!
			</p>
			<input
				type="text"
				onChange={props.changed}
				value={props.name}
			></input>
			<p>
				<strong onClick={props.click}>{props.children}</strong>
			</p>
		</div>
	);
};

export default person;
