import React, { Component } from 'react';
import { UploadForm } from './components/UploadForm.js'

import './App.css';

class App extends Component {

  render() {
    return (
        <div className='App'>
          <UploadForm />
        </div>
    );
  }
}

export default App;