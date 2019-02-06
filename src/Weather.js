import React from 'react';

const Weather = (props) => (
	<div>
		{props.city &&
		props.country && (
			<p className='weather__key'>
				Location:{' '}
				<span className='weather__value'>
					{props.city}, {props.country}
				</span>
			</p>
		)}
		{props.temp && (
			<p className='weather__key'>
				Temperature: <span className='weather__value'>{props.temp}°C</span>
			</p>
		)}
		{props.humidity && (
			<p className='weather__key'>
				Humidty: <span className='weather__value'>{props.humidity}%</span>
			</p>
		)}
		{props.description && (
			<p className='weather__key'>
				Conditions:{' '}
				<span className='weather__value'>
					{props.description.charAt(0).toUpperCase() + props.description.slice(1)}
				</span>
			</p>
		)}
		{props.err && <p className='weather__error'>{props.err}</p>}
	</div>
);

export default Weather;
