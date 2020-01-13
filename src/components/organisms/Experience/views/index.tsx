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
              <span className="period-experience">Jan 2015 - Current</span>
              <h3 className="specialty-name">Wordpress Developer</h3>
              <h3 className="company-name">GOGLE</h3>
              <p className="prg-experience">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.</p>
            </div>
            <div className="experience-content">
              <span className="period-experience">May 2013 - Aug 2014</span>
              <h3 className="specialty-name">Software Engineer</h3>
              <h3 className="company-name">FACBOOK</h3>
              <p className="prg-experience">Curabitur eleifend purus eu efficitur feugiat. Fusce quis libero sit amet urna mattis semper. Fusce ornare tristique scelerisque. Nunc ac cursus nibh. Maecenas lobortis nulla a nunc molestie, at volutpat sapien congue. Sed vehicula nec libero vel blandit. Praesent scelerisque sodales porttitor.</p>
            </div>
            <div className="experience-content">
              <span className="period-experience">Sep 2010 - Mar 2012</span>
              <h3 className="specialty-name">Systems Analyst</h3>
              <h3 className="company-name">YOTUBE</h3>
              <p className="prg-experience">Quisque convallis justo tellus, ut consequat ante sagittis sed. Suspendisse tincidunt, justo sed dignissim viverra, lacus sem blandit nunc, ac molestie metus turpis mattis erat. Curabitur ac malesuada mauris, id gravida nisi.</p>
            </div>
            <div className="experience-content">
              <span className="period-experience">Oct 2008 - Apr 2010</span>
              <h3 className="specialty-name">Full Stack Developer</h3>
              <h3 className="company-name">TWITTR</h3>
              <p className="prg-experience">Aliquam at sapien pretium, iaculis tortor id, euismod turpis. Nulla ante eros, semper a quam ut, dignissim scelerisque eros. Vestibulum congue a elit ut dignissim. Duis vel erat sed massa porta tincidunt at at lectus. Sed mattis commodo vestibulum. Integer bibendum eget tortor nec faucibus.</p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience