import React from 'react';
import { Star, Trophy, Activity } from 'lucide-react';

interface PlayerCardProps {
  name: string;
  position: string;
  rating: number;
  sports: string[];
  achievements: number;
  imageUrl: string;
}

export function PlayerCard({ name, position, rating, sports, achievements, imageUrl }: PlayerCardProps) {
  return (
    <div className="relative group perspective-1000">
      <div className="w-72 rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-10">
        <div className="relative bg-gradient-to-br from-navy-900 to-emerald-900 p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="h-48 rounded-lg overflow-hidden mb-4">
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-gold-400" fill="currentColor" />
                  <span className="text-white font-bold">{rating}</span>
                </div>
              </div>
              
              <p className="text-emerald-300 font-medium">{position}</p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-gold-400" />
                  <span className="text-white text-sm">{achievements}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-white text-sm">{sports.length} Sports</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {sports.map((sport) => (
                  <span
                    key={sport}
                    className="px-2 py-1 text-xs rounded-full bg-navy-800 text-emerald-300"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}