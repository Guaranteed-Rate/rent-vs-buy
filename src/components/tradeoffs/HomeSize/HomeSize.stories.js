/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { HomeSize } from './HomeSize'

storiesOf('Tradeoffs', module)
  .addDecorator(knobs.withKnobs)
  .add('HomeSize', () => {
    return (
      <div style={{backgroundColor: 'black'}}>
        <HomeSize
          size={knobs.number('size', 2, {range: true, min: 0, max: 3})}
        />
      </div>
    )
  })
