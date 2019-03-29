import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './StepIndicator.scss'

export const selectors = grep_matching_from_object({
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class StepIndicator extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,

    // from redux
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
  };
  static defaultProps = {
  };

  render_indicator = (value, index) => {
    return <div key={index} styleName='indicator' />
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
