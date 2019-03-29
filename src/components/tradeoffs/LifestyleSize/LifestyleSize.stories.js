/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { LifestyleSize } from './LifestyleSize'

storiesOf('Tradeoffs', module)
  .addDecorator(knobs.withKnobs)
  .add('LifestyleSize', () => {
    return (
      <div style={{backgroundColor: 'black'}}>
        <LifestyleSize
          size={knobs.number('size', 0, {range: true, min: -4, max: 4, step: 1})}
        />
      </div>
    )
  })
