import * as React from 'react'
import ImgTag from './styles'
import { Props } from './types'

const Img: React.FC<Props> = React.memo(
  ({ Src, Alt }: Props) => (
    <ImgTag src={Src} alt={Alt} />
  )
)

export default Img
