
import React from 'react';
import { Wind, Thermometer, Sun, CloudRain } from 'lucide-react';

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

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

const WeatherDetails = ({ weatherData }: WeatherDetailsProps) => {
  const details = [
    {
      label: 'Wind Speed',
      value: `${weatherData.windSpeed} km/h`,
      icon: <Wind className="w-6 h-6" />
    },
    {
      label: 'Humidity',
      value: `${weatherData.humidity}%`,
      icon: <CloudRain className="w-6 h-6" />
    },
    {
      label: 'UV Index',
      value: weatherData.uvIndex,
      icon: <Sun className="w-6 h-6" />
    },
    {
      label: 'Visibility',
      value: `${weatherData.visibility} km`,
      icon: <Thermometer className="w-6 h-6" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {details.map((detail, index) => (
        <div 
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="text-white/80">
              {detail.icon}
            </div>
            <div className="text-white/70 text-sm font-medium">
              {detail.label}
            </div>
          </div>
          <div className="text-2xl font-semibold text-white">
            {detail.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
