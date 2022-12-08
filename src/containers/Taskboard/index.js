import { withStyles } from '@mui/styles'
import React, { Component } from 'react'
import styles  from './style';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import { STATUSES } from '../../constants';

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
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(task=>task.status === status.value);
          return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={1} mb={1}>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {taskFiltered.map(task => {
                  const {title} = task;//destrucring
                  return (
                    <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            <Typography component="h2">
                              {task.title}
                            </Typography>
                          </Grid>
                          <Grid item md={4}>
                            {
                              status.label
                            }
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button size="small"/>
                      </CardActions>
                    </Card>
                  )
                })}
              </div>
            </Grid>
          )
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
