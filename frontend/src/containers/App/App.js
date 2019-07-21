import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Styles from './App.css';

class App extends Component {
	state = {
		result: null
	}

	render() {
		let result = <h2>Please insert a value</h2>

		if(this.state.result) {

		}

		return (
			<div className={Styles.App}>
				<h1>FCC - Metric Imperial Converter</h1>
				
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

				<div className={Styles.Result}>{result}</div>

				<div className={Styles.Descriptions}>
					<div className={Styles.Text}>
						<h2>Imperial Units</h2>
						<p><strong>Gallon:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
						<p><strong>Mile:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v</p>
						<p><strong>Pound:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
					</div>
					<div className={Styles.Text}>
						<h2>Metric Units</h2>
						<p><strong>Litre:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vv</p>
						<p><strong>Kilometre:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
						<p><strong>Kilogram:</strong> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;