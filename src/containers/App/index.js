import { withStyles, ThemeProvider } from '@mui/styles';//viet css in js bang material ui
import Button from '@mui/material/Button';
import styles from "./styles.js"//export default nen import ten bat ky
import { Box } from "@mui/material"
import React, { Component } from 'react'
import Taskboard from '../Taskboard/index.js';
import theme from "./../../commons/Theme";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard/>
    </ThemeProvider>
    );
  }
}



export default withStyles(styles)(App);  