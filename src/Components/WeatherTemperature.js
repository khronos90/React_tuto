import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, WINDY, SUN, RAIN, SNOW } from './../constants/weathers.js';

class WeatherTemperature extends React.Component{
  stateToIconName(wState){
    switch(wState){
      case CLOUD:
        return "cloud";
      case CLOUDY:
        return "cloudy";
      case SUN:
        return "day-sunny";
      case RAIN:
        return "rain";
      case SNOW:
        return "snow";
      case WINDY:
        return "windy";
      default:
        return "day-sunny";
    }
  }

  getWeatherIcon(weatherState){
    return(
      <WeatherIcons name={this.stateToIconName(weatherState)} size="2x"/>
    );
  }

    render(){
        return(
            <div>
                {this.getWeatherIcon(this.props.weatherState)}
                <span>{`${this.props.temperature} °C`}</span>
            </div>
        );
    }
}

export default WeatherTemperature;