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
  actions as steps_actions,
} from 'redux/modules/steps'

import {
  selectors as calculations_selectors,
  actions as calculations_actions,
} from 'redux/modules/calculations'

export const selectors = grep_matching_from_object({
  current_step: steps_selectors,

  net_income: calculations_selectors,
  debt_payments: calculations_selectors,
  rent_payment: calculations_selectors,
})

export const actions = grep_matching_from_object({
  next_step: steps_actions,

  set_net_income: calculations_actions,
  set_debt_payments: calculations_actions,
  set_rent_payment: calculations_actions,
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

    next_step: PropTypes.func.isRequired,

    net_income: PropTypes.number.isRequired,
    debt_payments: PropTypes.number.isRequired,
    rent_payment: PropTypes.number.isRequired,
    set_net_income: PropTypes.func.isRequired,
    set_debt_payments: PropTypes.func.isRequired,
    set_rent_payment: PropTypes.func.isRequired,
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
    const {current_step} = this.props
    const Step = this.get_step_component(current_step.type)

    let value = {}
    if (current_step.value_name) {
      value = {
        value: this.props[current_step.value_name],
        onValueChange: this.props['set_' + current_step.value_name],
      }
    }

    return (
      <Step
        {...current_step}
        {...value}
        onNext={this.props.next_step}
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
