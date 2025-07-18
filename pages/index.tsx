import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedTypes from '../components/FeaturedTypes';
import Listings from '../components/Listings';
import Stats from '../components/Stats';
import ExploreLocations from '../components/ExploreLocations';
import Agents from '../components/Agents';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedTypes />
      <Listings />
      <Stats />
      <ExploreLocations />
      <Agents />
      <Pricing />
      <ContactCTA />
      <Footer />
    </div>
  );
} 