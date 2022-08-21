import React, { useRef, useState } from 'react'
import SympthonForm from './utils/Sympthon';
import PersonalInformation from './utils/PersonalInformation';

import { 
  TextField,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Button
} from '@mui/material';

import './assets/form.css';

function ElementForm(props) {
  let { id, name, reference, disabled } = props;

  return (
    <FormControl fullWidth sx={{ m : 1 }} disabled={disabled} >
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <OutlinedInput 
        id={id}
        label={name}
        ref={reference}
      />
    </FormControl>
  );
}

function TfTime(data) {
  let { value, label } = data;
  return <Grid xs={4}>
    <FormControl fullWidth>
      <TextField value={value} disabled variant="outlined" label={label} />
    </FormControl>
  </Grid>
} 

function Form(props) {
  let { disabled } = props;
  
  if (disabled === undefined)
    disabled = false;
  
  let addrRef = useRef();
  let date = new Date();
  let [ dt_form, _setDtForm ] = useState({
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds()
  });

  return (
    <div>
      <Typography style={{ textAlign : "center", background : "blue", color : "orange" }} variant="h2" component="h2">Đơn khai báo y tế</Typography>
      <Grid container spacing={1} style={{ overflow : "hidden" }}>
        <Grid xs={6}>
          <Typography style={{ textAlign : "center" }} className="margin-title" variant="h4" component="h4">Thông tin cá nhân</Typography>
          <FormControl fullWidth sx={{ m : 1 }}>
            <Grid container>
              <TfTime value={dt_form.hour} label="Giờ" />
              <TfTime value={dt_form.minute} label="Phút" />
              <TfTime value={dt_form.second} label="Giây" />
            </Grid>
          </FormControl>
          <PersonalInformation disabled={disabled} />
          <ElementForm id="address" name="Địa chỉ nhà" reference={addrRef} disabled={disabled} />
          <ElementForm id="full-name" name="Họ và tên" disabled={disabled} />
          <ElementForm id="cccd" name="Căn cước công dân" disabled={disabled} />
          <ElementForm id="phone" name="Số điện thoại" disabled={disabled} />
          <ElementForm id="email" name="email" disabled={disabled} />
        </Grid>
        <Grid xs={6}>
          {/* Xây dựng các triệu chứng */}
          <Typography style={{ textAlign : "center" }} className="margin-title" conponent="h4" variant="h4">Các triệu chứng</Typography>
          <SympthonForm disabled={disabled} sympthons={["Sốt", "Phát ban", "Đau đầu", "Mệt mỏi", "Đau cơ", "Các triệu chứng khác"]} />
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth>Gửi đơn</Button>
    </div>
  )
}

export default Form;