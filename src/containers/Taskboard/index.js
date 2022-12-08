import { withStyles } from '@mui/styles'
import React, { Component } from 'react'
import styles  from './style';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { STATUSES } from '../../constants';
import TaskList from "./../../components/TaskList"

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friend",
    status: 2
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 1
  },
]
class TaskBoard extends Component{
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(task=>task.status === status.value);
          return <TaskList key={status.value} tasks={taskFiltered} status={status}/>
        })}
      </Grid>
    )
    return xhtml;
  }



  render() {
    const {classes} = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className="classes.button">
          <AddIcon/> Them moi cong viec
        </Button>
        {this.renderBoard()}
      </div>
    )
  }
}

export default withStyles(styles)(TaskBoard);
