import React from 'react';
import { Play, Users, Calendar, Trophy } from 'lucide-react';
import { Button } from './ui/Button';
import { PlayerCard} from './PlayerCard'

export function Hero() {
  return (
    <div className="relative min-h-screen bg-navy-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
          alt="Sports Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Connect. Play.
              <span className="text-emerald-500"> Champion.</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Join the ultimate sports community where athletes meet, teams form, and champions rise.
              Your next game-changing connection is just a click away.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Get Started
                <Play className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Teams
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-2xl font-bold text-white">10K+</h4>
                <p className="text-gray-400">Active Players</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-2xl font-bold text-white">5K+</h4>
                <p className="text-gray-400">Monthly Games</p>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-2xl font-bold text-white">500+</h4>
                <p className="text-gray-400">Active Teams</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 animate-float-slow">
                <PlayerCard
                  name="Alex Thompson"
                  position="Forward"
                  rating={92}
                  sports={['Soccer', 'Basketball']}
                  achievements={15}
                  imageUrl="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?auto=format&fit=crop&q=80"
                />
              </div>
              <div className="absolute -bottom-20 -right-20 animate-float">
                <PlayerCard
                  name="Sarah Chen"
                  position="Point Guard"
                  rating={88}
                  sports={['Basketball', 'Volleyball']}
                  achievements={12}
                  imageUrl="https://images.unsplash.com/photo-1539655442433-f7d7d867884f?auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}