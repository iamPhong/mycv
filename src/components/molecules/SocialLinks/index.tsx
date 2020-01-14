import * as React from'react'
import LinkDiv from './styles'

const SocialLinks: React.FC = () => {
  return(
    <LinkDiv>
      <ul>
        <li>
          <a href="https://www.facebook.com/phong.truong.71216141">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="# ">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="# ">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="# ">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="# ">
            <i className="fa fa-pinterest-p"></i>
          </a>
        </li>
      </ul>
    </LinkDiv>
  )
}

export default SocialLinks