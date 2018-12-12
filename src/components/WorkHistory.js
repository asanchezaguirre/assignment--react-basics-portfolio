import React, {Component} from 'react'
import Job from "./Job";// import Job components

import {jobsList} from "../data/datasource"

class WorkHistory extends Component {
  render() {
    console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { 
            jobsList.map(function(job){
              return<Job title ={job.title}
                         company ={job.company}
                         description ={job.description}
                         end ={job.years[1]}
                         start ={job.years[0]}

              />
            })
          /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
