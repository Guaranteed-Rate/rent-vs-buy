import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  LifestyleSize,
} from './LifestyleSize'

// import stylesClass from './LifestyleSize.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const LifestyleSize_specs = describe('<LifestyleSize />', () => {
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
      const wrapper = shallow(<LifestyleSize {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
