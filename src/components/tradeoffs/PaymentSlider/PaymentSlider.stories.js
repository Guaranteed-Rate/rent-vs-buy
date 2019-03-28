/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { PaymentSlider } from './PaymentSlider'

storiesOf('Tradeoffs', module)
  .addDecorator(knobs.withKnobs)
  .add('PaymentSlider', () => {
    return (
      <PaymentSlider
        value={knobs.number('value', '75')}
        onChange={action('onChange')}
      />
    )
  })
