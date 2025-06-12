
import React from 'react';
import { X, Package, Truck, Shield, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Material } from './AgricultureApp';

interface MaterialDetailsProps {
  material: Material;
  onClose: () => void;
}

const MaterialDetails = ({ material, onClose }: MaterialDetailsProps) => {
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
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-2 border-gray-200 shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`font-semibold px-3 py-1 ${getCategoryColor(material.category)}`}>
                {material.category}
              </Badge>
              <Badge className={`font-semibold px-3 py-1 border-2 ${getAvailabilityColor(material.availability)}`}>
                {material.availability}
              </Badge>
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              {material.name}
            </CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-red-100 hover:text-red-600">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6 p-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold mb-2 text-blue-800">Description</h3>
            <p className="text-gray-700">{material.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <Package className="h-6 w-6 text-emerald-600" />
              <div>
                <div className="font-semibold text-emerald-800">Price</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  ${material.price.toFixed(2)} {material.unit}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
              <Truck className="h-6 w-6 text-purple-600" />
              <div>
                <div className="font-semibold text-purple-800">Supplier</div>
                <div className="text-gray-700 font-medium">{material.supplier}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-orange-800">
              <Ruler className="h-5 w-5" />
              Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {material.specifications.dimensions && (
                <div className="bg-white/70 p-3 rounded border border-orange-100">
                  <span className="font-medium text-orange-700">Dimensions:</span>
                  <span className="text-gray-700 ml-2">
                    {material.specifications.dimensions}
                  </span>
                </div>
              )}
              {material.specifications.material && (
                <div className="bg-white/70 p-3 rounded border border-orange-100">
                  <span className="font-medium text-orange-700">Material:</span>
                  <span className="text-gray-700 ml-2">
                    {material.specifications.material}
                  </span>
                </div>
              )}
              {material.specifications.capacity && (
                <div className="bg-white/70 p-3 rounded border border-orange-100">
                  <span className="font-medium text-orange-700">Capacity:</span>
                  <span className="text-gray-700 ml-2">
                    {material.specifications.capacity}
                  </span>
                </div>
              )}
              {material.specifications.durability && (
                <div className="flex items-center gap-2 bg-white/70 p-3 rounded border border-orange-100">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-orange-700">Durability:</span>
                  <span className="text-gray-700 ml-2">
                    {material.specifications.durability}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg" 
              disabled={material.availability === 'Out of Stock'}
            >
              {material.availability === 'Out of Stock' ? 'Out of Stock' : 'Contact Supplier'}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold shadow-lg"
            >
              Add to Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialDetails;
