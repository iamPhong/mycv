import * as React from 'react'
import BlogSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Blog: React.FC = () => {
  return(
    <BlogSection id="blog" data-wow-offset="40">
      <HeaderSection>BLOG</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="blog-content">
            <img src="images/blog/blog1.jpg" alt="" />
            <div className="blog-detail">
              <h4><a href="# ">PHOTO</a> / <a href="# ">DESIGN</a> / <a href="# ">DEV</a></h4>
              <h3><a href="single-blog.html">HERE GOES AN AWESOME BLOG TITLE</a></h3>
              <ul className="ul-detail">
                <li><i className="fa fa-user-o"></i>Truong Van Phong</li>
                <li><i className="fa fa-calendar-check-o"></i>Nov 12</li>
                <li><i className="fa fa-comments-o"></i>46</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
              <a href="single-blog.html"><span className="read-more">READ MORE</span></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="blog-content">
            <img src="images/blog/blog2.jpg" alt="" />
            <div className="blog-detail">
              <h4><a href="# ">PHOTO</a> / <a href="# ">DESIGN</a> / <a href="# ">DEV</a></h4>
              <h3><a href="single-blog.html">HERE GOES AN AWESOME BLOG TITLE</a></h3>
              <ul className="ul-detail">
                <li><i className="fa fa-user-o"></i>Truong Van Phong</li>
                <li><i className="fa fa-calendar-check-o"></i>Nov 12</li>
                <li><i className="fa fa-comments-o"></i>46</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
              <a href="single-blog.html"><span className="read-more">READ MORE</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="load-more">
        <a href="more-blog.html"><span>LOAD MORE</span></a>
      </div> */}
    </BlogSection>
  )
}

export default Blog