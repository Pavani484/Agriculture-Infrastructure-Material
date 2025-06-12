
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MaterialCard from './MaterialCard';
import CategoryFilter from './CategoryFilter';
import MaterialDetails from './MaterialDetails';

export interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  supplier: string;
  availability: 'In Stock' | 'Limited' | 'Out of Stock';
  specifications: {
    dimensions?: string;
    material?: string;
    capacity?: string;
    durability?: string;
  };
  image: string;
}

const materials: Material[] = [
  {
    id: '1',
    name: 'Irrigation Pipes (PVC)',
    category: 'Irrigation',
    description: 'High-quality PVC pipes for efficient water distribution in agricultural fields.',
    price: 12.50,
    unit: 'per meter',
    supplier: 'AgroSupply Co.',
    availability: 'In Stock',
    specifications: {
      dimensions: '4 inch diameter',
      material: 'PVC Grade A',
      durability: '25+ years'
    },
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Drip Irrigation Kit',
    category: 'Irrigation',
    description: 'Complete drip irrigation system for water-efficient crop cultivation.',
    price: 245.00,
    unit: 'per kit',
    supplier: 'WaterWise Systems',
    availability: 'In Stock',
    specifications: {
      capacity: 'Covers 1000 sq ft',
      material: 'UV-resistant plastic',
      durability: '10+ years'
    },
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Greenhouse Frame Kit',
    category: 'Structures',
    description: 'Galvanized steel frame kit for building durable greenhouse structures.',
    price: 850.00,
    unit: 'per kit',
    supplier: 'GreenBuild Pro',
    availability: 'Limited',
    specifications: {
      dimensions: '12ft x 8ft x 8ft',
      material: 'Galvanized steel',
      durability: '15+ years'
    },
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Fertilizer Spreader',
    category: 'Equipment',
    description: 'Mechanical fertilizer spreader for even distribution across large fields.',
    price: 320.00,
    unit: 'per unit',
    supplier: 'FarmTech Solutions',
    availability: 'In Stock',
    specifications: {
      capacity: '50 kg hopper',
      material: 'Corrosion-resistant steel',
      durability: '8+ years'
    },
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Shade Netting',
    category: 'Protection',
    description: 'UV-resistant shade netting to protect crops from excessive sunlight.',
    price: 4.25,
    unit: 'per sq meter',
    supplier: 'CropShield Inc.',
    availability: 'In Stock',
    specifications: {
      material: 'HDPE with UV stabilizers',
      durability: '5+ years'
    },
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Water Storage Tank',
    category: 'Storage',
    description: 'Large capacity water storage tank for irrigation water reserve.',
    price: 1200.00,
    unit: 'per tank',
    supplier: 'AquaStore Systems',
    availability: 'Limited',
    specifications: {
      capacity: '5000 liters',
      material: 'Food-grade polyethylene',
      durability: '20+ years'
    },
    image: '/placeholder.svg'
  }
];

const categories = ['All', 'Irrigation', 'Structures', 'Equipment', 'Protection', 'Storage'];

const AgricultureApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const filteredMaterials = materials.filter(material => {
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Agricultural Infrastructure Materials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find all the essential materials and equipment needed for modern agricultural infrastructure
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onClick={() => setSelectedMaterial(material)}
            />
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No materials found matching your criteria.
            </p>
          </div>
        )}

        {selectedMaterial && (
          <MaterialDetails
            material={selectedMaterial}
            onClose={() => setSelectedMaterial(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AgricultureApp;
