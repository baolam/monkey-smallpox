import React from 'react'
import { Stage, Layer, Circle, Line, Text, Group } from 'react-konva';
import calculate from './calculateCoordinate';
import getColor from './getColor';

const width = window.innerWidth;
const height = 500;
const radius = 30;

function BuildPerson(props) {
  let { fullname, convince, qhx, prior_code, coordinate } = props;
  let color = getColor(prior_code);
  let [x, y] = coordinate;

  return (
    <Group>
      <Circle 
        x={x}
        y={y}
        radius={radius}
        fill={color}
        stroke="white"
        dashEnabled={! prior_code >= 1}
        dash={[10, 10]}
        strokeWidth={5}
      />
      <Text x={x-8} y={y-10}
        fontSize={24} text={fullname[0]} fill="white" />
    </Group>
  )
}

function Correlate(props) {
  let { stx, sty, tgx, tgy } = props;
  return (
    <Line 
      points={[stx, sty, tgx, tgy]}
      strokeWidth={4}
      stroke="black"
      dash={[20, 5]}
      dashEnabled={false}
    />
  )
}

function InvolvedGraph(props) {
  const rst = calculate(1, 3, width, height);

  return (
    <Stage width={width} height={height} draggable style={{ border : "1px dashed black" }}>
      <Layer>
        {(() => {
          let lines = [];
          
          return lines.map((line) => line);
        })()}
      </Layer>
      <Layer>

      </Layer>
    </Stage>
  )
}

export default InvolvedGraph;