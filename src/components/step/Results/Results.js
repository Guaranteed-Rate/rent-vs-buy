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

    house_value: PropTypes.number.isRequired,
    payment_value: PropTypes.number.isRequired,
    lifestyle_value: PropTypes.number.isRequired,

    onPaymentChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
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
            You can afford a <em>{Amount(this.props.house_value)}</em> home of you own with a monthly
            payment of <em>{Amount(this.props.payment_value)}</em> with a
            &nbsp;<em>{Amount(this.props.lifestyle_value)}</em> lifestyle.
          </p>
        </Explaination>
        <PaymentSlider
          value={this.props.payment_value}
          onChange={this.props.onPaymentChange}
        />
        <Visualize />
      </Shell>
    )
  }
}
export default Results