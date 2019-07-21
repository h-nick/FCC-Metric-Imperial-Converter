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
						<h2>About this tool</h2>
						<p>
							This is a React Single Page Application to convert metric volume,
							distance and weight units to imperial units and vice versa.
						</p>
						<p>
							It receives the final result from an API powered by Express and tested
							with Mocha and Chai, which handles the conversion process.
						</p>
						<p>
							This app was made following FCC guidelines and requirements.
							It's one of the projects necessary to receive FCC's Information
							Security and Quality Assurance Certification.
						</p>
					</div>
					<div className={Styles.Text}>
						<h2>Conversion rates</h2>
						<p><strong>Litres per Gallons</strong></p>
						<p>3.78541</p>
						<p><strong>Kilometres per Miles</strong></p>
						<p>1.60934</p>
						<p><strong>Kilograms per Pounds</strong></p>
						<p>0.453592</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
