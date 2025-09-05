"use client";

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Users, 
  Palette, 
  Brush, 
  Heart,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Art Awards",
      description: "5+ prestigious art prizes and recognitions",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Students Taught",
      description: "300+ aspiring artists mentored",
      color: "text-blue-600"
    },
    {
      icon: Star,
      title: "Exhibitions",
      description: "12 solo and group exhibitions",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Collectors",
      description: "200+ private collections worldwide",
      color: "text-red-600"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Solo Exhibition - 'Colors of Emotion'",
      location: "Modern Art Gallery, Los Angeles",
      description: "A comprehensive showcase of my latest works exploring the relationship between color and human emotion."
    },
    {
      year: "2023",
      title: "Artist Residency",
      location: "Tuscany Art Institute, Italy",
      description: "Three-month residency focusing on landscape painting and traditional techniques."
    },
    {
      year: "2022",
      title: "Teaching Fellowship",
      location: "California Art Academy",
      description: "Led advanced painting workshops and mentored emerging artists."
    },
    {
      year: "2021",
      title: "First Prize - Contemporary Art Competition",
      location: "San Francisco Art Fair",
      description: "Awarded for 'Urban Symphony' - a mixed media piece exploring city life."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="overflow-hidden">
              <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                About <span className="text-indigo-600">Elena</span>
              </h1>
            </div>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Discover the artist behind the canvas - my journey, inspiration, and passion for bringing colors to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-4 py-2">
                  <Palette className="w-4 h-4 mr-2" />
                  Contemporary Artist
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Artistic Journey</h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Elena Torres is a contemporary artist whose work explores the intersection of emotion, 
                  nature, and human experience. Born and raised in California, she developed her unique 
                  style through years of experimentation with various mediums and techniques.
                </p>
                <p>
                  Her paintings are characterized by vibrant colors, dynamic compositions, and an 
                  intuitive approach to form and space. Elena's work has been featured in galleries 
                  across the United States and has found homes in private collections worldwide.
                </p>
                <p>
                  When not painting, Elena enjoys teaching art workshops and mentoring emerging artists. 
                  She believes that art has the power to heal, inspire, and bring people together 
                  across cultural and linguistic boundaries.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Artistic Philosophy</h3>
                <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
                  "Art is not what you see, but what you make others see. Through my paintings, 
                  I strive to create windows into emotions and experiences that connect us all as human beings."
                </blockquote>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative z-10 group">
                <img
                  src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg"
                  alt="Elena Torres in her studio"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-purple-200 rounded-2xl -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Achievements & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones and recognition throughout my artistic career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <CardContent className="space-y-4">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Career Timeline</h2>
            <p className="text-lg text-gray-600">
              Key moments and milestones in my artistic journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start space-x-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform hover:scale-110 transition-transform duration-300">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                        <div className="flex items-center space-x-2 text-indigo-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.location}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Techniques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Skills & Techniques</h2>
            <p className="text-lg text-gray-600">
              The mediums and techniques I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Oil Painting", level: 95, color: "bg-red-500" },
              { name: "Acrylic Painting", level: 90, color: "bg-blue-500" },
              { name: "Watercolor", level: 85, color: "bg-green-500" },
              { name: "Mixed Media", level: 88, color: "bg-purple-500" },
              { name: "Digital Art", level: 75, color: "bg-yellow-500" },
              { name: "Sculpture", level: 70, color: "bg-indigo-500" }
            ].map((skill, index) => (
              <Card 
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${1600 + index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${1600 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}