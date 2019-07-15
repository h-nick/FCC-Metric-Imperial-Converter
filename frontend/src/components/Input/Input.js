import React from 'react';

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
			<select>
				{props.options.map(option => {
					return (
						<option
						value = {option.value}
						onChange = {props.onChange}>
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