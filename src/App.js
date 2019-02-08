import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UploadForm } from './components/UploadForm.js'

import './App.css';

class App extends Component {
  state = { usedForm: false, results: true }

  _handleResults = (results) => {
    this.setState({ results, usedForm: true })
    // console.log(results)
  }
  _renderListErrors () {
    const { results } = this.state;
    // return results.map((swaggerError, i) => {
    //   return <p key={i}>{swaggerError.message}</p>
    // })

    return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ruta</TableCell>
                <TableCell>Error</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.dataPath}</TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
  }

  _renderFirst= () => {
    return this.state.results === true
      ? <p> El archivo cargado se ha comprobado satisfactoriamente </p>
      : this._renderListErrors()
  }
  render() {
    return (
        <div className='App'>
          <UploadForm onResults={this._handleResults}/>
          <br/>
          {this.state.usedForm
            ? this._renderFirst()
            : <small> Debes cargar un archivo </small>
          }
        </div>
    );
  }
}

export default App;
