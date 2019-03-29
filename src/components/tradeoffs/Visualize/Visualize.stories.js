/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { Visualize } from './Visualize'

storiesOf('Tradeoffs', module)
  .addDecorator(knobs.withKnobs)
  .add('Visualize', () => {
    return (
      <Visualize
        home_size={knobs.number('home_size', 0.5, {range: true, min: 0, max: 1, step: 0.1})}
        lifestyle_size={knobs.number('lifestyle_size', 100)}
      />
    )
  })
