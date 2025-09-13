"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Send,
  Clock,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // You could show a success message here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kanvasugal@gmail.com",
      description: "Best way to reach me for inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "91 7676389809",
      description: "Available Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Studio Location",
      value: "Los Angeles, California",
      description: "Studio visits by appointment only"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@elena.torres.art", color: "hover:text-pink-600" },
    { icon: Facebook, name: "Facebook", handle: "Elena Torres Art", color: "hover:text-blue-600" },
    { icon: Twitter, name: "Twitter", handle: "@elenatorresart", color: "hover:text-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="overflow-hidden">
              <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Get In <span className="text-indigo-600">Touch</span>
              </h1>
            </div>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Interested in commissioning a piece, purchasing artwork, or learning more about my work? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${500 + index * 200}ms` }}
                >
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{info.title}</h3>
                    <p className="font-medium text-indigo-600">{info.value}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Send Me a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24 hours. For urgent inquiries, 
                  please call me directly.
                </p>
              </div>

              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="resize-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Tell me about your project, commission request, or any questions you have..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Response Time */}
              <Card className="p-6 bg-indigo-50 border-indigo-200">
                <CardContent className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600 text-sm">
                      In order to purchase or commission art, payment is to be made through a bank transfer after the invoice has been received. Once the payment has been received and credited to our account, we will produce and ship your order.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Commission Info */}
              <Card className="p-6 bg-purple-50 border-purple-200">
                <CardContent className="flex items-start space-x-4">
                  <MessageCircle className="w-8 h-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commission Process</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Interested in a custom piece? Here's how it works:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Initial consultation to discuss your vision</li>
                      <li>• Detailed proposal with timeline and pricing</li>
                      <li>• Regular progress updates throughout creation</li>
                      <li>• Final approval and delivery</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Follow My Work</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{social.name}</h4>
                          <p className="text-sm text-gray-600">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Studio Image */}
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg"
                  alt="Artist studio"
                  className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-medium">My Studio</h4>
                    <p className="text-sm">Where the magic happens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}