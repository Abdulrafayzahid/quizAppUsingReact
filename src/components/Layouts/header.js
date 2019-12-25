import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core'

export default () => {
    return(
        <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
          <Typography variant="h5" component="h6" color="inherit">
          Excercises Database
            </Typography>
        </Toolbar>
      </AppBar>
    )
}
