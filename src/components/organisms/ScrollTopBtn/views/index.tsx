import * as React from 'react'
import ScrollDiv from './styles'

const ScrollTopBtn: React.FC = () => {
  return(
    <ScrollDiv data-tootik="TOP" data-tootik-conf="invert no-arrow no-fading">
      <i className="fa fa-arrow-up"></i>
    </ScrollDiv>
  )
}

export default ScrollTopBtn