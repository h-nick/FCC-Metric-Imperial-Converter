import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Styles from './App.css';
import Result from '../../components/Result/Result';
import Spinner from '../../components/Ui/Spinner/Spinner';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			result: undefined,
			unit: 'gal',
			value: '',
			loading: false
		}
	}

	sendData = () => {
		this.setState({ loading: true });

		axios.get('https://fcc-metric-imperial-converter1.herokuapp.com/api/convert?input=' +
		(this.state.value) + (this.state.unit))
		.then(response => {
			this.setState({
				result: response.data.string,
				loading: false
			});
		})
		.catch(() => {
			this.setState({
				result: 'Invalid value',
				loading: false
			});
		});
	}

	inputChangedHandler = event => {
		this.setState({
			value: event.target.value
		}, () => {
			if(this.state.value !== '') this.sendData()
		});
	}

	dropdownChangedHandler = event => {
		this.setState({
			unit: event.target.value
		}, () => this.sendData());
	}

	render() {
		let result = <Result>Please insert a value</Result>

		if(this.state.result && this.state.value !== '') {
			result = <Result>{this.state.result}</Result>;
		}

		let resultWrapper = <div className={Styles.Result}>{result}</div>
		
		if(this.state.loading) resultWrapper = <Spinner/>

		return (
			<div className={Styles.App}>
				<h1>FCC - Metric Imperial Converter</h1>
				
				<div className={Styles.DataEntry}>
					<Input
					onChange = {event => this.dropdownChangedHandler(event)}
					type = 'dropdown'
					options = {[
						{ value: 'gal', name: 'gal - Gallon' },
						{ value: 'l', name: '\u2113 - Litre' },
						{ value: 'mi', name: 'mi - Mile' },
						{ value: 'km', name: 'km - Kilometre' },
						{ value: 'lb', name: 'lb - Pound' },
						{ value: 'kg', name: 'kg - Kilogram' }
					]}/>
					
					<Input
					type = 'input'
					placeholder = 'here'
					value = {this.state.value}
					onChange = {event => this.inputChangedHandler(event)}
					focus/>
				</div>

				{resultWrapper}

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