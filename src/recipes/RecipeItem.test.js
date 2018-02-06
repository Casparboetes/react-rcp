import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from '../recipes/RecipeItem'
// import imageIcon from '../images/pescatarian.svg'

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipItem />', () => {
  const container = shallow(<RecipeItem { ...recipe} />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).toHaveText(recipe.title)
  })

  // it('shows a imageIcon when it is pescatarian', () => {
  // expect(container.find('ul > img')).toHaveProp('src', imageIcon)
  // })

})
