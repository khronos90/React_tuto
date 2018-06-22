import React from 'react';

class WeatherExtraInfo extends React.Component{
    render(){
        return(
            <div>
                <span>{`${this.props.humidity} % -`}</span>
                <span>{`${this.props.wind} wind`}</span>
            </div>
        )
    }
}

export default WeatherExtraInfo;