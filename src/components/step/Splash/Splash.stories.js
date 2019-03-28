/* eslint no-magic-numbers: 0 */
/* eslint max-len: 0 */
import React from 'react'
import {knob, stories} from 'helpers/storybook_helpers'
// import _ from 'lodash'
// import faker from 'faker'
// import dayjs from 'dayjs'

stories('Step', module)
  .spec_and_info(
    'Splash',
    {
      spec: require('./Splash.spec').Splash_specs,
      Component: require('./Splash').Splash,
      render: (Splash) => {
        return () => (
          <Splash
            text={knob.text('text', '')}
          />
        )
      },
    }
  )
