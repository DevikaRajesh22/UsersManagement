// Home.js

import React from 'react';
import './Home.css';
import Card from './Card';

const Home = () => {
  return (
    <div className="card-container">
      <Card
        imageSrc="/assets/images/Earth.jpeg"
        description="The blue planet is a diverse and life-sustaining orb in our solar system."
        title="Earth"
      />
      <Card
        imageSrc="/assets/images/Mars.jpeg"
        description="The red planet beckons with a rusty landscape and intriguing mysteries of its ancient past."
        title="Mars"
      />
      <Card
        imageSrc="/assets/images/Mercury.jpeg"
        description="The scorching innermost planet dances around the Sun with its rocky and desolate surface."
        title="Mercury"
      />
      <Card
        imageSrc="/assets/images/Neptune.jpeg"
        description="The frigid ice giant spins in the outer realms with icy winds and deep-blue mysteries."
        title="Neptune"
      />
      <Card
        imageSrc="/assets/images/Saturn.jpeg"
        description="The ringed beauty dazzles with its stunning rings and gas giant presence in the celestial tapestry."
        title="Saturn"
      />
      <Card
        imageSrc="/assets/images/Uranus.jpeg"
        description="The enigmatic ice giant spins on its side in the distant reaches of our solar system, cloaked in icy blue hues."
        title="Uranus"
      />
    </div>
  );
}

export default Home;
