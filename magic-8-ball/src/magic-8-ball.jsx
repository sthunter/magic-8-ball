import React, { Component } from 'react';
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
      question: '', 
    }
  }

  handleChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };
  
  handleAnswer = () => {
    if(this.state.question.length !== 0) {
      this.setState({current: this.state.answers[Math.floor(Math.random() * (Object.keys(this.state.answers).length))]})
    } else {
      alert ('Please enter a question')
    }
  }

  handleClear = () => {
    this.setState({current: ''})
  }

  render () {

    const style = {
      paperStyle : {
        height: 200,
        width: 200,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#2f01c4'
      },
      textStyle : {
        marginTop: 80,
        color : '#eeeeee'
      },
      inputStyle : {
        color : '#eeeeee'
      },
      underlineStyle : {
        borderColor : '#eeeeee'
      }
    }

    return (
      <div>
        <TextField hintText={null} 
          floatingLabelStyle={style.inputStyle}
          floatingLabelFocusStyle={style.inputStyle}
          underlineStyle={style.underlineStyle}
          floatingLabelText="What is your question?" 
          onChange={this.handleChange}/>
        <FlatButton 
          label="Get Answer"
          labelStyle={style.inputStyle} 
          onClick={() => this.handleAnswer()}/>
        <br/>
          <div>
            <Paper style={style.paperStyle} zDepth={4} circle={true}>
             <div style={style.textStyle}>{this.state.current}</div>
            </Paper>
          </div> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> 
      </div>     
    )
  }
}

export default Eightball;
