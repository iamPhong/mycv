import * as React from 'react'
import { HeaderSectionDiv, H2 } from './styles'
import { Props } from './types'

const HeaderSection: React.FC<Props> = React.memo(
  ({ children }: Props) => (
    <HeaderSectionDiv>
      <H2>{children}</H2>
    </HeaderSectionDiv>
  )
)

export default HeaderSection