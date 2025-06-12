
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Material } from './AgricultureApp';

interface MaterialCardProps {
  material: Material;
  onClick: () => void;
}

const MaterialCard = ({ material, onClick }: MaterialCardProps) => {
  const getAvailabilityColor = (availability: Material['availability']) => {
    switch (availability) {
      case 'In Stock':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-300';
      case 'Limited':
        return 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-300';
      case 'Out of Stock':
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-300';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      'Irrigation': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'Structures': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
      'Equipment': 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
      'Protection': 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white',
      'Storage': 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white/95 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge className={`text-xs font-semibold px-3 py-1 ${getCategoryColor(material.category)}`}>
            {material.category}
          </Badge>
          <Badge className={`text-xs font-semibold px-3 py-1 border-2 ${getAvailabilityColor(material.availability)}`}>
            {material.availability}
          </Badge>
        </div>
        <CardTitle className="text-lg font-bold text-gray-800 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          {material.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {material.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ${material.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
              {material.unit}
            </span>
          </div>
          
          <div className="text-xs text-gray-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg border border-blue-200">
            <span className="font-semibold text-blue-700">Supplier:</span> {material.supplier}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
