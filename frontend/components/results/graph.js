import React from "react"
import { Sparklines, SparklinesLine } from 'react-sparklines'

const Graph = (props) => {
  return (
      <Sparklines data={props.data}>
        <SparklinesLine />
      </Sparklines>
    )
}

export default Graph