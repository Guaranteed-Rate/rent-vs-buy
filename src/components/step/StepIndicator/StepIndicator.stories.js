/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { StepIndicator } from './StepIndicator'

storiesOf('Step', module)
  .addDecorator(knobs.withKnobs)
  .add('StepIndicator', () => {
    return (
      <StepIndicator
        total={knobs.number('total', 4)}
        current_index={knobs.number('current_index', 1)}
      />
    )
  })
