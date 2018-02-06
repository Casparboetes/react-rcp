import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton />)

  it('is wrapped in a div with a class "like"', () => {
    expect(button).toHaveTagName('div')
    expect(button).toHaveClassName('like')
  })

  it('has an intial state for "liked", that is "false"', () => {
    expect(button).toHaveState('liked', false)
  })

  describe('click it', () => {
    it('toggles the "liked" state', () => {
      
      expect(button).toHaveState('liked', false)

      button.find('button').simulate('click')
      expect(button).toHaveState('liked', true)

      button.find('button').simulate('click')
      expect(button).toHaveState('liked', false)
    })
  })
})
