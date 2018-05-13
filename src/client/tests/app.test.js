import App from '../components/app'
import Stateless from '../components/stateless'
import Stateful from '../containers/stateful'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
    test('should match snapshot', () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.find('h1').text()).toBe('Welcome to React Boilerplate App')
      expect(wrapper).toMatchSnapshot()

    })

    test('should contain stateless component', () => {
      const wrapper = shallow(<App/>)
      expect(wrapper.find(Stateless).exists())
    })

    test('should contain stateful component', () => {
      const wrapper = shallow(<App/>)
      expect(wrapper.find(Stateful).exists())
    })
})
