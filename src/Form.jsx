import React, { useRef, useState, useEffect } from 'react'

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

let one_time = false;
function Form(props) {
  let { disabled, form } = props;
  let fill_sympthons = [];
  let convince = "", qhx = "";
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (disabled === undefined) {
    disabled = false;
  } else {
    fill_sympthons = form.sympthons;
    convince = form.convince;
    qhx = form.qhx;
    hour = form.hour;
    minute = form.minute;
    second = form.second;
  }
  
  let addrRef = useRef();
  let fullnameRef = useRef();
  let citizenRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();

  let sympthons = [];

  let [ dt_form, __ ] = useState({
    hour,
    minute,
    second
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
      email : emailRef.current.value,
      year : date.getFullYear(),
      month : date.getMonth(),
      day : date.getDate()
    }
    console.log(dt);
  } 

  useEffect(() => {
    if (Object.keys(form).length === 0)
      return;
    if (disabled && ! one_time) {
      // Tiến hành load dữ liệu vào form
      let { 
        address,
        fullname,
        citizen,
        phone,
        email 
      } = form;

      // Xét giá trị
      function set(target, value) {
        target.current.value = value;
      }

      set(addrRef, address);
      set(fullnameRef, fullname);
      set(citizenRef, citizen);
      set(phoneRef, phone);
      set(emailRef, email);

      one_time = true;
    }
  }, []);

  return (
    <>
      {! disabled && 
        <Typography 
          style={{ textAlign : "center", background : "blue", color : "orange" }} 
          sx={{ m : 1 }} variant="h2" 
          component="h2">
          Đơn khai báo y tế
        </Typography>
      }
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
          <PersonalInformation 
            convince={convince}
            qhx={qhx}
            disabled={disabled} 
            callback={callbackChangeQHX} />
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
            fill={fill_sympthons} 
            sympthons={["Sốt", "Phát ban", "Đau đầu", "Mệt mỏi", "Đau cơ", "Các triệu chứng khác"]}
            callback={callbackChangeSymthon} 
          />
        </Grid>
      </Grid>
      {! disabled && <FormControl fullWidth sx={{ m : 1 }}>
        <Button variant="contained" onClick={sendForm}>Gửi đơn</Button>
      </FormControl>}
    </>
  )
}

export default Form;