/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { Shell } from './Shell'

storiesOf('Step', module)
  .addDecorator(knobs.withKnobs)
  .add('Shell', () => {
    return (
      <Shell
        next_text={knobs.text('next_text', 'Next')}
        onNext={action('onNext')}
      >
        <div>Body</div>
      </Shell>
    )
  })
