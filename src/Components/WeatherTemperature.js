import React from 'react';
import WeatherIcons from 'react-weathericons';

class WeatherTemperature extends React.Component{
    render(){
        return(
            <div>
                <WeatherIcons name="cloud" size="2x"/>
                <span>Weather Temp</span>
            </div>
        );
    }
}

export default WeatherTemperature;