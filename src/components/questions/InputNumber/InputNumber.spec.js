import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  InputNumber,
} from './InputNumber'

// import stylesClass from './InputNumber.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const InputNumber_specs = describe('<InputNumber />', () => {
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
      const wrapper = shallow(<InputNumber {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
