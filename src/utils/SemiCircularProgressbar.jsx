import React from 'react'

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

function SemiCircularProgressbar(props) {
  return (
    <CircularProgressbar 
      value={props.children}
      text={`${props.children}%`}
      circleRatio={0.7}
      styles={{
        trail : {
          strokeLinecap : "butt",
          transform : "rotate(-126deg)",
          transformOrigin : "center center"
        },
        path : {
          strokeLinecap : "butt",
          transform : "rotate(-126deg)",
          transformOrigin : "center center",
          stroke : "green"
        },
        text : {
          fill : "#ddd"
        }
      }}
      strokeWidth={12}
    />
  )
}

export default SemiCircularProgressbar;