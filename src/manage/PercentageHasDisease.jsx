import React, { useRef } from 'react'
import { Grid } from '@mui/material';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieOption = {
  title : {
    text : "Tương quan gán nhãn và chưa gán nhãn"
  },
  chart : {
    type : "pie"
  },
  tooltip: {
    pointFormat: 'Tỉ lệ: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series : [
    {
      name : "Nhãn",
      data : [
        {
          name : "Chưa",
          color : "red",
          y : 80
        },
        {
          name : "Rồi",
          color : "green",
          y : 20,
        }
      ]
    }
  ]
}

const AccuracyOption = {
  title : {
    text : "Tương quan giữa độ chính xác testing"
  },
  chart : {
    type : "pie"
  },
  tooltip: {
    pointFormat: 'Tỉ lệ: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series : [
    {
      name : "Nhãn",
      data : [
        {
          name : "Test",
          color : "blue",
          y : 80
        },
        {
          name : "Bỏ",
          color : "gray",
          y : 20
        }
      ]
    }
  ]
}
const LineOption = {
  title : {
    text : "Chuỗi nhận diện theo thời gian thực"
  },
  chart : {
    type : "line"
  },
  xAxis : {
    type : "datetime",
    labels : {
      formatter : function() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      }
    }
  },
  series : [
    {
      name : "Nhận dạng",
      data : [0]
    }
  ]
}

function PercentageHasDisease() {
  const pieRef = useRef();
  const lineRef = useRef();
  const accuracyRef = useRef();

  return (
    <Grid container>
      <Grid item xs={3}>
        <HighchartsReact 
          highcharts={Highcharts}
          options={AccuracyOption}
          ref={accuracyRef}
        />
      </Grid>
      <Grid item xs={3}>
        {/* Biểu đồ tròn biểu thị cho phần trăm tương quan giữa nhóm người đã gán nhãn và chưa */}
        <HighchartsReact 
          highcharts={Highcharts}
          options={PieOption}
          ref={pieRef}
        />
      </Grid>
      <Grid item xs={6}>
        {/* Biểu đồ đường (biểu thị các cá thể nhận dạng theo thời gian thực) */}
        <HighchartsReact 
          highcharts={Highcharts}
          options={LineOption}
          ref={lineRef}
        />
      </Grid>
    </Grid>
  )
}

export default PercentageHasDisease;