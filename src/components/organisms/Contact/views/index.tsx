import * as React from 'react'
import ContactSection from './styles'

const Contact: React.FC = () => {
  return(
    <ContactSection id="contact-us" data-wow-offset="40">
      <div className="header-section">
        <h2 className="h2-section">CONTACT US</h2>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="info-content">
            <h3>KEEP IN TOUCHE</h3>
            <div className="address">
              <span className="info-icon"
                ><i className="fa fa-map-marker"></i
              ></span>
              <span className="info-text">Tan Trieu, Thanh Tri, Ha Noi</span>
            </div>
            <div className="email">
              <span className="info-icon"><i className="fa fa-envelope"></i></span>
              <span className="info-text">truongvanphong97@gmail.com</span>
            </div>
            <div className="telephone">
              <span className="info-icon"><i className="fa fa-phone"></i></span>
              <span className="info-text">+8491 649 3490</span>
            </div>
            <div className="website">
              <span className="info-icon"><i className="fa fa-link"></i></span>
              <span className="info-text">iamPhong.github.io/mycv</span>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a href="# "><i className="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="# "><i className="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="# "><i className="fa fa-google-plus"></i></a>
          </li>
          <li>
            <a href="# "><i className="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="# "><i className="fa fa-pinterest-p"></i></a>
          </li>
          <li>
            <a href="# "><i className="fa fa-behance"></i></a>
          </li>
        </ul>
      </div>
    </ContactSection>
  )
}

export default Contact