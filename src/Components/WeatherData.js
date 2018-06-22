import React from 'react';

import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';

class WeatherData extends React.Component{
    render(){
        return(
            <div>
                <WeatherTemperature/>
                <WeatherExtraInfo humidity={80} wind={"10m/s"}/>
            </div>
        )
    }
}

export default WeatherData;