
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
        return 'bg-green-100 text-green-800';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{material.category}</Badge>
              <Badge className={getAvailabilityColor(material.availability)}>
                {material.availability}
              </Badge>
            </div>
            <CardTitle className="text-2xl">{material.name}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{material.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Price</div>
                <div className="text-2xl font-bold text-primary">
                  ${material.price.toFixed(2)} {material.unit}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Supplier</div>
                <div className="text-muted-foreground">{material.supplier}</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {material.specifications.dimensions && (
                <div>
                  <span className="font-medium">Dimensions:</span>
                  <span className="text-muted-foreground ml-2">
                    {material.specifications.dimensions}
                  </span>
                </div>
              )}
              {material.specifications.material && (
                <div>
                  <span className="font-medium">Material:</span>
                  <span className="text-muted-foreground ml-2">
                    {material.specifications.material}
                  </span>
                </div>
              )}
              {material.specifications.capacity && (
                <div>
                  <span className="font-medium">Capacity:</span>
                  <span className="text-muted-foreground ml-2">
                    {material.specifications.capacity}
                  </span>
                </div>
              )}
              {material.specifications.durability && (
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Durability:</span>
                  <span className="text-muted-foreground ml-2">
                    {material.specifications.durability}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button className="flex-1" disabled={material.availability === 'Out of Stock'}>
              {material.availability === 'Out of Stock' ? 'Out of Stock' : 'Contact Supplier'}
            </Button>
            <Button variant="outline" className="flex-1">
              Add to Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialDetails;
