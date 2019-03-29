import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  HomeSize,
} from './HomeSize'

// import stylesClass from './HomeSize.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const HomeSize_specs = describe('<HomeSize />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    require('react-proptype-error-catcher')(sandbox)

    props = {
      size: 0,
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('general', () => {
    it('with normal props it should render without errors', () => {
      const wrapper = shallow(<HomeSize {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
