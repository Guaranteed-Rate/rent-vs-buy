import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Home.scss'

import Splash from 'components/step/Splash'
import QuestionNumber from 'components/step/QuestionNumber'
import Results from 'components/step/Results'

import {
  selectors as steps_selectors,
} from 'redux/modules/steps'

export const selectors = grep_matching_from_object({
  current_step: steps_selectors,
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class Home extends React.PureComponent {
  static propTypes = {
    current_step: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string,
      discription: PropTypes.string,
      set_name: PropTypes.string,
    }).isRequired,
  };
  static defaultProps = {
  };

  get_step_component (type) {
    switch (type) {
      case 'splash': return Splash
      case 'question': return QuestionNumber
      case 'results': return Results
      default: return null
    }
  }

  render_step () {
    const current_step = this.props
    const Step = this.get_step_component(current_step.type)

    return (
      <Step
        {...current_step}
        onNext={() => {}}
      />
    )
  }

  render () {
    return (
      <div styleName='root'>
        <Helmet
          title={'Home'}
          meta={[{
            name: 'description',
            content: '',
          }]}
        />
        {this.render_step()}
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(Home)
