import React, { useRef, useState } from 'react'

import ElementForm from './utils/ElementForm';
import SympthonForm from './form/Sympthon';
import PersonalInformation from './form/PersonalInformation';

import { 
  TextField,
  Grid,
  FormControl,
  Typography,
  Button
} from '@mui/material';

import './assets/form.css';

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
  let fullnameRef = useRef();
  let citizenRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();

  let sympthons = [];
  let convince = "";
  let qhx = "";

  let date = new Date();
  let [ dt_form, __ ] = useState({
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds()
  });

  function callbackChangeSymthon(vl) {
    sympthons = vl;
  }

  function callbackChangeQHX(_convince, _qhx) {
    convince = _convince;
    qhx = _qhx;
  }

  function sendForm() {
    let dt = {
      sympthons,
      ...dt_form,
      convince,
      qhx,
      address : addrRef.current.value,
      fullname : fullnameRef.current.value,
      citizen : citizenRef.current.value,
      phone : phoneRef.current.value,
      email : phoneRef.current.value
    }
    console.log(dt);
  }

  return (
    <div>
      <Typography style={{ textAlign : "center", background : "blue", color : "orange" }} 
        sx={{ m : 1 }} variant="h2" 
        component="h2">
        Đơn khai báo y tế</Typography>
      <Grid container style={{ overflow : "hidden" }} spacing={1}>
        <Grid xs={6}>
          <Typography style={{ textAlign : "center" }} className="margin-title" variant="h4" component="h4">Thông tin cá nhân</Typography>
          <FormControl fullWidth sx={{ m : 1 }}>
            <Grid container>
              <TfTime value={dt_form.hour} label="Giờ" />
              <TfTime value={dt_form.minute} label="Phút" />
              <TfTime value={dt_form.second} label="Giây" />
            </Grid>
          </FormControl>
          <PersonalInformation disabled={disabled} callback={callbackChangeQHX} />
          <ElementForm id="address" name="Địa chỉ nhà" reference={addrRef} disabled={disabled} />
          <ElementForm id="full-name" name="Họ và tên" reference={fullnameRef} disabled={disabled} />
          <ElementForm id="cccd" name="Căn cước công dân" reference={citizenRef} disabled={disabled} />
          <ElementForm id="phone" name="Số điện thoại" reference={phoneRef} disabled={disabled} />
          <ElementForm id="email" name="Email" reference={emailRef} disabled={disabled} />
        </Grid>
        <Grid xs={6}>
          {/* Xây dựng các triệu chứng */}
          <Typography style={{ textAlign : "center" }} className="margin-title" conponent="h4" variant="h4">Các triệu chứng</Typography>
          <SympthonForm 
            disabled={disabled} 
            sympthons={["Sốt", "Phát ban", "Đau đầu", "Mệt mỏi", "Đau cơ", "Các triệu chứng khác"]}
            callback={callbackChangeSymthon} 
          />
        </Grid>
      </Grid>
      <FormControl fullWidth sx={{ m : 1 }}>
        <Button variant="contained" onClick={sendForm}>Gửi đơn</Button>
      </FormControl>
    </div>
  )
}

export default Form;