import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../../containers/Taskboard/style';

class TaskList extends Component {
  render() {
    const {classes, tasks, status} = this.props;
    return (
        (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={1} mb={1}>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {tasks.map(task => {
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
    )
  }
}

export default withStyles(styles)(TaskList);
