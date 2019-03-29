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
  };
  static defaultProps = {
  };

  render () {
    return (
      <div styleName='root'>
        <HomeSize styleName='images' size={2} />
        <div styleName='vs'>VS.</div>
        <LifestyleSize styleName='images' size={4} />
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(Visualize)
