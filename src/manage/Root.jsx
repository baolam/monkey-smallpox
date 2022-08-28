import React from 'react'

import { 
  Typography, 
  Box,
  Grid 
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import PercentageHasDisease from './PercentageHasDisease';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const columns = [
  { field : "name", headerName : "Họ và tên", flex : 2 },
  { field : "email", headerName : "Email", flex : 1 },
  { field : "predict", headerName : "Độ tin cậy dự đoán", flex : 1 },
  { field : "time", headerName : "Thời gian", flex : 1 }
];

const localizer = momentLocalizer(moment);

function Root() {
  return (  
    <>
      <Box height={500} sx={{ m : 1 }}>
        <Typography component="h4" variant="h4" style={{ textAlign : "center" }}>Lịch trình huấn luyện mô hình</Typography>
        <div style={{ height : 450 }}>
          <Calendar
            defaultView='month'
            localizer={localizer}
            events={[]}
            selectable
          />
        </div>
      </Box>
      <Box sx={{ m : 1 }} height={500}>
        <Typography component="h4" variant="h4" style={{ textAlign : "center" }}>Danh sách các đơn khai báo</Typography>
        <div style={{ height : 450 }}>
          <DataGrid 
            columns={columns}
            rows={[]}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Box>
      <Box sx={{ m : 1 }} height={500}>
        <Typography component="h4" variant="h4" style={{ textAlign : "center" }}>Mô hình AI</Typography>
        <Typography component="p" style={{ textAlign : "center" }}>Cá thể X có bao nhiêu phần trăm bị nhiễm bệnh ?</Typography>
        <PercentageHasDisease />
      </Box>
    </>
  );
}

export default Root;