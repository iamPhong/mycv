import * as React from "react"
import MenuDiv from "./styles"

const Menu: React.FC = () => {
  return(
    <MenuDiv>
      <h2 className="logo">KMA</h2>
      <div className="menu-content">
        <ul>
          <li><a className="active" href="# " data-value="about">ABOUT</a></li>
          <li><a href="# " data-value="skills">SKILLS</a></li>
          <li><a href="# " data-value="education">EDUCATION</a></li>
          <li><a href="# " data-value="experience">EXPERIENCE</a></li>
          {/* <li><a href="# " data-value="portfolio">PORTFOLIO</a></li> */}
          {/* <li><a href="# " data-value="testimonials">TESTIMONIALS</a></li> */}
          <li><a href="# " data-value="interests">INTERESTS</a></li>
          {/* <li><a href="# " data-value="blog">BLOG</a></li> */}
          <li><a href="# " data-value="contact-us">CONTACT</a></li>
        </ul>
      </div>
      <div className="open-menu">
        <i className="fa fa-bars"></i>
      </div>
    </MenuDiv>
  )
}

export default Menu
