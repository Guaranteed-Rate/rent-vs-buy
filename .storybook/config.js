import { configure } from '@storybook/react'

import '../src/styles/core.scss'

// automatically import all files ending in *.stories.js
function loadStories () {
  const req = require.context('../src/components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
