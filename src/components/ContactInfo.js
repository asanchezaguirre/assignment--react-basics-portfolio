import React, { Component } from 'react';


class ContactInfo extends Component {
	render(){
		return (
			<section>
          		<div class="contactinfo">
            		<p class="contactinfo__single" target="_blank">
              			<i class="ion-ios-location-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">Ciudad de México, Mexico</span>
            		</p>
            		<p href="#" class="contactinfo__single" target="_blank">
              			<i class="ion-ios-email-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">s.aguirre.adriana@gmail.com</span>
            		</p>
            		<a href="https://github.com/asanchezaguirre" class="contactinfo__single" target="_blank">
              			<i class="ion-social-github-outline contactinfo__icon"></i>
             			 <span class="contactinfo__title">asanchezaguirre</span>
            		</a>
            		<a href="https://www.linkedin.com/in/s-aguirre-adriana/" class="contactinfo__single" target="_blank">
              			<i class="ion-social-linkedin-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">s-aguirre-adriana</span>
            		</a>
                <a href="https://ethnote.netlify.com/" class="contactinfo__single" target="_blank">

                    <span class="contactinfo__title">EthNote Project</span>
                </a>
          		</div>
        	</section>
			);
	}
}
export default ContactInfo;