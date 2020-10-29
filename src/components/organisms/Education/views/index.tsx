import * as React from 'react'
import EducationSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Education: React.FC = () => {
  return(
    <EducationSection id="education" data-wow-offset="40">
      <HeaderSection>EDUCATION</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>Jan 2019 - Apr 2019</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Web Developer</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-building"></i></span>
                  <span className="university-name">Sun * Inc</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
              Take a course called "Open Education" about programming languages Ruby On Rails.
              Learn how to use git, teamwork, design database, etc
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>2015 - 2020</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Student</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Academy Of Cryptography Techniques</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
              I'm a student in KMA university. My specialize is Information Security.
              I completed this degree from this prestigious insitution.
              I successful completed all the credits without any fallout and got Good grade overall.
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </EducationSection>
  )
}

export default Education