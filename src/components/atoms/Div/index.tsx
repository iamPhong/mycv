import * as React from 'react'
import RowDiv from './styles'
import { Props } from './types'

const Div: React.FC<Props> = React.memo(
  ({ children, className }: Props) => (
    <RowDiv className={className}>{ children }</RowDiv>
  )
)

export default Div
