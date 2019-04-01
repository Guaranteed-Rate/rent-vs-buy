import React from 'react'
import PropTypes from 'prop-types'

import './Shell.scss'
import StepIndicator from '../StepIndicator'

export class Shell extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    backgroundImage: PropTypes.string,

    next_text: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,
    hide_indicator: PropTypes.bool,

    children: PropTypes.node.isRequired,
  };
  static defaultProps = {
    hide_indicator: false,
  };

  render () {
    return (
      <div styleName='root' style={{backgroundImage: `url(${this.props.backgroundImage})`}} >
        <div styleName='title'>Lifestyle Calculator</div>
        {this.props.children}
        <div styleName='spacer' />
        <div>
          <button styleName='button' onClick={this.props.onNext}>{this.props.next_text}</button>
        </div>
        {this.props.hide_indicator || <StepIndicator />}
      </div>
    )
  }
}
export default Shell
