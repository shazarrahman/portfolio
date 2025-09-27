import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiTwotoneStar} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Full Stack Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>  
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>  
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>  
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>  
            <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>  
            <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>  
            <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Tailwind</h4>  
            <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>ReactJS</h4>  
            <small className="text-light">Beginner</small>
               </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Competitive Coding</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                 <h4>HackerRank</h4>
                <small className="text-light">5 <AiTwotoneStar/> coder in C++ (CPP)</small>
              </div>
               </article>
               <br/>
                 <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>CodeStudio</h4>
                <small className="text-light">Level 5 ( Champion ) coder in C++</small>
              </div>
            </article>
            <br/>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Leetcode</h4>
                <small className="text-light">100 + DSA problems solved</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
