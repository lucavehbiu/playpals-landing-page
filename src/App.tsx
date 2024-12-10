import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

export default function App() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Hero />
      <Features />
    </main>
  );
}