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
  net_income: 8000,
  debt_payments: 500,
  rent_payment: 1500,
  home_payment: 1500,
}

const rates = {
  mortgage_rate: 0.058, // 30 year FHA APR
  max_home_ratio: 0.31, // FHA
  max_total_debt: 0.43, // FHA

  benefits: 450, // monthly flat

  // rates based on gross income
  service_tax: 0.062 + 0.0145, // eslint-disable-line
  fed_tax: 0.07, // 4th quad - https://www.taxpolicycenter.org
  state_tax: 0.05, // AL State tax

  // rates based on house value per year
  pmi: 0.008, // eslint-disable-line
  property_tax: 0.015, // average
  property_insurance: 3.50 / 1000, // eslint-disable-line
  maintenance_costs: 0.015,
}

// -------
// Selectors
// --------
const BASE = 'calculations'
export {BASE as BASE_SELECTOR_PATH}

const simple_selectors = make_simple_selectors(initial_state, BASE)

const gross_income = createSelector(
  simple_selectors.net_income,
  (net) => {
    const total_tax = rates.service_tax + rates.fed_tax + rates.state_tax
    const pre_tax = net / (1 - total_tax)
    const pre_benefits = pre_tax + rates.benefits
    return Math.round(pre_benefits)
  }
)

const max_home_ratio = createSelector(
  gross_income,
  simple_selectors.debt_payments,
  (gross, other_debts) => {
    const debt_rate = other_debts / gross
    return Math.min(rates.max_home_ratio, rates.max_total_debt - debt_rate)
  }
)
const max_home_payment = createSelector(
  gross_income,
  max_home_ratio,
  (gross, max_rate) => gross * max_rate
)

const months = 12
const NPer = 30 * months // eslint-disable-line
const house_precition = 1000

const home_price = createSelector(
  simple_selectors.home_payment,
  (total) => {
    // solved using https://www.symbolab.com
    const extra = (rates.pmi + rates.property_tax + rates.property_insurance) / months
    const r = rates.mortgage_rate / months
    const one_r = Math.pow((1 + r), -NPer)
    const price = (total - (total * one_r)) / (extra - (extra * one_r) + r)
    return Math.floor(price / house_precition) * house_precition
  }
)

export const selectors = {
  ...simple_selectors,
  max_home_payment,
  home_price,
}

// ------------------------------------
// Reducer and Actions
// ------------------------------------
const action_types_prefix = 'calculations/'

const public_handlers = {
  set_net_income: (state, {payload: net_income}) => state.merge({net_income}),
  set_debt_payments: (state, {payload: debt_payments}) => state.merge({debt_payments}),
  set_rent_payments: (state, {payload: rent_payment}) => {
    state = state.merge({rent_payment})

    const default_payment = Math.min(max_home_payment(state), rent_payment)

    return state.merge({home_payment: default_payment})
  },
  set_home_payment: (state, {payload: home_payment}) => state.merge({home_payment}),
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
