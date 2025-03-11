import React from 'react'
import Reason from './Reason'

const WhyPratham = () => {
  return (
    <div className='container'>
        <div className="row py-5 my-5">
            <h2>WHY PRATHAM</h2>

            <Reason
            icon={"fa-solid fa-graduation-cap"}
            heading={"High Density of Top Rankers"}
            paragraph={"With over 10,000 final selections in 200+ colleges across India, PRATHAM Test Prep has emerged as one of the student's favorite test preparation brand in the past 15 years."}
            />

<Reason
            icon={"fa-regular fa-address-card"}
            heading={"Comprehensive Preparation"}
            paragraph={"Compact and comprehensive classroom trainings are provided to students with a synoptic approach of completing adequate class hours."}
            />

<Reason
            icon={"fa-solid fa-desktop"}
            heading={"E-Learning System"}
            paragraph={"PRATHAM E-learning comprises of student Dashboard which is an amalgamation of E-Lectures, PDFs, Class Notes and Examination Details."}
            />

<Reason
            icon={"fa-solid fa-book"}
            heading={"Use of Mnemonics"}
            paragraph={"Mnemonics serves as a memory aid to store lists or sequence of necessary facts and figures."}
            />

<Reason
            icon={"fa-solid fa-hourglass-end"}
            heading={"Lifetime Mentorship Program"}
            paragraph={"Enrolling students with PRATHAM ensure an eternal bond that the student can leverage for life."}
            />

<Reason
            icon={"fa-regular fa-clock"}
            heading={"Regular Mock Tests"}
            paragraph={"The mock tests are real-time learning experiences that focus on student’s aptitude. The mock-tests are conducted so that the students don’t get jittery on the Exam Day."}
            />
        </div>
    </div>
  )
}

export default WhyPratham