import Stateless from '../components/stateless'
import React from 'react'
import {shallow} from 'enzyme'

describe('Stateless', () => {
    test('should match snapshot', () => {
      const wrapper = shallow(<Stateless name="Epsilon"/>)

      expect(wrapper.find('h4').text()).toBe('What a boring old stateless component, I am!')
      expect(wrapper.find('p').first().text()).toEqual('But at least I can say your name, Epsilon')
      expect(wrapper).toMatchSnapshot()

    })
  })
