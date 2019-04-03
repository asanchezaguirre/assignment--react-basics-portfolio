import React, { Component } from 'react';
import foto from '../images/Adriana1.jpg';
import fondo from '../images/fondo.jpg'


class PortfolioFixed extends Component {
	render(){
		return (
			<div class="portfolio-fixed">
        		<img src={foto}/>
        		<h1>Adriana Sánchez</h1>
        		<p>Jr. Full-Stack Web Developer & Social Anthropologist & Accountant</p>
    		</div>
			);
	}
}
export default PortfolioFixed;