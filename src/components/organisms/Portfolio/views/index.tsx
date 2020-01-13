import * as React from 'react'
import PortfolioSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Portfolio: React.FC = () => {
  return(
    <PortfolioSection id="portfolio" data-wow-offset="40">
      <HeaderSection>PORTFOLIO</HeaderSection>
      <div className="filter-portfolio">
        <ul>
          <li className="active filter" data-filter="all">All</li>
          <li className="filter" data-filter=".term1">Web Design</li>
          <li className="filter" data-filter=".term2">Photography</li>
          <li className="filter" data-filter=".term3">Development</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="item-portfolio term3">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item1.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item1.jpg" alt="" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item-portfolio term1">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item2.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item2.jpg" alt="" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item-portfolio term2">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item3.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item3.jpg" alt="" />
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-4">
          <div className="item-portfolio term2">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item4.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item4.jpg" alt="" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item-portfolio term1">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item5.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item5.jpg" alt="" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item-portfolio term3">
            <div className="item-overlay">
              <div className="item-content">
                <span className="icon-search">
                  <a className="work-popup" href="images/portfolio/item6.jpg" data-group="1">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </span>
                <span className="icon-plus">
                  <a href="# ">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </span>
                <h3>AWESOME TITLE PORTFOLIO</h3>
              </div>
            </div>
            <img src="images/portfolio/item6.jpg" alt="" />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </PortfolioSection>
  )
}

export default Portfolio