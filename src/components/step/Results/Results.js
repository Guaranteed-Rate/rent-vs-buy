import React from 'react'
import PropTypes from 'prop-types'

import './Results.scss'
import Shell from '../Shell'
import Explaination from 'components/conversation/Explaination'
import PaymentSlider from 'components/tradeoffs/PaymentSlider'
import Visualize from 'components/tradeoffs/Visualize'
import NumberFormat from 'react-number-format'

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

    home_price: PropTypes.number.isRequired,
    home_payment: PropTypes.number.isRequired,
    lifestyle_value: PropTypes.number.isRequired,

    onPaymentChange: PropTypes.func.isRequired,
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
          <h1>Your Results</h1>
          <p>
            You can afford a <em>{Amount(this.props.home_price)}</em> home of you own with a monthly
            payment of <em>{Amount(this.props.home_payment)}</em> with a
            &nbsp;<em>{Amount(this.props.lifestyle_value)}</em> lifestyle.
          </p>
        </Explaination>
        <PaymentSlider
          value={this.props.home_payment}
          onChange={this.props.onPaymentChange}
        />
        <Visualize />
      </Shell>
    )
  }
}
export default Results
