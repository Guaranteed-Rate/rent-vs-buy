/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import * as knobs from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

import { QuestionNumber } from './QuestionNumber'

storiesOf('Step', module)
  .addDecorator(knobs.withKnobs)
  .add('QuestionNumber', () => {
    return (
      <QuestionNumber
        onNext={action('onNext')}
        next_text={knobs.text('next_text', 'Next')}

        title={knobs.text('title', 'Net Income')}
        discription={knobs.text('discription', 'Enter your montly household earnings.')}
        prompt={knobs.text('prompt', 'total amount')}

        value={knobs.number('value', '1225')}
        onValueChange={action('onValueChange')}
      />
    )
  })
