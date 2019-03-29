import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { grep_matching_from_object } from 'helpers/redux_helpers'

import './Home.scss'

import Results from 'components/step/Results'

export const selectors = grep_matching_from_object({
})

export const actions = grep_matching_from_object({
})

const mapStateToProps = createStructuredSelector(selectors)

export class Home extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
  };

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
        <Results
          onNext={() => {}}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps, actions)(Home)
