"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette,
  ChevronDown,
  Sparkles,
  Brush,
  Award,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-4 py-2 animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Contemporary Artist
                </Badge>
                
                {/* Animated Title */}
                <div className="overflow-hidden">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    <span className={`inline-block transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      Bringing
                    </span>
                    <span className={`inline-block ml-4 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      Colors
                    </span>
                    <span className={`block text-indigo-600 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      to Life
                    </span>
                  </h1>
                </div>
                
                <p className={`text-lg text-gray-600 leading-relaxed max-w-md transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                  Exploring the boundaries between reality and imagination through vibrant paintings that capture the essence of human emotion and natural beauty.
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Link href="/gallery">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300">
                    View Gallery
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-3 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300">
                    Commission Work
                  </Button>
                </Link>
              </div>

              <div className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-700 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">50+</div>
                  <div className="text-sm text-gray-600">Artworks</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">12</div>
                  <div className="text-sm text-gray-600">Exhibitions</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">200+</div>
                  <div className="text-sm text-gray-600">Collectors</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative z-10 group">
                <img
                  src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg"
                  alt="Featured Artwork"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-indigo-200 rounded-2xl -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-indigo-600" />
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 animate-fade-in">Featured Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into my latest creations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg",
                title: "Urban Reflections",
                category: "Contemporary"
              },
              {
                image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
                title: "Abstract Emotions",
                category: "Abstract"
              },
              {
                image: "https://images.pexels.com/photos/1086711/pexels-photo-1086711.jpeg",
                title: "Nature's Symphony",
                category: "Landscape"
              }
            ].map((work, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600">{work.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Artist</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elena Torres is a contemporary artist whose work explores the intersection of emotion, 
                nature, and human experience. Her paintings are characterized by vibrant colors and 
                dynamic compositions.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Awards</div>
                    <div className="text-sm text-gray-600">5+ Art Prizes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Students</div>
                    <div className="text-sm text-gray-600">300+ Taught</div>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Learn More About Me
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg"
                alt="Artist at work"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}