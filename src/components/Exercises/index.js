import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height:500,
    overflow:'auto'
  }
};

export default ({ 
    exercises,
    category,
    onSelect,
    excercise:{id, title="Welcome", description="Select which muscle you wanna build."} 
}) => (
  <Grid container spacing={2}>
    <Grid item xs>
      <Paper style={style.paper} square={true}>
        {exercises.map(([muscles, exercises]) => (
         !category || category === muscles 
         ?
     
         <Fragment key={muscles}>
            <Typography
              variant="h5"
              component="h5"
              style={{ textTransform: "capitalize" }}
            >
              {muscles}
            </Typography>
            <List component="ul">
              {exercises.map(({title, id}) => (
                <ListItem 
                key={id}
                button
                onClick={() => {
                    return onSelect(id);
                }}
                >
                  <ListItemText 
                  primary={title} 
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
          : null
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={style.paper} square={true}>
        <Typography variant='h4'>
            {title}
        </Typography>
        <Typography variant='h6' style={{marginTop:20}}>
            {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
