import React from 'react'
import PropTypes from 'prop-types'

import './Explaination.scss'

export class Explaination extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    children: PropTypes.node.isRequired,
  };
  static defaultProps = {
  };

  render () {
    return (
      <div styleName='root'>
        {this.props.children}
      </div>
    )
  }
}
export default Explaination
