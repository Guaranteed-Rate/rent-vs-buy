import React from 'react'
import PropTypes from 'prop-types'

import './LifestyleSize.scss'
import Food from './Food'
import Games from './Games'
import Shop from './Shop'
import Vacation from './Vacation'

const order_of_decrease = [
  Vacation,
  Games,
  Shop,
  Food,
]

const order_of_increase = [
  Food,
  Shop,
  Games,
  Vacation,
]

export class LifestyleSize extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.number.isRequired,
  };
  static defaultProps = {
  };

  render_style = (value, index) => {
    const {size} = this.props
    const order = size < 0 ? order_of_decrease : order_of_increase
    const Lifestyle = order[index]

    return (
      <div styleName='place' key={index} >
        {(Math.abs(size) >= (index + 1)) && <Lifestyle />}
      </div>
    )
  }

  render () { // eslint-disable-line
    const {size} = this.props
    return (
      <div styleName={size < 0 ? 'decrease' : 'increase'}>
        {order_of_increase.map(this.render_style)}
      </div>
    )
  }
}
export default LifestyleSize
