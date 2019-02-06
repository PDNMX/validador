import React, { Component } from 'react';
import { UploadForm } from './components/UploadForm.js'

import './App.css';

class App extends Component {
  state = { usedForm: false, results: true }

  _handleResults = (results) => {
    this.setState({ results, usedForm: true })
    // console.log(results)
  }
  _renderListErrors () {
    const { results } = this.state
    return results.map((swaggerError, i) => {
      return <p key={i}>{swaggerError.message}</p>
    })
  }

  _renderFirst= () => {
    return this.state.results === true
      ? <p> VALIDO </p>
      : this._renderListErrors()
  }
  render() {
    return (
        <div className='App'>
          <UploadForm onResults={this._handleResults}/>
          {this.state.usedForm
            ? this._renderFirst()
            : <small> Debes cargar un archivo </small>
          }
        </div>
    );
  }
}

export default App;
