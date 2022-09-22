import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="bloco">
        <Title headline="Missões" />
        <div data-testid="missions" className="missoes">
          {/* {missions} */}
          { missions.map((mission, id) => (
            <MissionCard
              key={ id }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
