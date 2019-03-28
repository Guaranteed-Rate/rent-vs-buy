import React from 'react'
import PropTypes from 'prop-types'

import './NetIncome.scss'
import Shell from '../Shell'
import Explaination from 'components/conversation/Explaination'
import InputNumber from 'components/questions/InputNumber'

export class NetIncome extends React.PureComponent {
  static propTypes = {
    onNext: PropTypes.func.isRequired,
    next_text: PropTypes.string.isRequired,

    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };

  render () {
    return (
      <Shell
        onNext={this.props.onNext}
        next_text={this.props.next_text}
      >
        <Explaination>
          <h1>Net Income</h1>
          <p>
            Enter your monthly household earnings. This can be multiple incomes if needed.
          </p>
        </Explaination>
        <InputNumber
          value={this.props.value}
          onValueChange={this.props.onValueChange}
        />
      </Shell>
    )
  }
}
export default NetIncome
