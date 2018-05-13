import App from '../components/app'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App/>)

        expect(wrapper.find('h1').text()).toBe('Welcome to React Boilerplate App')
        expect(wrapper).toMatchSnapshot()

    })
})
