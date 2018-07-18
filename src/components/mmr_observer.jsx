import React from 'react';

import { Labels } from './h1';
import MMRInputs from '../containers/mmr_inputs';

export const mmrMap = { 0: 'Herald', 840: 'Guardian', 1680: 'Crusader', 2520: 'Archon', 3360: 'Legend', 4200: 'Ancient',
                        5040: 'Divine' };

const MMRObserver = (props) => {
  return (
    <div>
      <Labels.TopLabelH1 title = 'MMR/Rank converter' />
      <MMRInputs />
    </div>
  )
}

export default MMRObserver;
