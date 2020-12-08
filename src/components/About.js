import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
{/* 
               <img className="profile-pic"  src="images/services1.jpg" alt="" /> */}

            </div>

            <div className="eleven columns main-col">

               
          

               <h2>Services</h2>
               <h3>Facials</h3>
               <li>Express Facial--------------------$45</li>
               <li>Custom Facial--------------------$65</li>
               <li>Dermaplaning--------------------$85</li>
               <li>Blueberry Peel-------------------$100</li>
                           <h3>Lash Extensions</h3>
               <li>Classic-------------------------------$45</li>
               <li>Hybrid-------------------------------$65</li>
               <li>Belle V-------------------------------$85</li>
               <li>Removal----------------------------$100</li>
                           <h3>Waxing</h3>
               <li>Lips------------------------------------$12</li>
               <li>Brows---------------------------------$12</li>
               <li>Under Arm--------------------------$18</li>
               <li>Brazillian----------------------------$50</li>
                           <h3>Makeup</h3>
               <li>Belle Consult---------------------------$50</li>
               <li>Full Belle Glam-------------------------$75</li>
               <li>Bridal Makeup (2 sessions)-------$95</li>
               
               {/* <p>
               {
                 resumeData.aboutme
               }
               </p> */}

               {/* <div className="row">

                  <div className="columns contact-details">

                  
                  
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div> */}
               {/* </div> */}
            </div>
         </div>
      </section>
    );
  }
}