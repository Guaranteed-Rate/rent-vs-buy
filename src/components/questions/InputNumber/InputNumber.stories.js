/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { InputNumber } from './InputNumber'

storiesOf('Questions', module)
  .addDecorator(knobs.withKnobs)
  .add('InputNumber', () => {
    return (
      <InputNumber
        prompt={knobs.text('prompt', 'total amount')}
        value={knobs.number('value', '1225')}
        onValueChange={action('onValueChange')}
      />
    )
  })
