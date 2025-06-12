
import React from 'react';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryColors = (category: string, isSelected: boolean) => {
    const colorMap = {
      'All': isSelected ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-white/90 text-purple-600 border-purple-300 hover:bg-purple-50',
      'Irrigation': isSelected ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-white/90 text-blue-600 border-blue-300 hover:bg-blue-50',
      'Structures': isSelected ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-white/90 text-orange-600 border-orange-300 hover:bg-orange-50',
      'Equipment': isSelected ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-white/90 text-green-600 border-green-300 hover:bg-green-50',
      'Protection': isSelected ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white' : 'bg-white/90 text-yellow-600 border-yellow-300 hover:bg-yellow-50',
      'Storage': isSelected ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-white/90 text-indigo-600 border-indigo-300 hover:bg-indigo-50'
    };
    return colorMap[category as keyof typeof colorMap] || (isSelected ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white' : 'bg-white/90 text-gray-600 border-gray-300 hover:bg-gray-50');
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-300 transform hover:scale-105 shadow-lg border-2 ${getCategoryColors(category, selectedCategory === category)}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
