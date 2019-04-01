import React from 'react'
import PropTypes from 'prop-types'

import './PaymentSlider.scss'
import Slider from 'react-input-slider'

export class PaymentSlider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
    min: 500,
  };

  onChange = ({ x }) => this.props.onChange(x)

  render () {
    return (
      <Slider styleName='slider'
        axis='x'
        xmin={this.props.min}
        xmax={this.props.max}
        xstep={100}
        x={this.props.value}
        onChange={this.onChange}
      />
    )
  }
}
export default PaymentSlider
