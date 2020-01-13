import * as React from 'react'
import SkillSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Skill: React.FC = () => {
  return(
    <SkillSection id="skills" data-wow-offset="40">
      <HeaderSection>SKILL</HeaderSection>
      <div className="row">
        <div className="col-md-5">
          <div className="professional-skills">
            <div className="title-skills">
              <h3>PROFESSIONAL SKILLS</h3>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">HTML & CSS</span>
                <span className="skill-value">60%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" aria-valuenow={60}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{width: "60%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">WordPress</span>
                <span className="skill-value">0%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress2"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "0%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">JavaScript</span>
                <span className="skill-value">70%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress3"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "70%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Ruby on Rails</span>
                <span className="skill-value">85%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress4"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "85%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Photoshop</span>
                <span className="skill-value">65%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress5"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "65%"}}
                        >
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="additional-skills">
            <div className="title-skills">
              <h3>ADDITIONAL SKILLS</h3>
            </div>
            <div className="circle-progress">
              <div className="row">
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>60%</span>
                    </div>
                    <div className="chart" data-percent="60">
                    </div>
                    <div className="name-circle">
                      <span>English</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>70%</span>
                    </div>
                    <div className="chart" data-percent="70">
                    </div>
                    <div className="name-circle">
                      <span>Creativity</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>65%</span>
                    </div>
                    <div className="chart" data-percent="65">
                    </div>
                    <div className="name-circle">
                      <span>Teamwork</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-skills">
              <div className="row">
                <div className="col-sm-6">
                  <div className="other">
                    <div className="skill">
                      <i className="fa fa-close" aria-hidden="true"></i>
                      <span>Photography</span>
                    </div>
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>Play Soccer</span>
                    </div>
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>Play Badminton</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="other">
                    <div className="skill">
                      <i className="fa fa-close" aria-hidden="true"></i>
                      <span>3D Animation</span>
                    </div>
                    <div className="skill">
                      <i className="fa fa-close" aria-hidden="true"></i>
                      <span>Audio Video Editing</span>
                    </div>
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>UX and UI Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillSection>
  )
}

export default Skill