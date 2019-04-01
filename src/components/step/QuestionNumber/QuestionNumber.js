import React from 'react'
import PropTypes from 'prop-types'

import './QuestionNumber.scss'
import Shell from '../Shell'
import Explaination from 'components/conversation/Explaination'
import InputNumber from 'components/questions/InputNumber'

export class QuestionNumber extends React.PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,

    onNext: PropTypes.func.isRequired,
    next_text: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,

    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
    next_text: 'next',
    prompt: 'total amount',
  };

  render () {
    return (
      <Shell
        onNext={this.props.onNext}
        next_text={this.props.next_text}
        backgroundImage={this.props.backgroundImage}
      >
        <Explaination styleName='text'>
          <h1>{this.props.title}</h1>
          <p>
            {this.props.discription}
          </p>
        </Explaination>
        <InputNumber
          prompt='Total Amount'
          value={this.props.value}
          onValueChange={this.props.onValueChange}
        />
      </Shell>
    )
  }
}
export default QuestionNumber
