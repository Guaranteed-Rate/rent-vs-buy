import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './StepIndicator.scss'

import {
  selectors as steps_selectors,
} from 'redux/modules/steps'

export const selectors = grep_matching_from_object({
  current_index: steps_selectors,
  total: steps_selectors,
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class StepIndicator extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    // from redux
    total: PropTypes.number.isRequired,
    current_index: PropTypes.number.isRequired,
  };
  static defaultProps = {
  };

  render_indicator = (value, index) => {
    return <div key={index} styleName={'indicator' + (this.props.current_index === index ? ' current' : '')} />
  }

  render () {
    return (
      <div styleName='root' className={this.props.className} >
        {Array(this.props.total).fill(0).map(this.render_indicator)}
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(StepIndicator)
