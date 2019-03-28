import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  NetIncome,
} from './NetIncome'

// import stylesClass from './NetIncome.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const NetIncome_specs = describe('<NetIncome />', () => {
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
      const wrapper = shallow(<NetIncome {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
