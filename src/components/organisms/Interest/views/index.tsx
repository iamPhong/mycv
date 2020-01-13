import * as React from 'react'
import InterestSection from './styles'

const Interest: React.FC = () => {
  return(
    <InterestSection id="interests" data-wow-offset="40">
      <div className="header-section">
        <h2 className="h2-section">INTERESTS</h2>
      </div>
      <div className="text-interests">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div>
              <img src="images/interests/travel_icon.png" alt="Travel" />
            </div>
            <h4>Travel</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/music_icon.png" alt="Music" />
            </div>
            <h4>Music</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/gaming_icon.png" alt="Gaming" />
            </div>
            <h4>Gaming</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/swiming_icon.png" alt="Swiming" />
            </div>
            <h4>Swiming</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/movies_icon.png" alt="Movies" />
            </div>
            <h4>Movies</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/shopping_icon.png" alt="Shopping" />
            </div>
            <h4>Shopping</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/bicycling_icon.png" alt="Bicycling" />
            </div>
            <h4>Bicycling</h4>
          </div>
          <div className="swiper-slide">
            <div>
              <img src="images/interests/cooking_icon.png" alt="Cooking" />
            </div>
            <h4>Cooking</h4>
          </div>
        </div>
      </div>
    </InterestSection>
  )
}

export default Interest