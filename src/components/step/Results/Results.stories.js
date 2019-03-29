/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { Results } from './Results'

storiesOf('Step', module)
  .addDecorator(knobs.withKnobs)
  .add('Results', () => {
    return (
      <Results
        home_price={knobs.number('home_price', 240000)}
        home_payment={knobs.number('home_payment', 2000)}
        lifestyle_value={knobs.number('lifestyle_value', -700)}

        onNext={action('onNext')}
        set_home_payment={action('set_home_payment')}
      />
    )
  })
