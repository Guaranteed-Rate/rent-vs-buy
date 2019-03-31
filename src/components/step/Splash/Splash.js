import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Splash.scss'
import Shell from '../Shell'
import Explaination from 'components/conversation/Explaination'

export const selectors = grep_matching_from_object({
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class Splash extends React.PureComponent {
  static propTypes = {
    onNext: PropTypes.func.isRequired,

    // from redux
  };
  static defaultProps = {
  };

  render () {
    return (
      <Shell
        onNext={this.props.onNext}
        next_text="Let's Get Started"
      >
        <Explaination>
          <h1 styleName='h1'>Rent Vs. Buy<br /><em>Simplified!</em></h1>
          <p styleName='p'>
            Answer a few easy questions about your current financial situation,
            get personalized tips and decide what’s better for you.
          </p>
        </Explaination>
        <div styleName='powered-by'>Powered By</div>
      </Shell>
    )
  }
}
export default connect(mapStateToProps, actions)(Splash)
