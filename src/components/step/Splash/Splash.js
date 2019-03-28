import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Splash.scss'

export const selectors = grep_matching_from_object({
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class Splash extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    // from redux

  };
  static defaultProps = {
  };

  render () {
    return (
      <div>loading...</div>
    )
  }
}
export default connect(mapStateToProps, actions)(Splash)
