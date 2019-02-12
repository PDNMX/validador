import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { UploadForm } from './components/UploadForm.js';
// import { Header } from './components/Header.js';
import PDNAppBar from './components/PDNAppBar';

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
                <TableCell>Clave</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.dataPath}</TableCell>
                  <TableCell className='txtError'>{row.message}</TableCell>
                  <TableCell>{row.keyword}</TableCell>
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
          <PDNAppBar/>
          <center>
          <Grid container spacing={0} justify="center" className="contenedor">
              <Grid item xs={12}>
              <h5 id='mainTxt'>En está página puedes validar un archivo JSON respecto al esquema de datos del estándar de Declaraciones</h5>
                <UploadForm onResults={this._handleResults}/>
                <br/>
                {this.state.usedForm
                  ? this._renderFirst()
                  : <br/>
                }
              </Grid>
          </Grid>
          </center>
          <br/>
        </div>
    );
  }
}

export default App;
