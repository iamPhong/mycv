import * as React from "react"
import AboutSection from "./styles"

const About: React.FC = () => {
  return(
    <AboutSection id="about">
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img src="images/me.jpg" alt="Truong Van Phong" />
            </div>
            <a href="cv/CV.pdf" target="cv">
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                <span className="text-download">DOWNLOAD CV</span>
              </div>
            </a>
            <div className="available">
              <i className="fa fa-check" aria-hidden="true"></i>
              <span className="text-available">I'm still learning</span>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2><span>HI I'M</span> TRUONG VAN PHONG</h2>
              <h3>web developer</h3>
              <p>Hello! I’m Truong Van Phong. Web Developer with over 1 years of experience.
              Having an in-depth knowledge including basic HTML, CSS, JavaScript, jQuery, Angular JS, Ruby on Rails</p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Age</span>
                      <span className="info">23</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Address</span>
                      <span className="info">Tan Trieu, Thanh Tri, Ha Noi</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Email</span>
                      <span className="info">truongvanphong97@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Phone</span>
                      <span className="info">+8491 649 3490</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Website</span>
                      <span className="info">https://iamphong.github.io/mycv</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nationality</span>
                      <span className="info">Viet Nam</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <span className="title-links">Social Links</span>
                  <ul className="ul-social-links">
                    <li className="li-social-links">
                      <a href="https://www.facebook.com/phong.truong.71216141" data-tootik="Facebook" data-tootik-conf="square">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Twitter" data-tootik-conf="square">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Google Plus" data-tootik-conf="square">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Linkedin" data-tootik-conf="square">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Pinterest" data-tootik-conf="square">
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}

export default About