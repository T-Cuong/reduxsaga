import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import styles from "./styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';

class TaskItem extends Component {
  render() {
    const {classes, task, status} = this.props;//109
    const {id, title} = task;//destructuring
    return (<Card key={id} className={classes.card}>
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
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Fab color="primary" aria-label="Edit" className={classes.fab}>
        <Icon fontsize="small">
            edit_icon
        </Icon>
      </Fab>
      <Fab color="primary" aria-label="Delete" className={classes.fab}>
        <Icon fontsize="small">
            delete_icon
        </Icon>
      </Fab>
        </CardActions>
      </Card>);
  }
}

export default withStyles(styles)(TaskItem);
