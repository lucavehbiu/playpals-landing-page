import React from 'react';
import { Users, Calendar, Bell, CreditCard, Award, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Team Formation',
    description: 'Build your dream team or join existing ones across multiple sports disciplines.'
  },
  {
    icon: Calendar,
    title: 'Facility Booking',
    description: 'Seamlessly book sports facilities and schedule games with integrated calendar management.'
  },
  {
    icon: Bell,
    title: 'Quick Join',
    description: 'Get instant notifications when teams need players and join games with one click.'
  },
  {
    icon: CreditCard,
    title: 'Premium Recruitment',
    description: 'Access elite players and premium features with our secure payment system.'
  },
  {
    icon: Award,
    title: 'Player Profiles',
    description: 'Showcase your achievements with FIFA-style player cards and performance stats.'
  },
  {
    icon: BarChart3,
    title: 'Health Analytics',
    description: 'Track performance metrics and unlock exclusive insurance partnership benefits.'
  }
];

export function Features() {
  return (
    <div className="bg-navy-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive tools and features designed for the modern athlete
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-navy-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}