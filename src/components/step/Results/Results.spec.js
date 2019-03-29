import React from 'react'
import {
  shallow,
} from 'enzyme'
// import _ from 'lodash'

import {
  Results,
} from './Results'

// import stylesClass from './Results.scss'
// const styles = _.mapValues(stylesClass, (raw) => '.' + raw)

export const Results_specs = describe('<Results />', () => {
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
      const wrapper = shallow(<Results {...props} />)
      expect(wrapper).to.exist
    })
  })
  describe('behaviors', () => {
  })
})
