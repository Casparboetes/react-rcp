import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('with a different content prop', () => {
  const title = shallow(<Title content="Something Completely Different!" />)

  it('renders a different title text', () => {
    expect(title).toHaveText('Something Completely Different!')
  })
})
