import * as React from 'react'
import OverlayDiv from './styles'

const LoadingOverlay: React.FC = () => {
  return(
    <OverlayDiv>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </OverlayDiv>
  )
}
export default LoadingOverlay