import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'
import sinon from 'sinon'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike} />)

  it('is wrapped in a div with class "like"', () => {
    expect(button).toHaveTagName('div')
    expect(button).toHaveClassName('like')
  })

  describe('clicking the button', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })
})

// MOVED things around so this here doesn't make sense anymore.

// describe('<LikeButton />', () => {
//   const toggleLike = sinon.spy()
//   const button = shallow(<LikeButton liked={false} onchange={toggleLike} />)
//
//   it('is wrapped in a div with a class "like"', () => {
//     expect(button).toHaveTagName('div')
//     expect(button).toHaveClassName('like')
//   })
//
//   it('has an intial state for "liked", that is "false"', () => {
//     expect(button).toHaveState('liked', false)
//   })
//
//   describe('clicking the button', () => {
//     it('calls "onChange"', () => {
//       button.find('button').simulate('click')
//       expect(toggleLike.callCount).toBe(1)
//     })
//   })
//
//   describe('click it', () => {
//     it('toggles the "liked" state', () => {
//
//       expect(button).toHaveState('liked', false)
//
//       button.find('button').simulate('click')
//       expect(button).toHaveState('liked', true)
//
//       button.find('button').simulate('click')
//       expect(button).toHaveState('liked', false)
//     })
//   })
// })
