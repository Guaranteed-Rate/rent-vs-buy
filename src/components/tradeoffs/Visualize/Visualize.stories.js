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
      <div style={{backgroundColor: 'black', color: 'white'}}>
        <Visualize
          home_price={knobs.number('home_price', 100000, {range: true, min: 100000, max: 1000000, step: 10000})}
          lifestyle_value={knobs.number('lifestyle_value', 0, {range: true, min: -2000, max: 2000, step: 100})}
        />
      </div>
    )
  })
