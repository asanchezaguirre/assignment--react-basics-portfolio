import React, { Component } from 'react';
import Header from "./Header";
import Summary from "./Summary";
import ContactInfo from "./ContactInfo";
import SkillsList from "./SkillsList"
import EducationHistory from "./EducationHistory"
import WorkHistory from "./WorkHistory"



class PortfolioContent extends Component {
	render(){
		return (
			<React.Fragment>
      			<Header />
      			<Summary />
      			<ContactInfo />
      			<SkillsList skill={this.props.skill}/>
      			<EducationHistory edu={this.props.edu}/>
      			<WorkHistory job ={this.props.job}/>
      			
     		</React.Fragment>
			);
	}
}
export default PortfolioContent;

//skill={this.props.skill} edu={this.prop.edu} job ={this.prop.job}