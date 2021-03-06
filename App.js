import React, {Component} from 'react';
import Main from './src/containers/Main';
import store from './src/store';
import {Provider} from 'react-redux';

class App extends Component {

  render(){
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
  }
}

export default App;
