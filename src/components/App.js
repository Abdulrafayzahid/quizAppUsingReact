import React, { Component, Fragment } from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from '../store'


class App extends Component {
  state = { 
    exercises,
    category: '',
    excercise: {}
   }

   getExcerciseByMuscles = () =>{
     return this.state.exercises.reduce((exercises, exercise)=>{
       const {muscles} = exercise
       
         exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          :[exercise] 

          return exercises
     }, {})
   }

   handleSelectedCatg = (category) => {
     this.setState({category})
   }

   handleSelectedExcercise = (id) => {
      this.setState(({exercises}) => ({
          excercise : exercises.find(ex => ex.id === id)
        })
      )
   }

   
  render() { 
     const exercises = Object.entries(this.getExcerciseByMuscles());
    const {category, excercise} = this.state
    return ( 
      <Fragment>
        <Header />
        <Exercises 
        exercises={exercises} 
        excercise={excercise}
        category={category} 
        onSelect={this.handleSelectedExcercise} />
        <Footer muscles={muscles} onSelect={this.handleSelectedCatg} category={category} />
      </Fragment>
     );
  }
}
 
export default App;