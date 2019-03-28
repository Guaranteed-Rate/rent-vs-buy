import React from 'react'
import PropTypes from 'prop-types'

import './InputNumber.scss'
import NumberFormat from 'react-number-format'

export class InputNumber extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };

  render () {
    return (
      <NumberFormat
        value={this.props.value}
        thousandSeparator
        prefix={'$'}
      />
    )
  }
}
export default InputNumber
