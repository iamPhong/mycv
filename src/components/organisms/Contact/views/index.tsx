import * as React from 'react'
import ContactSection from './styles'
import SocialLinks from '../../../molecules/SocialLinks'
import HeaderSection from '../../../molecules/HeaderSection'

const Contact: React.FC = () => {
  return(
    <ContactSection id="contact-us" data-wow-offset="40">
      <HeaderSection>CONTAST</HeaderSection>
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
      <SocialLinks />
    </ContactSection>
  )
}

export default Contact