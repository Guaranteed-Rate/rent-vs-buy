import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  Explaination,
} from './Explaination'

// import stylesClass from './Explaination.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const Explaination_specs = describe('<Explaination />', () => {
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
      const wrapper = shallow(<Explaination {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
