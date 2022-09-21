import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        {/* {missions} */}
        <Title headline="Missões" />
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
    );
  }
}

export default Missions;
