import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission_card">
        <p data-testid="mission-name"><strong>{name}</strong></p>
        <p data-testid="mission-destination"><strong>{destination}</strong></p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
