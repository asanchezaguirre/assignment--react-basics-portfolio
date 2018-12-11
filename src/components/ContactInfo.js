import React, { Component } from 'react';


class ContactInfo extends Component {
	render(){
		return (
			<section>
          		<div class="contactinfo">
            		<a class="contactinfo__single" target="_blank">
              			<i class="ion-ios-location-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">Ciudad de México, Mexico</span>
            		</a>
            		<a href="#" class="contactinfo__single" target="_blank">
              			<i class="ion-ios-email-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">s.aguirre.adriana@gmail.com</span>
            		</a>
            		<a href="#" class="contactinfo__single" target="_blank">
              			<i class="ion-social-github-outline contactinfo__icon"></i>
             			 <span class="contactinfo__title">asanchezaguirre</span>
            		</a>
            		<a href="#" class="contactinfo__single" target="_blank">
              			<i class="ion-social-linkedin-outline contactinfo__icon"></i>
              			<span class="contactinfo__title">s-aguirre-adriana</span>
            		</a>
          		</div>
        	</section>
			);
	}
}
export default ContactInfo;