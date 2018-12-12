import React, { Component } from 'react';
import PortfolioFixed from "./components/PortfolioFixed";
import PortfolioContent from "./components/PortfolioContent";




class App extends Component {
  render() {
    return (
     <React.Fragment>
      <PortfolioFixed />
      <PortfolioContent skill = {this.props.skill} edu = {this.props.edu} job ={this.props.job}/>
     </React.Fragment>
    );
  }
}

export default App;

//skill={skills} edu={eduList} job ={jobsList}