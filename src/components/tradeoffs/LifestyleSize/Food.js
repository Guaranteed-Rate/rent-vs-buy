/* eslint max-len: 0 */
import React from 'react'

const SvgFood = props => (
  <svg width={47} height={44} viewBox='0 0 47 44' {...props}>
    <defs>
      <path id='food_svg__a' d='M0 0H46.12v43.675H0z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='food_svg__b' fill='#fff'>
        <use xlinkHref='#food_svg__a' />
      </mask>
      <path
        d='M39.354 39.21H30.28a2.653 2.653 0 0 0-1.122-1.963 8.344 8.344 0 0 0 .081-2.717c.603-.189 1.123-.498 1.523-.954 1.262-1.443.984-3.839-.716-6.64.521-.657.83-1.438.83-2.28 0-.292-.118-5.845-7.922-8.009l-.334-3.308h19.348l-2.614 25.87zM27.737 41.53H3.822c-.232 0-.42-.225-.42-.503V39.45c0-.278.188-.504.42-.504h23.914c.233 0 .423.226.423.504v1.579c.001.276-.189.502-.422.502zM4.5 36.801a6.267 6.267 0 0 1-.034-2.126c1.19-.127 2.54-.537 4.003-1.268 1.26-.632 2.068-.27 3.497.484 1.055.556 2.25 1.186 3.816 1.186 1.567 0 2.761-.63 3.816-1.186 1.428-.752 2.234-1.118 3.495-.484 1.478.738 2.824 1.153 4.005 1.28.093.62.114 1.348-.034 2.114H4.5zm-1.277-8.54c.75.362 1.611.584 2.541.584h20.033c.936 0 1.801-.225 2.554-.589 1.236 2.104 1.234 3.408.798 3.907-.568.647-2.362.692-5.097-.676-2.307-1.153-4.052-.234-5.457.506-.914.483-1.777.94-2.813.94-1.036 0-1.9-.457-2.816-.94-1.403-.739-3.146-1.658-5.457-.506-2.729 1.366-4.565 1.308-5.114.675-.466-.537-.352-1.922.828-3.9zm12.56-10.324c12.668 0 12.944 6.455 12.95 6.718 0 1.108-1.345 2.045-2.936 2.045H5.763c-1.59 0-2.934-.937-2.934-2.034.005-.275.282-6.729 12.952-6.729zm4.832-8.983h23.36v2.24H20.615v-2.24zM45.046 6.81H33.074l.787-4.468 4.1.806a1.072 1.072 0 1 0 .414-2.105L33.18.02a1.07 1.07 0 0 0-1.267.89l-1.008 5.9H19.542c-.593 0-1.073.48-1.073 1.072v4.385c0 .593.48 1.072 1.073 1.072h.92l.286 2.825c-1.442-.237-3.086-.372-4.967-.372C.855 15.792.684 24.294.684 24.656c0 .848.312 1.635.84 2.294-1.716 2.782-2.007 5.17-.75 6.618.398.46.93.767 1.55.955a8.332 8.332 0 0 0 .078 2.724 2.67 2.67 0 0 0-1.146 2.202v1.58c0 1.46 1.152 2.646 2.566 2.646h23.914c1.308 0 2.378-1.017 2.536-2.32h10.051c.552 0 1.012-.418 1.067-.966l2.734-27.05h.921c.593 0 1.074-.48 1.074-1.073V7.881c0-.592-.48-1.072-1.073-1.072z'
        fill='currentColor'
        mask='url(#food_svg__b)'
      />
    </g>
  </svg>
)

export default SvgFood
