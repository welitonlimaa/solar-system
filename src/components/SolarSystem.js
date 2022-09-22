import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    const arrayClass = [
      'deg0', 'deg45', 'deg90', 'deg135', 'deg180', 'deg225', 'deg270', 'deg315',
      'center'];
    return (
      <div data-testid="solar-system" className="container-planets">
        <Title headline="Planetas" />
        <div className="circle-container">
          { planets.map((planet, id) => (
            <PlanetCard
              key={ id }
              planetName={ planet.name }
              planetImage={ planet.image }
              classe={ arrayClass[id] }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
