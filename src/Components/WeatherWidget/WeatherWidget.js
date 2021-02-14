import React, {useState, useEffect} from 'react';
import WeatherWidgetEditor from './WeatherWidgetEditor';
import WeatherWidgetDisplay from './WeatherWidgetDisplay';
import './WeatherWidget.css';
import {Spin} from 'antd';
import axios from 'axios';

const WeatherWidget = () => {
  const firstSetting = {
    title: 'TITLE OF WIDGET',
    wind: 'On',
    temp: 'C'
  };

  const [settings, setSettings] = useState({...firstSetting});
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      // bringing the results in metric by default
      const url = 'http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&APPID=d247e2e93cec134541237255f23b8d3d&units=metric';
      const response = await axios.get(url);
      if (response?.status === 200 && response.data) {
        setLoading(false);
        setWeatherData(response.data);
      }
    };
    setLoading(true);
    getWeatherData();
  }, []);

  return (
    <div className='main-div'>
      {loading && <Spin />}
      {!loading && (
        <>
          <WeatherWidgetEditor settings={settings} setSettings={setSettings} />
          <WeatherWidgetDisplay settings={settings} weatherData={weatherData} />
        </>
      )
      }
    </div>
  )
}

export default WeatherWidget;
