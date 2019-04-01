import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './HomeSize.scss'

const image_count = 4
export class HomeSize extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(_.times(image_count)).isRequired,
  };
  static defaultProps = {
  };

  render () {
    const image = this.props.size + 1
    return (
      <div styleName='root' className={this.props.className}>
        <img
          src={require(`./home${image}.svg`)}
        />
      </div>
    )
  }
}
export default HomeSize
