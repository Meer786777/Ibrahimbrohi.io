import React, { useEffect, useState } from 'react';
import './css/body.css';
import Mapicon from '../images/weather.png';

const WeatherMap: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const apiKey = 'a6587e383e21ac5fdd318b88634d05ee';

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
        const intervalId = setInterval(fetchWeatherData, 90 * 1000); // Fetch every 1.5 minutes

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    // Function to get the current date in a user-friendly format
    const getCurrentDate = (): string => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date().toLocaleDateString(undefined, options);
    };

    return (
        <div className="m100">
            {weatherData ? (
                <div className='MapParent'>
                    <div className='Mapbottom'>
                        <div className='mapdiv'>
                            <img src={Mapicon} className="weather" alt="Weather icon" />
                            <div>
                                <h1 className='wh1'>{weatherData.name}</h1>
                                <span className='wspan1'>{getCurrentDate()}</span> {/* Display dynamic date */}
                            </div>
                        </div>
                        <p className='wp1'>{weatherData.main.temp}°</p> {/* Display the temperature */}
                    </div>
                </div>
            ) : (
                <div className='MapParent'>
                    <div className='Mapbottom'>
                        <div className='mapdiv'>
                            <img src={Mapicon} className="weather" alt="Weather icon" />
                            <div>
                                <h1 className='wh1'>Karachi</h1>
                                <span className='wspan1'>{getCurrentDate()}</span> {/* Display dynamic date */}
                            </div>
                        </div>
                        <p className='wp1'>29°</p> {/* Display the temperature */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherMap;
