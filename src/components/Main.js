import React, { Component } from 'react';
import '../App.css';
import Form from './Form'
import Weather from './Weather'
import Logout from './Logout'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class Main extends Component {

    state = {
      city: '',
      temp: '',
      pressure: '',
      wind: '',
      error: ''
    }

  gettingForecast = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;

  if(city) {

      const weatherApiLink = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`);
      const data = await weatherApiLink.json();
console.log(data)
      this.setState({
        temp: data.main.temp,
        city: data.name,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        error: ''
      })
    } else {
      this.setState({
        city: '',
        temp: '',
        pressure: '',
        wind: '',
        error: 'Enter city!'
      })
    }
    
  }

  render() {
    return (
      <div>
        <Logout />
        <Form weatherMethod={this.gettingForecast} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          pressure={this.state.pressure}
          wind={this.state.wind}
          error={this.state.error}
        />          
      </div>
      
        
    );
  }
}

export default Main;