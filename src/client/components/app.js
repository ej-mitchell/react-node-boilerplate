import React, {Component} from 'react';
import Stateless from './stateless';
import Stateful from '../containers/stateful'

export default class App extends Component {
    render() {
        return(
          <div>
            <h1>Welcome to React Boilerplate App</h1>
            <Stateless name="Sara" />
            <Stateful />
          </div>
      )
    }
}
