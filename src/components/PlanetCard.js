import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, classe } = this.props;
    return (
      <div data-testid="planet-card" className={ classe }>
        <p data-testid="planet-name">{planetName}</p>
        <img className="imagem" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
};

export default PlanetCard;
