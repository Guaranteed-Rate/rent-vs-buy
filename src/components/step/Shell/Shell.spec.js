import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  Shell,
} from './Shell'

// import stylesClass from './Shell.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const Shell_specs = describe('<Shell />', () => {
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
      const wrapper = shallow(<Shell {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
