import React from 'react'
import PropTypes from 'prop-types'

import './PaymentSlider.scss'
import Slider from 'react-input-slider'

export class PaymentSlider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };

  render () {
    return (
      <Slider
        axis='x'
        x={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}
export default PaymentSlider
