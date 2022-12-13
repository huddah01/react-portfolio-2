import React from 'react'
import './about.css'
import ME from'../../assets/meChild.jpg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>B.S. in Mathematics and Computer Science</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Software Development Internships</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>75+ Completed</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel eum ducimus quasi praesentium, laudantium commodi 
            optio dignissimos id et earum itaque provident consequatur 
            obcaecati eos enim voluptatum? Dolore, excepturi veritatis!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About