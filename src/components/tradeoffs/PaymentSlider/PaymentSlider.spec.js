import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  PaymentSlider,
} from './PaymentSlider'

// import stylesClass from './PaymentSlider.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const PaymentSlider_specs = describe('<PaymentSlider />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    require('react-proptype-error-catcher')(sandbox)

    props = {
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('general', () => {
    it('with normal props it should render without errors', () => {
      const wrapper = shallow(<PaymentSlider {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
