import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Results.scss'
import Shell from '../Shell'
import Explaination from 'components/conversation/Explaination'
import PaymentSlider from 'components/tradeoffs/PaymentSlider'
import Visualize from 'components/tradeoffs/Visualize'
import NumberFormat from 'react-number-format'

import {
  selectors as calculations_selectors,
  actions as calculations_actions,
} from 'redux/modules/calculations'

export const selectors = grep_matching_from_object({
  home_payment: calculations_selectors,
  max_home_payment: calculations_selectors,
  home_price: calculations_selectors,
  lifestyle_value: calculations_selectors,
})

export const actions = grep_matching_from_object({
  set_home_payment: calculations_actions,
})

const mapStateToProps = createStructuredSelector(selectors)

const Amount = (value) => (
  <NumberFormat
    value={value}
    thousandSeparator
    prefix={'$'}
    displayType='text'
  />
)

export class Results extends React.PureComponent {
  static propTypes = {
    onNext: PropTypes.func.isRequired,

    // from Redux
    home_payment: PropTypes.number.isRequired,
    max_home_payment: PropTypes.number.isRequired,
    home_price: PropTypes.number.isRequired,

    lifestyle_value: PropTypes.number.isRequired,

    set_home_payment: PropTypes.func.isRequired,
  };
  static defaultProps = {
    lifestyle_value: 0,
  };

  render () {
    return (
      <Shell
        onNext={this.props.onNext}
        next_text='Take the Next Step'
      >
        <Explaination>
          <h1 styleName='h1'>Your Results</h1>
          <p styleName='p'>
            You can afford a <em>{Amount(this.props.home_price)}</em> home of you own with a monthly
            payment of <em>{Amount(this.props.home_payment)}</em> with a
            &nbsp;<em>{Amount(this.props.lifestyle_value)}</em> lifestyle change.
          </p>
        </Explaination>
        <PaymentSlider
          value={this.props.home_payment}
          max={this.props.max_home_payment}
          onChange={this.props.set_home_payment}
        />
        <Visualize
          home_price={this.props.home_price}
          lifestyle_value={this.props.lifestyle_value}
        />
      </Shell>
    )
  }
}
export default connect(mapStateToProps, actions)(Results)
