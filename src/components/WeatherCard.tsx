
import React from 'react';
import { MapPin } from 'lucide-react';

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

interface WeatherCardProps {
  weatherData: WeatherData;
  weatherIcon: React.ReactNode;
}

const WeatherCard = ({ weatherData, weatherIcon }: WeatherCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-white">
          <MapPin className="w-5 h-5" />
          <span className="text-lg font-medium">{weatherData.location}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-6xl font-light text-white mb-2">
            {weatherData.temperature}°
          </div>
          <div className="text-xl text-white/90 font-medium mb-1">
            {weatherData.condition}
          </div>
          <div className="text-white/70">
            Feels like {weatherData.feelsLike}°
          </div>
        </div>
        
        <div className="flex-shrink-0 ml-8">
          <div className="transform hover:scale-110 transition-transform duration-300">
            {weatherIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
