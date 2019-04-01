/* eslint no-magic-numbers: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Visualize.scss'
import HomeSize from '../HomeSize'
import LifestyleSize from '../LifestyleSize'

export const selectors = grep_matching_from_object({
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class Visualize extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    // from redux
    home_price: PropTypes.number.isRequired,
    lifestyle_value: PropTypes.number.isRequired,
    price_per_square_foot: PropTypes.number.isRequired,
  };
  static defaultProps = {
    price_per_square_foot: 115,
  };

  get_lifestyle_size = (value) => {
    if (value === 0) {
      return 0
    }
    if (Math.abs(value) <= 100) {
      return 1 * Math.sign(value)
    }
    if (Math.abs(value) <= 200) {
      return 2 * Math.sign(value)
    }
    if (Math.abs(value) <= 400) {
      return 3 * Math.sign(value)
    }
    return 4 * Math.sign(value)
  }

  render () {
    const sq_feet = this.props.home_price / this.props.price_per_square_foot
    const base_house_size = 1000
    const max_house_size = 3
    const house_size = Math.min(Math.floor(sq_feet / base_house_size), max_house_size)

    return (
      <div styleName='root'>
        <HomeSize styleName='house' size={house_size} />
        <div styleName='vs'>VS.</div>
        <LifestyleSize styleName='life' size={this.get_lifestyle_size(this.props.lifestyle_value)} />
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(Visualize)
