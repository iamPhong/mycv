import * as React from 'react'
import TestimonialSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Testimonial: React.FC = () => {
  return(
    <TestimonialSection id="testimonials" data-wow-offset="40">
      <HeaderSection>TESTIMONIALS</HeaderSection>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal1.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Phasellus turpis lacus, convallis at
                odio ac, mattis condimentum dolor. In hac habitasse platea dictumst.
                Fusce eros felis, commodo eget lacus.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal2.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Aenean commodo pharetra leo, sed
                consequat sapien eleifend non. Nunc varius malesuada justo in
                lacinia. Curabitur eget mauris quis quam.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal3.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Aliquam accumsan, est id vestibulum
                commodo, massa eros consequat velit, sed pulvinar diam est non
                purus. Donec quis sapien nec interdum.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal4.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Morbi gravida lorem a odio tristique
                auctor. Praesent gravida ultricies nisi ut tempus. Quisque accumsan
                leo facilisis velit iaculis egestas.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal5.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Sed et maximus magna, et finibus
                tellus. Pellentesque eleifend tempus sodales. Nunc risus nisi,
                hendrerit nec dictum et, accumsan eget libero.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="personal-info">
              <img src="images/testimonials/personal6.jpg" alt="" />
              <h3>Chris Smith</h3>
              <span>Product Manager</span>
            </div>
            <div className="personal-text">
              <p>
                <i className="fa fa-quote-left"></i>Pellentesque in elit sed magna
                imperdiet finibus sed sed erat. Curabitur laoreet feugiat ligula,
                quis feugiat nibh rhoncus et. Nam id leo.<i
                  className="fa fa-quote-right"
                ></i>
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination">
        </div>
      </div>
    </TestimonialSection>
  )
}

export default Testimonial