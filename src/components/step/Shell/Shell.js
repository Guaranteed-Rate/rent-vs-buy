import React from 'react'
import PropTypes from 'prop-types'

import './Shell.scss'

export class Shell extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    next_text: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,

    children: PropTypes.node.isRequired,
  };
  static defaultProps = {
  };

  render () {
    return (
      <div styleName='root'>
        <div styleName='title'>Lifestyle Calculator</div>
        {this.props.children}
        <div styleName='spacer' />
        <div>
          <button styleName='button' onClick={this.props.onNext}>{this.props.next_text}</button>
        </div>
      </div>
    )
  }
}
export default Shell
