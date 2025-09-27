import React from 'react'
import './about.css'
import ME from '../../asset/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
          </div>
        <div className="about__content">
         <div className="about__cards">
           <article className="about__card">
             <FaAward className="about__icon"/>
             <h5>Experience</h5>
             <small>1+ years Work Experience as a Full Stack Software Developer</small>
           </article>
           <article className="about__card">
             <FiUsers className="about__icon"/>
             <h5>Companies</h5>
             <small>•Webkul Software<br/>( 5 + Months Full Time )<br/><br/>•Innobit Systems<br/>( 1 + year Full Time )<br/><br/>•TwoWaits Pvt. Ltd<br/>( 1 + Month Internship )<br/><br/>•LynxArch Technology<br/>( 2 + Month Internship )</small>
           </article>
           <article className="about__card">
             <VscFolderLibrary className="about__icon"/>
             <h5>Projects</h5>
             <small>10+ Projects Completed Using Technologies like<br/>•PHP  •Laravel  •VueJS<br/>•MySql •ReactJS  •HTML5  •CSS3<br/>•JavaScript (ECMA6)  •Bootstrap  •Tailwind</small>
           </article>
         </div>

         <p>
          Hi There!!! Myself Shazar Rahman currently I'm working as an Associate Software Engineer in Webkul Software. I have 
          Experience of 1+ years working in IT Industry, I have done my B.Tech in Computer Science and Engineering from Rajkumar Goel Institute of Technology and 
          Management. I'm a Full Stack Developer with excellent problem solving skills and ability to perform well in a team. Passionate about coding and
          enjoy learning new technical skills. Love creating projects using latest technologies.
         </p>
         <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
