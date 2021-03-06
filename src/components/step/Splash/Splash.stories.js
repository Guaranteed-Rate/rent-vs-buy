/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { Splash } from './Splash'

storiesOf('Step', module)
  .addDecorator(knobs.withKnobs)
  .add('Splash', () => {
    return (
      <Splash
        onNext={action('onNext')}
      />
    )
  })
