import React from 'react';
import './Input.css';

const Input = (props) => {
	let toRender;

	switch(props.type) {
		case 'input': toRender = (
			<input
			autoFocus = {props.focus}
			value = {props.value}
			onChange = {props.onChange}
			placeholder = {props.placeholder}
			/>
		);
		break;

		case 'dropdown': toRender = (
			<select onChange={props.onChange}>
				{props.options.map(option => {
					return (
						<option
						key = {option.value}
						value = {option.value}>
							{option.name}
						</option>
					)
				})}
			</select>
		);
		break;

		default: toRender = null;
	}

	return toRender;
}

export default Input;