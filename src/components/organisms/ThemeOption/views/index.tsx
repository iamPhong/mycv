import * as React from 'react'
import OptionDiv from './styles'

const ThemeOption: React.FC = () => {
  return(
    <OptionDiv>
      <div className="change-theme">
        <div className="light-dark-theme">
          <ul>
            <li className="light">
              <h4>Light</h4>
              <span data-value={process.env.PUBLIC_URL + "/css/colors/light.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="dark">
              <h4>Dark</h4>
              <span data-value={process.env.PUBLIC_URL + "/css/colors/dark.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="colors-theme">
          <h4>12 awesome colors</h4>
          <ul>
            <li className="color1">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color1-0487cc.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color2">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color2-f23a3a.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color3">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color3-2eac6d.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color4">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color4-f35b25.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
          </ul>
          <ul>
            <li className="color5">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color5-f6416c.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color6">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color6-ff9999.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color7">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color7-00adb5.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color8">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color8-00cf95c.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
          </ul>
          <ul>
            <li className="color9">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color9-827055.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color10">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color10-8200ff.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color11">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color11-e4c144.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
            <li className="color12">
              <span data-value={process.env.PUBLIC_URL + "/css/colors/color12-5457a6.css"}>
                <i className="fa fa-check"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="open-theme">
        <i className="fa fa-cogs"></i>
      </div>
    </OptionDiv>
  )
}

export default ThemeOption