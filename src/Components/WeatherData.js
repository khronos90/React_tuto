import React from 'react';

import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import {CLOUD, CLOUDY, WINDY, SUN, RAIN, SNOW } 
    from './../constants/weathers.js';

class WeatherData extends React.Component{
    

    render(){
        return(
            <div>
                <WeatherTemperature temperature={20} weatherState={SUN}/>
                <WeatherExtraInfo humidity={80} wind={"10m/s"}/>
            </div>
        )
    }
}

export default WeatherData;