import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'

addParameters({
  viewport: {
    defaultViewport: 'iphone6',
  },
})

import { Provider } from 'react-redux'
const store = require('store/getStore').default()

addDecorator((getStory) => (
  <Provider store={store}>
    {getStory()}
  </Provider>
))

import '../src/styles/core.scss'

// automatically import all files ending in *.stories.js
function loadStories () {
  const req = require.context('../src/components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
