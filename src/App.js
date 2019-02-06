import React, { Component } from 'react';
import './App.css';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

const API_KEY = 'd1422bbe1525ce1b0b80f8b62ccb05c2';

class App extends Component {
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		err: undefined
	};
	render() {
		return (
			<div className='App'>
				<div className='wrapper'>
					<div className='main'>
						<div className='container'>
							<div className='row'>
								<div className='col-5 title-container'>
									<Titles />
								</div>

								<div className='col-7 form-container'>
									<Form getWeather={this.getWeather} />
									<Weather
										temp={this.state.temp}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										err={this.state.err}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	getWeather = async (event) => {
		event.preventDefault();
		const city = event.target.elements.city.value;
		const country = event.target.elements.country.value;
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
		);
		const data = await api_call.json();
		if (city && country) {
			console.log(data);
			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				err: ''
			});
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				err: 'Please enter a City and Country'
			});
		}
	};
}

export default App;
