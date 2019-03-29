import React from 'react'
import PropTypes from 'prop-types'

import './InputNumber.scss'
import NumberFormat from 'react-number-format'

export class InputNumber extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prompt: PropTypes.string.isRequired,

    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };

  onValueChange = ({floatValue}) => this.props.onValueChange(floatValue)

  render () {
    return (
      <div styleName='root'>
        <div styleName='prompt'>{this.props.prompt}</div>
        <NumberFormat
          value={this.props.value}
          onValueChange={this.onValueChange}
          thousandSeparator
          prefix={'$'}
          allowNegative={false}
        />
      </div>
    )
  }
}
export default InputNumber
