import React from 'react';

import MMRObjserver from '../components/mmr_observer';
import ChangeAlert from '../containers/alert_container';
import DogListContainer from '../containers/dog_list_container';

const App = () => (
  <div>
    <MMRObjserver />
    <ChangeAlert />
    <DogListContainer />
  </div>
)

export default App;
