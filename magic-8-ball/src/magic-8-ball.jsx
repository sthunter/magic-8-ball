import React, { Component } from 'react';
import { Button, Col, Row, Input } from 'react-materialize';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';




class Eightball extends Component {
    constructor(props){
    super(props);
    this.state = {
      answers : {
        1: "It is certain",
        2: "It is decidedly so",
        3: "Without a doubt",
        4: "Yes, definitely",
        5: "You may rely on it",
        6: "As I see it, yes",
        7: "Most likely",
        8: "Outlook good",
        9: "Yes",
        10: "Signs point to yes",
        11: "Reply hazy try again",
        12: "Ask again later",
        13: "Better not tell you now",
        14: "Cannot predict now",
        15: "Concentrate and ask again",
        16: "Don't count on it",
        17: "My reply is no",
        18: "My sources say no",
        19: "Outlook not so good",
        20: "Very doubtful"
      },
      current: null,
      text: null 
    }
  }
  
  handleAnswer = () => {
    this.setState({current: this.state.answers[Math.floor(Math.random() * (Object.keys(this.state.answers).length - 1))]})
  }

  render () {

    const style = {
      height: 200,
      width: 200,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <div>
        

            <TextField hintText={this.state.text} floatingLabelText="Floating Label Text"/><FlatButton onClick={() => this.handleAnswer()} label="Default" />
            
            <br/>
            <Paper className="valign-wrapper" style={style} zDepth={4}>
              <div className="answerCard valign">{this.state.current}</div>
            </Paper>


        
      </div>
            
    )
  }
}

export default Eightball;
