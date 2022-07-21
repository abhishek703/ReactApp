import React from 'react'
import Common from './Common'
import web from './Images/1.jpg'

function About() {
    return (
       <Common name="Welcome to About page"
       imgsrc={web}
       visit="/contact"
       btnname="Contact Now"/>
    )
}

export default About