import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core';


export default ({muscles, category, onSelect}) => {

  const index = category ? muscles.findIndex(group => group === category) + 1 : 0
  console.log(index);

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
    console.log(index);
    console.log(e);
  }

return(
  <Paper square={true}>
    <Tabs
      value={index}
      onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      { muscles.map(category => 
      <Tab key={category} label={category} />)}
    </Tabs>
  </Paper>
  )
}