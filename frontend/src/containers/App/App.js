import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Styles from './App.css';

class App extends Component {
	render() {
		return (
			<div className={Styles.DataEntry}>
				<Input type = 'dropdown' options = {[
					{ value: 'gal', name: 'gal - Gallon' },
					{ value: 'l', name: '\u2113 - Litre' },
					{ value: 'mi', name: 'mi - Mile' },
					{ value: 'km', name: 'km - Kilometre' },
					{ value: 'lb', name: 'lb - Pound' },
					{ value: 'kg', name: 'kg - Kilogram' }
				]}/>
				<Input type = 'input' placeholder = 'here' focus/>
			</div>
		);
	}
}

export default App;