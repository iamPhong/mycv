import * as React from 'react'
import ExperienceSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Experience: React.FC = () => {
  return(
    <ExperienceSection id="experience" data-wow-offset="40">
      <HeaderSection>EXPERIENCE</HeaderSection>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <span className="icon-experience">
            <i className="fa fa-briefcase"></i>
          </span>
          <div className="all-experience">
            <div className="experience-content">
              <span className="period-experience">Oct 2021 - Current</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: Tas__</p>
                <p>Technologies: Ruby On Rails, MySQL, Docker, Elasticsearch</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Mar 2021 - Oct 2021</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: W__</p>
                <p>Technologies: Ruby On Rails, MySQL, Docker</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Nov 2020 - Mar 2021</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: ZE__</p>
                <p>Technologies: Ruby On Rails, MySQL, Docker</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Mar 2020 - Nov 2020</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: Maz___</p>
                <p>Technologies: Ruby On Rails, AngularJs, React Js, MySQL, Docker</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Jul 2019 - Mar 2020</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: La___ St__</p>
                <p>Technologies: Ruby On Rails, AngularJs, ElasticSearch, MySQL</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Apr 2019 - Jul 2019</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Sun * Inc</h3>
              <p className="prg-experience">
                Interns.
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">Jan 2019 - Apr 2019</span>
              <h3 className="specialty-name">Trainee</h3>
              <h3 className="company-name">Sun Education</h3>
              <p className="prg-experience">
                I'm a trainee Ruby on Rails in Sun Education.
              </p>
            </div>
            <div className="experience-content">
              <span className="period-experience">Jun 2015 - Apr 2019</span>
              <h3 className="specialty-name">Student</h3>
              <h3 className="company-name">ACADEMEY OF CRYPTOGRAPHY TECHIQUES</h3>
              <p className="prg-experience">
                I'm a student in KMA university. My specialize is Information Security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience
