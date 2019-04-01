import Immutable from 'seamless-immutable'
import { createSelector } from 'reselect'
import {
  make_simple_selectors,
  make_reducer_n_actions,
} from 'redux_helpers'

// -------
// Initial State
// --------

const initial_state = {
  current_index: 0,
  steps: [
    {
      type: 'splash',
      backgroundImage: require('images/BG1.jpg'),
    },
    {
      type: 'question',
      title: 'Net Income',
      discription: 'Enter your monthly household earnings. This can be multiple incomes if needed.',
      value_name: 'net_income',
      backgroundImage: require('images/BG2.jpg'),
    },
    {
      type: 'question',
      title: 'Debt Payments',
      discription: 'Enter your monthly debt payments. This includes car payment, credit cards any student loans. Do not include utilities.', // eslint-disable-line
      value_name: 'debt_payments',
      backgroundImage: require('images/BG3.jpg'),
    },
    {
      type: 'question',
      title: 'Rent Amount',
      discription: 'Enter your monthly rental payment for your current place.',
      value_name: 'rent_payment',
      backgroundImage: require('images/BG4.jpg'),
    },
    {
      type: 'results',
      backgroundImage: require('images/BG6.jpg'),
    },
  ],
}

// -------
// Selectors
// --------
const BASE = 'steps'
export {BASE as BASE_SELECTOR_PATH}

const simple_selectors = make_simple_selectors(initial_state, BASE)

const total = createSelector(
  simple_selectors.steps,
  ({length}) => length
)

const current_step = createSelector(
  simple_selectors.steps,
  simple_selectors.current_index,
  (steps, index) => steps[index]
)

export const selectors = {
  ...simple_selectors,
  total,
  current_step,
}

// ------------------------------------
// Reducer and Actions
// ------------------------------------
const action_types_prefix = 'steps/'

const public_handlers = {
  next_step: (state) => {
    if (state.current_index + 1 >= state.steps.length) return state
    return state.merge({
      current_index: state.current_index + 1,
    })
  },
}

const private_handlers = {
}

export const {reducer, private_actions, actions, ACTION_TYPES} = make_reducer_n_actions({
  public_handlers,
  private_handlers,
  action_types_prefix,
  initial_state,
  Immutable,
})
export default reducer
