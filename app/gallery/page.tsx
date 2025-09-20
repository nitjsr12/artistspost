"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';

interface Painting {
  id: number;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Vineyards",
    year: "2024",
    medium: "Oil on Canvas",
    dimensions: "24\" x 36\"",
    price: "$1,200",
    image: "/Watercolour/Vineyards for us to Dwell.jpg",
    description: "A peaceful landscape capturing the golden hour light",
    category: "Watercolour"
  },
  {
    id: 2,
    title: "Urban Reflections",
    year: "2024",
    medium: "Acrylic on Canvas",
    dimensions: "18\" x 24\"",
    price: "$800",
    image: "/Watercolour/Sweetness of Anticipation .jpg",
    description: "Modern city life reflected in glass and water",
    category: "Watercolour"
  },
  {
    id: 3,
    title: "Abstract Emotions",
    year: "2023",
    medium: "Mixed Media",
    dimensions: "30\" x 40\"",
    price: "$1,500",
    image: "/Watercolour/Lifeline of the shores .jpg",
    description: "An exploration of color and form expressing deep emotions",
    category: "Watercolour"
  },
  {
    id: 4,
    title: "Portrait Study",
    year: "2024",
    medium: "Oil on Canvas",
    dimensions: "16\" x 20\"",
    price: "$950",
    image: "/Watercolour/IMG-20200226-WA0011.jpg",
    description: "A detailed portrait study focusing on light and shadow",
    category: "Watercolour"
  },
  {
    id: 5,
    title: "Nature's Symphony",
    year: "2023",
    medium: "Watercolor",
    dimensions: "12\" x 16\"",
    price: "$650",
    image: "/Watercolour/IMG-20200226-WA0010.jpg",
    description: "Delicate watercolor capturing the essence of nature",
    category: "Watercolour"
  },
  {
    id: 6,
    title: "Fortress of Solitude",
    year: "2024",
    medium: "Acrylic on Canvas",
    dimensions: "20\" x 20\"",
    price: "$750",
    image: "/Watercolour/Fortress of Solitude.jpg",
    description: "A modern geometric interpretation of dreams and aspirations",
    category: "Watercolour"
  },
  {
    id: 7,
    title: "Bouquet of Stars",
    year: "2024",
    medium: "Oil on Canvas",
    dimensions: "28\" x 42\"",
    price: "$1,400",
    image: "/Watercolour/Bouquet of Stars in Scarlet.jpg",
    description: "Ocean waves meeting the shore in perfect harmony",
    category: "Watercolour"
  },
  {
    id: 8,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Watercolour/1599710657638_Silent_Flame_Flame_of_the_Forest__06414.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Watercolour"
  },
  {
    id: 9,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Watercolour/1599709883730_Clusters_of_Heavenliness_Rose_Apple__61575.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Watercolour"
  },
  {
    id: 10,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Watercolour/1599709742114_Bouquet_of_Stars_in_Scarlet_Ixora__66293.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Watercolour"
  },
  {
    id: 11,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Watercolour/1599709610463_Beautiful_Introvert_Touch_me_Not__92893.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Watercolour"
  },
  {
    id: 12,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Acrylic/20201107_141524.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Acrylic"
  },
  {
    id: 13,
    title: "City Lights",
    year: "2023",
    medium: "Acrylic on Canvas",
    dimensions: "22\" x 30\"",
    price: "$1,100",
    image: "/Acrylic/20210627_105123.jpg",
    description: "The vibrant energy of city nightlife captured in paint",
    category: "Acrylic"
  },
];

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['all', 'Watercolour', 'Mural', 'Acrylic',];
  
  const filteredPaintings = activeCategory === 'all' 
    ? paintings 
    : paintings.filter(painting => painting.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="overflow-hidden">
              <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Art <span className="text-indigo-600">Gallery</span>
              </h1>
            </div>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              A curated collection of my latest works, spanning various styles and mediums. Each piece tells a unique story through color, form, and emotion.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`capitalize transform hover:scale-105 transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-indigo-600 hover:bg-indigo-700" 
                      : "hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPaintings.map((painting, index) => (
              <Card 
                key={painting.id} 
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPainting(painting)}
              >
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Click to view details</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {painting.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {painting.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{painting.medium}</p>
                  <p className="text-sm text-gray-500">{painting.dimensions}</p>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-indigo-600 text-lg">{painting.price}</span>
                    <Badge className="capitalize bg-indigo-100 text-indigo-800">
                      {painting.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPainting && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPainting(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedPainting.title}</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedPainting(null)}
                className="hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <img
                src={selectedPainting.image}
                alt={selectedPainting.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Year:</span> {selectedPainting.year}</div>
                    <div><span className="font-medium">Medium:</span> {selectedPainting.medium}</div>
                    <div><span className="font-medium">Dimensions:</span> {selectedPainting.dimensions}</div>
                    <div><span className="font-medium">Price:</span> <span className="text-indigo-600 font-bold text-lg">{selectedPainting.price}</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedPainting.description}</p>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-6 transform hover:scale-105 transition-all duration-300">
                  Inquire About Purchase
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}