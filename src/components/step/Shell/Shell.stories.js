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
        <div> BLorem ipsumtus accumsan congue dictum ecerats facilisis magna turpis et lorem.Integer ipsum urna, pretium id accumsan a, ornare nec ligula.Nunc molestie consectetur tincidunt.Morbi euismod dui at consectetur auctor.Cras vestibulum sapien et eros accumsan, eget sollicitudin sem sodales.Aliquam pretium ornare neque eget aliquam.Morbi mauris urna, pulvinar sit amet volutpat et, laoreet nec arcu.Cras consequat ipsum urna, in placerat orci pulvinar ut.Morbi in eros ac ligula feugiat viverra.Vestibulum ornare sit amet libero eget feugiat. </div>
      </Shell>
    )
  })
