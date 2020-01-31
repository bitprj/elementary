import React, {Component} from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import studentSignIn from "./Student/studentSignIn";
import multipleChoice from "./Student/lessonMaterial/multipleChoice";
import fillInTheBlank from "./Student/lessonMaterial/fillInTheBlank";
import numericalInput from "./Student/lessonMaterial/numerialInput";


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return(
        <Router>
          <div>
             <Route exact path = '/student' component={studentSignIn}/>
             <Route exact path = '/mc' component={multipleChoice}/>
             <Route exact path = '/fitb' component={fillInTheBlank}/>
             <Route exact path = '/ni' component={numericalInput}/>
          </div>
        </Router>
    )
  }
}


const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default compose(connect(
    mapState,
    mapDispatch
    ),
)(App)
