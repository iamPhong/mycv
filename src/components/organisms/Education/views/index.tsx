import * as React from 'react'
import EducationSection from './styles'

const Education: React.FC = () => {
  return(
    <EducationSection id="education" data-wow-offset="40">
      <div className="header-section">
        <h2 className="h2-section">EDUCATION</h2>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2014 - 2016</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Web Master / Web Developer</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Lipro University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2012 - 2014</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Software Engineering</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Oxford University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2010 - 2012</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Mobile App Development</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Lipro University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2008 - 2010</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Full Stack Developer</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Oxford University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2006 - 2008</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Computer Science</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Lipro University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="education-content">
            <div className="period">
              <h3>2004 - 2006</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon"><i className="fa fa-file-text"></i></span>
                  <span className="specialty-name">Desktop Development</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon"><i className="fa fa-university"></i></span>
                  <span className="university-name">Oxford University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">I completed this degree from this prestigious insitution. I successful completed all the credits without any fallout and got A grade overall.</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </EducationSection>
  )
}

export default Education