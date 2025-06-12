
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer } from 'lucide-react';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  uvIndex: number;
  visibility: number;
}

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: 'San Francisco, CA',
    temperature: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8,
    feelsLike: 24,
    uvIndex: 6,
    visibility: 10
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'partly cloudy':
      case 'cloudy':
        return <Cloud className="w-16 h-16 text-gray-300" />;
      case 'rainy':
      case 'rain':
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      case 'snowy':
      case 'snow':
        return <CloudSnow className="w-16 h-16 text-blue-200" />;
      default:
        return <Sun className="w-16 h-16 text-yellow-400" />;
    }
  };

  const getBackgroundGradient = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return 'from-blue-400 via-blue-500 to-blue-600';
      case 'partly cloudy':
        return 'from-blue-400 via-blue-500 to-gray-500';
      case 'cloudy':
        return 'from-gray-400 via-gray-500 to-gray-600';
      case 'rainy':
      case 'rain':
        return 'from-gray-600 via-gray-700 to-blue-800';
      case 'snowy':
      case 'snow':
        return 'from-blue-200 via-blue-300 to-blue-400';
      default:
        return 'from-blue-400 via-blue-500 to-blue-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-xl font-medium animate-pulse">Loading weather...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient(weatherData.condition)} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
            <p className="text-white/80 text-lg">{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>

          {/* Main Weather Card */}
          <WeatherCard 
            weatherData={weatherData}
            weatherIcon={getWeatherIcon(weatherData.condition)}
          />

          {/* Weather Details */}
          <WeatherDetails weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
