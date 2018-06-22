import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

class WeatherLocation extends React.Component{
  render(){
    return (
      <div>
        <Location city={'BsAs'}/>
        <WeatherData/>
      </div>
    );
  }
};

export default WeatherLocation;