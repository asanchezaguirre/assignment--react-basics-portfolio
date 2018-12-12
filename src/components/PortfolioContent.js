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
      			<SkillsList />
      			<EducationHistory />
      			<WorkHistory />
      			
     		</React.Fragment>
			);
	}
}
export default PortfolioContent;