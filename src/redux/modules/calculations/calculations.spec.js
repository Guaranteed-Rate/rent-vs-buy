import reducer, {
  actions,
  private_actions,
  selectors,
} from './calculations'
// import _ from 'lodash'

describe('calculations redux', () => {
  let sandbox
  let state
  let dispatch
  let getState

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    dispatch = sandbox.stub()
    state = reducer(undefined, {})
    getState = () => state
  })
  afterEach(() => {
    sandbox.restore()
  })

  it('should have this initial state', () => {
    state = reducer(undefined, {})
    expect(selectors.something(state)).to.exist
  })
  describe('private_actions', () => {
    it('should have ', () => {
      state = reducer(undefined, private_actions.something())
    })
  })
  describe('public actions', () => {
    it('', () => {
      actions.something()(dispatch, getState)
    })
  })
})
