/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
import faker from 'faker'
// import dayjs from 'dayjs'

import { Explaination } from './Explaination'

storiesOf('Conversation', module)
  .addDecorator(knobs.withKnobs)
  .add('Explaination', () => {
    return (
      <Explaination>
        <h1>{knobs.text('header', 'Rent Vs. Buy')}<em>Bold</em></h1>
        <p><em>Bold Text</em>{faker.lorem.paragraph()}</p>
      </Explaination>
    )
  })
