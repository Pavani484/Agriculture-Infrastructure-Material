
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
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {material.category}
          </Badge>
          <Badge 
            variant="secondary" 
            className={getAvailabilityColor(material.availability)}
          >
            {material.availability}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">
          {material.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {material.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">
              ${material.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">
              {material.unit}
            </span>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Supplier: {material.supplier}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
