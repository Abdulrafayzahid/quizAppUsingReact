import React, { Component } from 'react';
import './App.css';
import './assets/style.css';
import getQuestions from './quizService'
import QuestionBox from './components/QuestionBox'
import Result from './components/Result'
// import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
    state = { 
      questions : [],
      score: 0,
      responses: 0
    }
  
    Questions = () => {
      getQuestions().then(questions => {
        this.setState({
          questions
        })
      })
    }

    playAgain = () => {
      this.Questions()
      this.setState({
        score: 0,
        responses: 0
      })
    }

    CalculateResult(answer, correctAnswer){
      answer === correctAnswer && (
        this.setState({score: ++this.state.score})
      );

      this.setState({responses: ++this.state.responses})
      console.log(`score: ${this.state.responses}  score:${this.state.score}
       ${answer} ${correctAnswer}`);
      console.log();
      
    }
    componentDidMount() {
      this.Questions();
    }

  render() { 
    return ( 
      <div className='container'> 
      <div className="title">Test Started!</div>

        {this.state.questions.length > 0 &&
          this.state.responses < 5 &&   
            this.state.questions.map(
          ({question, answers, correct, questionsId}) => 
            <QuestionBox  
            question={question}  
            options={answers} 
            key={questionsId}
            selected={answer => this.CalculateResult(answer, correct)}
            />  
          )}

            {this.state.responses == 5 &&
              <Result score={this.state.score} playAgain={this.playAgain} />
              }
              
    </div>
     );
  }
}
 
export default App;
